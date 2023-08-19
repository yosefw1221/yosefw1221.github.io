import React, { LegacyRef, useEffect, useState } from 'react';
import PortfolioCard from './Portifolio';
import { IProject } from 'types';
import { useProjects } from '@firebase/projects/useProjects';
import { DocumentSnapshot } from 'firebase/firestore';
import Spinner from '@components/Spinner';
import Loading from '@components/Loading';

type IProjectsProps = {
  innerRef: LegacyRef<HTMLDivElement>;
  title: string;
};
export default function Index({ innerRef, title }: IProjectsProps) {
  const { gettingProject, fetchProjects, getProjectCount } = useProjects();
  const [projects, setProjects] = useState<IProject[]>([]);
  const [totalProjects, setTotalProjects] = React.useState<number>(0);
  let lastProjectRef = React.useRef<DocumentSnapshot<IProject>>();

  const hasMoreProjects = projects.length < totalProjects;

  useEffect(() => {
    (async () => {
      const { data, docs } = await fetchProjects(3);
      const { data: total } = await getProjectCount();
      if (!docs || !total) return;
      setProjects(data);
      setTotalProjects(total);
      lastProjectRef.current = docs[docs.length - 1];
    })();
  }, []);

  const fetchMoreProjects = async () => {
    const { data, docs } = await fetchProjects(3, lastProjectRef.current);
    if (!docs) return;
    lastProjectRef.current = docs[docs.length - 1];
    setProjects((prev) => [...prev, ...data]);
  };

  return (
    <section ref={innerRef} id='projects' className='mb-8'>
      <div className=' max-w-screen-xl p-4 mx-auto flex flex-col'>
        <div
          className='font-semibold py-4 text-5xl md:text-6xl text-white'
          dangerouslySetInnerHTML={{ __html: title }}
        />
        <div className='grid md:grid-cols-2 items-stretch justify-center lg:grid-cols-3 gap-6 flex-wrap'>
          {projects.map((project) => (
            <PortfolioCard
              key={project.id}
              image={project.thumbnail}
              link={project.link}
              linkText={project.linkText}
              tags={project.tags}
              title={project.title}
              description={project.description}
            />
          ))}
        </div>
        {(gettingProject && (
          <span
            className={`${
              !projects?.length ? 'h-[30rem]' : ''
            } flex items-center justify-center`}
          >
            <Loading />
          </span>
        )) ||
          null}
        {hasMoreProjects && (
          <button
            disabled={gettingProject}
            onClick={fetchMoreProjects}
            className='text-white border py-2 px-4 self-center mt-6 mx-auto rounded-sm hover:scale-105 animate-pulse hover:text-blue-400 hover:border-blue-400'
          >
            {gettingProject && <Spinner />}
            {gettingProject ? 'Fetching Projects' : 'Show More'}
          </button>
        )}
      </div>
    </section>
  );
}

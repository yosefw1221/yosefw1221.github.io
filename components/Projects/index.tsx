import React, { LegacyRef, useEffect, useState } from 'react';
import PortfolioCard from './Portifolio';
import { IProject } from 'types';
import { useProjects } from '@firebase/projects/useProjects';
import { DocumentSnapshot } from 'firebase/firestore';
import Spinner from '@components/Spinner';
import Loading from '@components/Loading';
import { motion } from 'framer-motion';

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
    <section 
      ref={innerRef} 
      id='projects' 
      className='projects-section py-20 relative'
    >
      <div className='max-w-screen-xl mx-auto px-4 relative z-10'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-12"
        >
          <h2
            className='font-semibold text-5xl md:text-6xl theme-text-primary'
            dangerouslySetInnerHTML={{ __html: title }}
          />
          <div className="w-24 h-1 bg-blue-500 mt-2"></div>
        </motion.div>
        
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {projects.map((project, index) => (
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
        
        {gettingProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className={`${
              !projects?.length ? 'h-[30rem]' : ''
            } flex items-center justify-center my-8`}
          >
            <Loading />
          </motion.div>
        )}
        
        {hasMoreProjects && (
          <motion.div 
            className="flex justify-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <motion.button
              disabled={gettingProject}
              onClick={fetchMoreProjects}
              className='theme-text-primary border theme-border py-3 px-6 rounded-full hover:bg-blue-500/20 transition-all'
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {gettingProject ? (
                <span className="flex items-center">
                  <Spinner />
                  <span className="ml-2">Loading Projects</span>
                </span>
              ) : (
                'View More Projects'
              )}
            </motion.button>
          </motion.div>
        )}
      </div>
      
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-1/3 right-1/4 w-64 h-64 rounded-full bg-blue-600 filter blur-[100px] opacity-10"></div>
        <div className="absolute bottom-1/4 left-1/3 w-80 h-80 rounded-full bg-indigo-600 filter blur-[100px] opacity-5"></div>
      </div>
    </section>
  );
}

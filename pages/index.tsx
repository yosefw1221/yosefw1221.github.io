import React from 'react';
import Head from 'next/head';
import Hero from '@components/Hero';
import Skills from '@components/Skills';
import About from '@components/About';
import Projects from '@components/Projects';
import Experiences from '@components/Experiences';
import useElementObserver from '@hook/useElementObserver';
import Blogs from '@components/Blogs';
import Contact from '@components/Contact-me';
import { GetStaticProps } from 'next';
import { getContents } from '@firebase/content';
import { IContents } from 'types';
import NavBar from '@components/NavBar';

export default function Home({ contents }: { contents: IContents }) {
  const [refs, activeHash] = useElementObserver(8);
  return (
    <div
      style={{ scrollBehavior: 'smooth' }}
      className='min-h-screen w-screen flex flex-col bg-[#1a191d] scroll-smooth selection:bg-[#37e5] selection:text-white'
    >
      <Head>
        <title>{contents.head.title}</title>
        <meta name="google-site-verification" content="uDoMyg4bJFxTgilmeyuQw61M9zR4_yxFvu448DYzo0Y" />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta name='description' content={contents.head.description} />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <NavBar active={activeHash} content={contents.nav} />
      <Hero innerRef={refs[0]} content={contents.hero} />
      <Blogs innerRef={refs[1]} title={contents.headlines.blog} />
      <About
        innerRef={refs[2]}
        content={contents.about}
        title={contents.headlines.about}
      />
      <Skills
        innerRef={refs[3]}
        content={contents.skills}
        title={contents.headlines.skills}
      />

      <Projects innerRef={refs[4]} title={contents.headlines.projects} />
      <Experiences
        innerRef={refs[5]}
        content={contents.experiences}
        title={contents.headlines.experience}
      />

      <Contact innerRef={refs[6]} title={contents.headlines.contact} />
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const contents = await getContents();
  return {
    props: {
      contents,
    },
    revalidate: 3600,
  };
};

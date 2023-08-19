import { getBlog, getBlogs } from '@firebase/blogs/blog';
import { GetStaticPaths, GetStaticProps } from 'next';
import faClock from '@public/icons/faClock.svg';
import faArrowLeft from '@public/icons/faArrowLeft.svg';
import { IBlog } from 'types';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import materialDark from 'react-syntax-highlighter/dist/cjs/styles/prism/material-dark';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import Link from 'next/link';
import Image from 'next/image';

export default function BlogDetail({ blog }: { blog: IBlog }) {
  return (
    <div className='max-w-screen-md px-8 overflow-auto gap-4 flex flex-col mt-32 mx-auto'>
      <Link
        href='/#blogs'
        className='rounded-full flex items-center justify-center bg-[#fff4] drop-shadow-lg w-10 h-10 text-white'
      >
        <Image alt='home' width={20} height={20} src={faArrowLeft} />
      </Link>
      <h1 className='text-white  text-5xl md:text-6xl font-bold mx-auto'>{blog?.title}</h1>
      <div className='flex gap-2 flex-wrap'>
        {blog?.tags?.map((tag) => (
          <span
            className='border-gray-500 border select-none py-1 rounded-full px-2.5 text-xs text-gray-300'
            key={tag}
          >
            {tag}
          </span>
        ))}
      </div>
      <span className='text-blue-300 flex items-center gap-2 opacity-70 ml-2 text-sm text-left font-semibold '>
        <Image alt='home' width={15} height={15} src={faClock} />
        {blog?.createdAt} {` - ${blog?.readTime} min read`}
      </span>

      <div className='text-white mt-2 mb-12 text-lg font-light text-justify'>
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeRaw]}
          components={{
            code({ children }) {
              const language = String(children).match(/\w+/)?.[0] || '';
              return (
                <SyntaxHighlighter
                  style={materialDark}
                  language={language}
                  showLineNumbers
                  PreTag='div'
                  customStyle={{
                    borderRadius: '6px',
                  }}
                >
                  {String(children)
                    .replace(language, '')
                    .replace(/\\br/g, '\n')}
                </SyntaxHighlighter>
              );
            },
            a({ node, ...props }) {
              return (
                <a
                  {...props}
                  className='text-blue-300 hover:underline'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  {props.children}
                </a>
              );
            },
          }}
        >
          {blog?.content.replace(/\\n/g, '\n')}
        </ReactMarkdown>
      </div>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const id = params?.slug as string;
  const { data: blog } = await getBlog(id);
  return {
    props: { blog },
    revalidate: 3600,
  };
};
export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await getBlogs(1000);
  const paths = data.map((blog) => ({ params: { slug: blog.id } }));
  return {
    paths,
    fallback: true,
    revalidate: 3600,
  };
};

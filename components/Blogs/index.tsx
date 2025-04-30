import React, { useEffect } from 'react';
import Blog from './BlogItem';
import { useBlogs } from '@firebase/blogs/useBlogs';
import { IBlog } from 'types';
import { DocumentSnapshot } from 'firebase/firestore';
import Spinner from '@components/Spinner';
import Loading from '@components/Loading';

export default function Blogs({ innerRef, title }: any) {
  const { gettingBlog, fetchBlogs, getBlogCount } = useBlogs();
  const [blogs, setBlogs] = React.useState<IBlog[]>([]);
  const [totalBlogs, setTotalBlogs] = React.useState<number>(0);
  let lastBlogRef = React.useRef<DocumentSnapshot<any>>();

  const hasMoreBlogs = blogs.length < totalBlogs;

  useEffect(() => {
    (async () => {
      const { data, docs } = await fetchBlogs(3);
      const { data: total } = await getBlogCount();
      if (!docs || !total) return;
      setBlogs(data);
      setTotalBlogs(total);
      lastBlogRef.current = docs[docs.length - 1];
    })();
  }, []);

  const fetchMoreBlogs = async () => {
    const { data, docs } = await fetchBlogs(3, lastBlogRef.current);
    if (!docs) return;
    lastBlogRef.current = docs[docs.length - 1];
    setBlogs((prev) => [...prev, ...data]);
  };

  return (
    <section ref={innerRef} id='blogs' className='mt-16'>
      <div className='max-w-screen-xl p-4 mx-auto flex flex-col'>
        <div
          className='font-bold pb-6 text-5xl md:text-6xl theme-text-primary'
          dangerouslySetInnerHTML={{ __html: title }}
        />
        <div
          className='grid md:grid-cols-2 items-stretch justify-center lg:grid-cols-3 gap-6 flex-wrap'
          suppressHydrationWarning
        >
          {blogs.map((blog) => (
            <Blog
              key={blog.id}
              {...blog}
            />
          ))}
        </div>
        {gettingBlog && <Loading />}
        {hasMoreBlogs && (
          <button
            disabled={gettingBlog}
            onClick={fetchMoreBlogs}
            className='theme-text-primary border py-2 px-4 self-center mt-6 mx-auto rounded-sm hover:scale-105 animate-pulse hover:text-blue-400 hover:border-blue-400'
          >
            {gettingBlog && <Spinner />}
            {gettingBlog ? 'Fetching Blogs' : 'Show More'}
          </button>
        )}
      </div>
    </section>
  );
}

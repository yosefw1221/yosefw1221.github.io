import { BlogCollection } from '..';
import { useCallback, useState } from 'react';
import { DocumentSnapshot } from 'firebase/firestore';
import { IBlog } from 'types';
import { getBlogs, getCount } from './blog';
export const useBlogs = () => {
  const [gettingBlog, setGettingBlog] = useState<boolean | undefined>();
  const [gettingBlogCount, setGettingBlogCount] = useState<
    boolean | undefined
  >();

  const fetchBlogs = useCallback(
    async (pageSize = 3, cursor?: DocumentSnapshot<IBlog>) => {
      try {
        setGettingBlog(() => true);
        const { data, docs } = await getBlogs(pageSize, cursor);
        setGettingBlog(() => false);
        return { data, docs };
      } catch (error) {
        return { data: null, docs: null, error };
      }
    },
    []
  );

  const getBlogCount = useCallback(async () => {
    try {
      setGettingBlogCount(() => true);
      const count = await getCount();
      setGettingBlogCount(() => false);
      return { data: count };
    } catch (error) {
      setGettingBlogCount(() => false);
      return { error };
    }
  }, []);

  return { gettingBlog, gettingBlogCount, fetchBlogs, getBlogCount };
};

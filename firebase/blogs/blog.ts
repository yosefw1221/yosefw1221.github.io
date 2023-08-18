import {
  DocumentSnapshot,
  getCountFromServer,
  getDocs,
  limit,
  query,
  startAfter,
  where,
  getDoc,
  doc,
} from 'firebase/firestore';
import { IBlog } from 'types';
import { BlogCollection, BlogContentCollection } from '..';

export const getBlogs = async (
  pageSize = 3,
  cursor?: DocumentSnapshot<IBlog>
) => {
  const _query = [
    limit(pageSize),
    where('published', '!=', 'false'),
    ...(cursor ? [startAfter(cursor)] : []),
  ];
  const blogQuery = query(BlogCollection, ..._query);
  const blogDocs = (await getDocs(blogQuery)).docs;
  const blogs = blogDocs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  })) as unknown as IBlog[];
  return { data: blogs, docs: blogDocs };
};

export const getBlog = async (id: string) => {
  const blogRef = doc(BlogContentCollection, id);
  const blogDoc = await getDoc(blogRef);
  const blog = { id: blogDoc.id, ...blogDoc.data() } as IBlog;
  return { data: blog, doc: blogDoc };
};
export const getCount = async () => {
  const count = await getCountFromServer(
    query(BlogCollection, where('published', '==', 'true'))
  );
  return count.data().count;
};

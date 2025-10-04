import {
  DocumentSnapshot,
  getCountFromServer,
  getDocs,
  limit,
  orderBy,
  query,
  startAfter,
  where,
} from 'firebase/firestore';
import { IProject } from 'types';
import { ProjectCollection } from '..';

export const getProjects = async (
  pageSize = 3,
  cursor?: DocumentSnapshot<IProject>
) => {
  const _query = [
    where('published', '==', 'true'),
    orderBy('order', 'asc'),
    limit(pageSize),
    ...(cursor ? [startAfter(cursor)] : []),
  ];
  const projectQuery = query(ProjectCollection, ..._query);
  const projectDocs = (await getDocs(projectQuery)).docs;
  const projects = projectDocs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  })) as unknown as IProject[];
  return { data: projects, docs: projectDocs };
};
export const getCount = async () => {
  const count = await getCountFromServer(
    query(ProjectCollection, where('published', '==', 'true'))
  );
  return count.data().count;
};

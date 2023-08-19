import { initializeApp } from 'firebase/app';
import {
  getFirestore,
  collection,
  CollectionReference,
  DocumentData,
} from 'firebase/firestore';
import { IBlog, IContents, IProject } from 'types';
import { firebaseConfig } from '@utils/config';

export const app = initializeApp(firebaseConfig);


export const firestore = getFirestore(app);

const createCollection = <T = DocumentData>(collectionName: string) => {
  return collection(firestore, collectionName) as CollectionReference<T>;
};

export const BlogCollection = createCollection<IBlog>('blogs');
export const BlogContentCollection = createCollection<IBlog>('blogContent');
export const ProjectCollection = createCollection<IProject>('projects');
export const CMSCollection = createCollection<IContents>('cms');

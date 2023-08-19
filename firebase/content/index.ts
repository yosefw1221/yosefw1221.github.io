import { doc, getDoc } from 'firebase/firestore';
import { CMSCollection } from '..';
import defaultContent from './default-content';

export const getContents = async () => {
  try {
    const contentRef = doc(CMSCollection, 'contents');
    const contentDoc = (await getDoc(contentRef))?.data();
    return contentDoc || defaultContent;
  } catch (error) {
    return defaultContent;
  }
};

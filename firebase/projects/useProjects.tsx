import { useCallback, useState } from 'react';
import { DocumentSnapshot } from 'firebase/firestore';
import {  IProject } from 'types';
import { getProjects, getCount } from './projects';

export const useProjects = () => {
  const [gettingProject, setGettingProject] = useState<boolean | undefined>();
  const [gettingProjectCount, setGettingProjectCount] = useState<
    boolean | undefined
  >();

  const fetchProjects = useCallback(
    async (pageSize = 3, cursor?: DocumentSnapshot<IProject>) => {
      try {
        setGettingProject(() => true);
        const { data, docs } = await getProjects(pageSize, cursor);        
        setGettingProject(() => false);
        return { data, docs };
      } catch (error) {
        return { data: null, docs: null, error };
      }
    },
    []
  );

  const getProjectCount = useCallback(async () => {
    try {
      setGettingProjectCount(() => true);
      const count = await getCount();
      setGettingProjectCount(() => false);
      return { data: count };
    } catch (error) {
      setGettingProjectCount(() => false);
      return { error };
    }
  }, []);

  return { gettingProject, gettingProjectCount, fetchProjects, getProjectCount };
};

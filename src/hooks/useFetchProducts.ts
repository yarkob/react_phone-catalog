import { Dispatch, SetStateAction, useEffect } from 'react';

import { FullProduct } from '../types/Phone';

export const useFetchProducts = (
  url: string,
  setState: Dispatch<SetStateAction<FullProduct[]>>,
) => {
  useEffect(() => {
    fetch(url)
      .then(data => data.json())
      .then(data => setState(data));
  }, [url, setState]);
};

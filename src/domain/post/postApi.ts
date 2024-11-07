import {PageApi, api} from '@api';

import {PageParams, PostApi} from './postTypes';

async function getList(params: PageParams): Promise<PageApi<PostApi>> {
  const response = await api.get<PageApi<PostApi>>('user/post', {
    params,
  });

  return response.data;
}

export const postApi = {
  getList,
};

import {PageApi, api} from '@api';

import {PostApi} from './postTypes';

async function getList(): Promise<PageApi<PostApi>> {
  const response = await api.get<PageApi<PostApi>>('user/post');

  return response.data;
}

export const postApi = {
  getList,
};

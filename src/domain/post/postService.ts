import {Page} from '@types';
import {apiAdapter} from 'src/api/apiAdapter';

import {postAdapter} from './postAdapter';
import {postApi} from './postApi';
import {Post} from './postTypes';

async function getList(page: number): Promise<Page<Post>> {
  const postPageApi = await postApi.getList({page, per_page: 10});
  await new Promise(resolve => {
    setTimeout(() => resolve(''), 1000);
  });
  return {
    data: postPageApi.data.map(postAdapter.toPost),
    meta: apiAdapter.toMetaDataPage(postPageApi.meta),
  };
}

export const postService = {
  getList,
};

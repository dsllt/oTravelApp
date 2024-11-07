import React from 'react';
import {
  Dimensions,
  FlatList,
  ListRenderItemInfo,
  RefreshControl,
  StyleProp,
  ViewStyle,
} from 'react-native';

import {Post, usePostList} from '@domain';
import {useScrollToTop} from '@react-navigation/native';

import {PostItem, Screen} from '@components';
import {AppTabScreenProps} from '@routes';

import {HomeHeader} from './components/HomeHeader';
import {HomeEmpty} from './HomeEmpty';
const {height: SCREEN_HEIGHT} = Dimensions.get('window');

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function HomeScreen({navigation}: AppTabScreenProps<'HomeScreen'>) {
  const {error, loading, postList, refresh, fetchNextPage} = usePostList();

  const flaListRef = React.useRef<FlatList<Post>>(null);
  useScrollToTop(flaListRef);

  function renderItem({item}: ListRenderItemInfo<Post>) {
    return <PostItem key={item.id} post={item} />;
  }

  return (
    <Screen style={$style}>
      <FlatList
        data={postList}
        ref={flaListRef}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{flex: postList.length === 0 ? 1 : undefined}}
        onEndReachedThreshold={0.1}
        onEndReached={fetchNextPage}
        ListHeaderComponent={<HomeHeader />}
        ListEmptyComponent={
          <HomeEmpty refetch={refresh} error={error} loading={loading} />
        }
        refreshControl={
          <RefreshControl refreshing={loading} onRefresh={refresh} />
        }
        refreshing={loading}
      />
    </Screen>
  );
}

const $style: StyleProp<ViewStyle> = {
  height: SCREEN_HEIGHT,
  paddingHorizontal: 0,
};

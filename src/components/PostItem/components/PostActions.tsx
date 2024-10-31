import React from 'react';

import {Post} from '@domain';

import {Box, Icon, IconProps, Text, TouchableOpacityBox} from '@components';

type PostActionsProps = Pick<
  Post,
  'reactionCount' | 'commentCount' | 'favoriteCount'
>;

export function PostActions({
  commentCount,
  favoriteCount,
  reactionCount,
}: PostActionsProps) {
  function likePost() {
    // TO DO:
  }

  function navigateToComments() {
    // TO DO:
  }

  function favoritePost() {
    // TO DO:
  }

  return (
    <Box flexDirection="row" gap="s20" marginTop="s16">
      <Item
        icon={{default: 'heart', marked: 'heartFill'}}
        marked={false}
        onPress={likePost}
        text={reactionCount}
      />
      <Item
        icon={{default: 'comment', marked: 'comment'}}
        marked={false}
        onPress={navigateToComments}
        text={commentCount}
      />
      <Item
        icon={{default: 'bookmark', marked: 'bookmarkFill'}}
        marked={false}
        onPress={favoritePost}
        text={favoriteCount}
      />
    </Box>
  );
}

interface ItemProps {
  onPress: () => void;
  icon: {
    default: IconProps['name'];
    marked: IconProps['name'];
  };
  marked: boolean;
  text: number;
}

function Item({icon, onPress, text, marked}: ItemProps) {
  return (
    <TouchableOpacityBox
      onPress={onPress}
      flexDirection="row"
      gap="s4"
      alignItems="center">
      <Icon
        name={marked ? icon.marked : icon.default}
        color={marked ? 'marked' : undefined}
      />
      {text > 0 && (
        <Text bold preset="paragraphSmall">
          {text}
        </Text>
      )}
    </TouchableOpacityBox>
  );
}

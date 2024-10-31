import React from 'react';
import {Image} from 'react-native';

import {Post} from '@domain';

import {Box, Text} from '@components';

type PostHeaderProps = Pick<Post, 'author'>;

export function PostHeader({author}: PostHeaderProps) {
  return (
    <Box flexDirection="row" gap="s12" marginBottom="s16">
      <Image
        source={{uri: author.profileURL}}
        style={{width: 34, height: 34, borderRadius: 14}}
      />
      <Text semiBold preset="paragraphMedium">
        {author.userName}
      </Text>
    </Box>
  );
}

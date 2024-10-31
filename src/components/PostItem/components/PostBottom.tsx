import React from 'react';

import {Post} from '@domain';

import {Box, Text} from '@components';

type PostBottomProps = Pick<Post, 'author' | 'text' | 'commentCount'>;

export function PostBottom({author, commentCount, text}: PostBottomProps) {
  let commentText;
  if (commentCount === 1) {
    commentText = 'ver comentário';
  } else if (commentCount > 1) {
    commentText = `ver ${commentCount} comentários`;
  }

  return (
    <Box marginTop="s16">
      <Text preset="paragraphMedium" bold>
        {author.userName}
      </Text>
      <Text preset="paragraphMedium" color="gray1">
        {text}
      </Text>
      {commentCount > 0 && (
        <Text preset="paragraphSmall" bold color="primary" marginTop="s8">
          {commentText}
        </Text>
      )}
    </Box>
  );
}

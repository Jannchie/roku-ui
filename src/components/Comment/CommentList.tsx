import { ReactNode, useEffect } from 'react';
import { Progress } from '../..';
import { Comment } from './Comment';
import { useScrollBottom } from '../../hooks';
import { CommentDataWithReplies, CommentOptions } from './CommentTypes';

export function CommentList({
  data, refoldable, generateActions, onLoadMore, loading, ...commentOptions
}: {
  data: CommentDataWithReplies[];
  generateActions?: (target: CommentDataWithReplies) => ReactNode;
  onLoadMore?: () => void;
  loading?: boolean;
} & CommentOptions) {
  // on scroll to bottom, load more comments
  const [isBottom, listContent] = useScrollBottom();
  useEffect(() => {
    if (isBottom) {
      if (onLoadMore) {
        onLoadMore();
      }
    }
  }, [isBottom, onLoadMore]);
  return (
    <div ref={listContent} className="flex flex-col gap-4  max-h-screen overflow-y-auto">
      {data.map((item) => (
        <Comment
          key={item.id}
          refoldable={refoldable}
          data={item}
          replies={item.replies}
          actions={generateActions ? generateActions(item) : null}
          {...commentOptions}
        />
      ))}
      {loading
          && (
            <Progress infinite style={{ height: 2 }} />
          )}
    </div>
  );
}

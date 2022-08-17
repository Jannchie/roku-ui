import { ReactNode, useEffect } from 'react';
import { motion, LayoutGroup } from 'framer-motion';
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
    <LayoutGroup>
      <div ref={listContent} className="flex flex-col gap-2  max-h-screen overflow-y-auto">
        {data.map((item, i) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: i * 0.05 }}
          >
            <Comment
              refoldable={refoldable}
              data={item}
              replies={item.replies}
              actions={generateActions ? generateActions(item) : null}
              {...commentOptions}
            />
          </motion.div>
        ))}
        {loading
          && (
            <div>
              <Progress infinite style={{ height: 2 }} />
            </div>
          )}
      </div>
    </LayoutGroup>
  );
}

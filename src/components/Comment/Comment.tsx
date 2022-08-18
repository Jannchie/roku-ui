import classNames from 'classnames';
import { ReactNode, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Avatar,
  Btn,
  useOnClickOutside,
  Anchor,
} from '../..';
import { SimpleComment } from './SimpleComment';
import { CommentData, CommentOptions } from './CommentTypes';

export function Comment({
  data,
  replies,
  maxReplies = 2,
  actions,
  refoldable,
  getMoreRepliesBtnText = (cnt: number) => `${cnt} more replies`,
}: {
  data: CommentData;
  actions?: ReactNode;
  replies?: CommentData[];
} & CommentOptions) {
  const [showMore, setShowMore] = useState(false);
  const repliesDetail = useRef(null);
  const { id } = data;
  useOnClickOutside(repliesDetail, () => {
    if (refoldable) {
      setShowMore(false);
    }
  });
  let { avatar, name } = data.user;
  if (typeof name === 'string') {
    if (data.user.link) {
      name = <Anchor href={data.user.link} target="_blank">{name}</Anchor>;
    } else {
      name = <Anchor>{name}</Anchor>;
    }
  }
  if (typeof avatar === 'string') {
    if (data.user.link) {
      avatar = (
        <Avatar
          src={avatar}
          alt={avatar}
          onClick={() => {
            if (data.user.link) {
              window.open(data.user.link, '_blank');
            }
          }}
        />
      );
    } else {
      avatar = (
        <Avatar
          src={avatar}
          alt={avatar}
        />
      );
    }
  }
  return (
    <motion.div
      className="flex flex-col gap-1"
    >
      <motion.div>
        <div
          className="flex gap-2"
        >
          {avatar && (
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
            >
              {avatar}
            </motion.div>
          )}
          <div className="text-sm text-ellipsis overflow-hidden">
            <div className="flex gap-1">
              <motion.div>{name}</motion.div>
              {data.time && <div className="text-default-400">{data.time}</div>}
            </div>
            <motion.div className="dark:text-default-400 text-default-700">
              {data.content}
            </motion.div>
          </div>
        </div>
        <div className="flex gap-2 mx-2 mt-1">
          {actions}
        </div>
      </motion.div>
      {replies && (
        <motion.div
          ref={repliesDetail}
          className={classNames(
            'p-2 mx-2 rounded dark:bg-default-900 bg-default-100 flex flex-col',
          )}
        >
          <AnimatePresence>
            {!showMore && replies.slice(0, maxReplies).map((reply, i) => (
              <motion.div
                key={`${reply.id}`}
                className="px-[5px]"
                initial={{ opacity: i < maxReplies ? 1 : 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <SimpleComment data={reply} />
              </motion.div>
            ))}
            {showMore && replies.map((reply, i) => (
              <motion.div
                key={`${reply.id}`}
                initial={{ opacity: i < maxReplies ? 1 : 0 }}
                animate={{ opacity: 1 }}
                exit={{
                  opacity: 0,
                  transition: { delay: (replies.length - 1 - i) * 0.1 },
                }}
                transition={{ delay: i * 0.1 }}
              >
                <Comment
                  key={reply.id}
                  data={reply}
                />
              </motion.div>
            ))}
          </AnimatePresence>
          {replies.length > maxReplies && !showMore && (
            <motion.div
              layoutId={`${id}-replies-btn}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <Btn
                text
                size="xs"
                color="primary"
                className="text-xs"
                onClick={() => { setShowMore(!showMore); }}
              >
                {getMoreRepliesBtnText(replies.length - maxReplies)}
              </Btn>
            </motion.div>
          )}
        </motion.div>
      )}
    </motion.div>
  );
}

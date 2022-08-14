import { ComponentMeta, ComponentStory } from '@storybook/react';
import classNames from 'classnames';
import {
  AnchorHTMLAttributes, ReactNode, useRef, useState,
} from 'react';
import {
  motion, AnimatePresence, LayoutGroup,
} from 'framer-motion';
import {
  Avatar, Btn, useOnClickOutside,
} from '../..';

function Anchor({ children, className, ...props }: any & AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a {...props} className={classNames('r-anchor', 'decoration', className)}>
      {children}
    </a>
  );
}

type CommentDataUser = {
  name: ReactNode;
  avatar?: ReactNode;
  link?: string;
}

type CommentData = {
  id: string | number;
  user: CommentDataUser;
  content: ReactNode;
  time?: ReactNode;
}

type CommentDataWithReplies = CommentData & {
  replies?: CommentData[];
}

type CommentOptions = {
  // likeBtn?: ReactNode;
  // dislikeBtn?: ReactNode;
  // replyBtn?: ReactNode;
  maxReplies?: number;
  getMoreRepliesBtnText?: (cnt: number) => string;
}

function SimpleComment({ data }: { data: CommentData }) {
  const { id, user, content } = data;
  return (
    <motion.div
      layoutId={`${id}-wrapper`}
    >
      <motion.div layout className="text-sm flex">
        <motion.div layoutId={`${id}-name`} className="mr-2">
          {user.name}
          :
        </motion.div>
        <motion.div layoutId={`${id}-content`} className="dark:text-zinc-400 text-zinc-700">{content}</motion.div>
      </motion.div>
    </motion.div>
  );
}

function Comment({
  data,
  replies,
  maxReplies = 2,
  getMoreRepliesBtnText = (cnt: number) => `${cnt} more replies`,
}: {
  data: CommentData;
  replies?: CommentData[];
} & CommentOptions) {
  const [showMore, setShowMore] = useState(false);
  const repliesDetail = useRef(null);
  const { id } = data;
  useOnClickOutside(repliesDetail, () => {
    setShowMore(false);
  });
  let { avatar } = data.user;
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
      layoutId={`${id}-wrapper`}
      className="flex flex-col gap-1"
    >
      <motion.div
        layout
      >
        <div
          className="flex gap-2"
        >
          { avatar && (
            <motion.div
              layoutId={`${id}-avatar`}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
            >
              { avatar }
            </motion.div>
          )}
          <div className="text-sm text-ellipsis overflow-hidden">
            <div className="flex gap-1">
              <motion.div layoutId={`${id}-name`}><Anchor>{data.user.name}</Anchor></motion.div>
              {data.time && <div className="text-zinc-400">{data.time}</div>}
            </div>
            <motion.div layoutId={`${id}-content`} className="dark:text-zinc-400 text-zinc-700">
              {data.content}
            </motion.div>
          </div>
        </div>
        <div className="flex justify-between gap-1 mx-2 mt-1">
          <div />
        </div>
      </motion.div>
      {replies && (
        <motion.div
          key={`${id}-replies`}
          ref={repliesDetail}
          layout
          className={classNames(
            'p-2 mx-2 rounded dark:bg-zinc-800 bg-zinc-100 flex flex-col',
          )}
        >
          <AnimatePresence>
            {
              !showMore && replies.slice(0, maxReplies).map((reply, i) => (
                <motion.div
                  key={`${reply.id}`}
                  layoutId={`${reply.id}`}
                  initial={{ opacity: i < maxReplies ? 1 : 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <SimpleComment data={reply} />
                </motion.div>
              ))
            }
            {
              showMore && replies.map((reply, i) => (
                <motion.div
                  key={`${reply.id}`}
                  layoutId={`${reply.id}a`}
                  initial={{ opacity: i < maxReplies ? 1 : 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, transition: { delay: (replies.length - 1 - i) * 0.1 } }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Comment
                    key={reply.id}
                    data={reply}
                  />
                </motion.div>
              ))
            }
          </AnimatePresence>
          {replies.length > maxReplies && !showMore && (
            <motion.div
              layoutId={`${id}-replies-btn}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <Btn
                text
                size="sm"
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

export default {
  // component: Chip.Group,
  title: 'Display/Comment',
} as ComponentMeta<typeof Comment>;

const CommentList = ({
  data,
  ...commentOptions
}: { data: CommentDataWithReplies[] } & CommentOptions) => (
  <div className="relative flex flex-col gap-4 m-auto max-w-lg">
    <LayoutGroup>
      {data.map((item, i) => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: i * 0.05 }}
        >
          <Comment data={item} replies={item.replies} {...commentOptions} />
        </motion.div>
      ))}
    </LayoutGroup>
  </div>
);

const Template: ComponentStory<typeof Comment> = () => {
  const data: CommentDataWithReplies[] = [
    {
      id: '1',
      user: {
        name: 'Zeroroku',
        avatar: 'https://i.pravatar.cc/80?img=1',
        link: 'https://zeroroku.com',
      },
      content: 'Hello, world!',
      time: '2020-01-01',
    },
    {
      id: '2',
      user: {
        name: 'Jannchie',
        avatar: 'https://i.pravatar.cc/80?img=2',
      },
      content: 'This is a comment.',
      replies: [
        {
          id: '3',
          user: {
            name: 'Jannchie',
            avatar: 'https://i.pravatar.cc/80?img=2',
          },
          content: 'This is a reply.',
        },
        {
          id: '9',
          user: {
            name: 'Cake',
            avatar: 'https://i.pravatar.cc/80?img=3',
          },
          content: "I'm a very very very very very very very very very very very very Long reply.",
        },
        {
          id: '4',
          user: {
            name: 'Cake',
            avatar: 'https://i.pravatar.cc/80?img=3',
          },
          content: "I'm a reply.",
        },
        {
          id: '8',
          user: {
            name: 'Cake',
            avatar: 'https://i.pravatar.cc/80?img=3',

          },
          content: "I'm a reply 2.",
        },

        {
          id: '5',
          user: {
            name: 'X',
            avatar: 'https://i.pravatar.cc/80?img=4',
          },
          content: 'Another reply.',
        },
      ],
    },
    {
      id: '16',
      user: {
        name: 'X',
        avatar: 'https://i.pravatar.cc/80?img=4',
      },
      content: 'Another reply.',
      replies: [
        {
          id: '17',
          user: {
            name: 'X',
            avatar: 'https://i.pravatar.cc/80?img=4',
          },
          content: 'This is a reply.',
        },
        {
          id: '12',
          user: {
            name: 'Jannchie',
            avatar: 'https://i.pravatar.cc/80?img=2',
          },
          content: 'This is a reply.',
        },
        {
          id: '13',
          user: {
            name: 'Jannchie',
            avatar: 'https://i.pravatar.cc/80?img=2',
          },
          content: 'This is a reply.',
        },
      ],
    },
  ];

  return (
    <CommentList data={data} />
  );
};

export const Default = Template.bind({});
Default.args = {};

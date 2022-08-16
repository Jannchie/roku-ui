import { ComponentMeta, ComponentStory } from '@storybook/react';
import classNames from 'classnames';
import {
  ReactNode, useRef, useState,
} from 'react';
import {
  motion, AnimatePresence, LayoutGroup,
} from 'framer-motion';
import {
  Avatar,
  Btn,
  useOnClickOutside,
  Anchor,
  MaterialSymbolIcon,
  Textarea,
} from '../..';

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
  [key: string]: any;
}

type CommentDataWithReplies = CommentData & {
  replies?: CommentData[];
}

type CommentOptions = {
  maxReplies?: number;
  getMoreRepliesBtnText?: (cnt: number) => string;
  refoldable?: boolean;
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
        <motion.div layoutId={`${id}-content`} className="dark:text-default-400 text-default-700">{content}</motion.div>
      </motion.div>
    </motion.div>
  );
}

function Comment({
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
              <motion.div layoutId={`${id}-name`}>{name}</motion.div>
              {data.time && <div className="text-default-400">{data.time}</div>}
            </div>
            <motion.div layoutId={`${id}-content`} className="dark:text-default-400 text-default-700">
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
          key={`${id}-replies`}
          ref={repliesDetail}
          layout
          className={classNames(
            'p-2 mx-2 rounded dark:bg-default-800 bg-default-100 flex flex-col',
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
  title: 'Hyper/Comment',
} as ComponentMeta<typeof Comment>;

const CommentList = ({
  data,
  refoldable,
  generateActions,
  ...commentOptions
}: {
  data: CommentDataWithReplies[]
  generateActions?: (target: CommentDataWithReplies) => ReactNode;
} & CommentOptions) => (
  <LayoutGroup>
    <div className="flex flex-col gap-2">
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
    </div>
  </LayoutGroup>
);

const Template: ComponentStory<typeof Comment> = () => {
  const raw: CommentDataWithReplies[] = [
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
  const [data, setData] = useState(raw);
  const [input, setInput] = useState('');
  const [replyTo, setReplyTo] = useState<CommentData|null>(null);
  return (
    <div className="relative flex flex-col gap-4 m-auto max-w-lg">
      <CommentList
        // eslint-disable-next-line react/no-unstable-nested-components
        generateActions={(target) => (
          [
            <Btn
              key="like"
              text
              left
              color="rose"
              className="w-[4rem]"
              size="sm"
              onClick={() => {
                // eslint-disable-next-line no-console
                console.log('like', target);
                if (target.liked) {
                  // eslint-disable-next-line no-param-reassign
                  target.like = 0;
                  // eslint-disable-next-line no-param-reassign
                  target.liked = false;
                } else {
                  // eslint-disable-next-line no-param-reassign
                  target.like = 1;
                  // eslint-disable-next-line no-param-reassign
                  target.liked = true;
                }
                setData([...data]);
              }}
            >
              {
                target.liked
                  ? <MaterialSymbolIcon fill icon="favorite" />
                  : <MaterialSymbolIcon icon="favorite" />
              }
              <span className="ml-1">
                { target.like ?? 0}
              </span>
            </Btn>,
            <Btn
              key="reply"
              text
              left
              color="green"
              size="sm"
              className="w-[4rem]"
              onClick={() => {
                if (replyTo === target) {
                  setReplyTo(null);
                } else {
                  setReplyTo(target);
                }
              }}
            >
              <MaterialSymbolIcon icon="reply" />
              {
                target.replies && (
                  <span className="ml-1">
                    { target.replies.length}
                  </span>
                )
              }
            </Btn>,
          ]
        )}
        data={data}
        getMoreRepliesBtnText={(cnt) => `Other ${cnt} replies`}
      />
      <div>
        <div>
          {replyTo ? (
            <span>
              To
              {' '}
              {replyTo.user.name }
            </span>
          ) : <span>Jannchie</span>}
          :
        </div>
        <div className="flex gap-2 items-center">
          <Textarea
            value={input}
            setValue={setInput}
            className="w-full"
            placeholder="Please Input The Comment"
          />
          <Btn
            border
            label="Send"
            color="primary"
            onClick={() => {
            // eslint-disable-next-line no-console
              const newComment = {
                id: `${data.length + 10000 * Math.random()}`,
                user: {
                  name: 'Jannchie',
                  avatar: 'https://i.pravatar.cc/80?img=2',
                },
                content: input,
              };
              if (!replyTo) {
                setData([...data, newComment]);
              } else {
                setData([...data.map((d) => {
                  if (d === replyTo) {
                    const c = { ...d };
                    if (!c.replies) {
                      c.replies = [];
                    }
                    c.replies = [...c.replies, newComment];
                    return c;
                  }
                  return d;
                })]);
                setReplyTo(null);
              }
              setInput('');
            }}
          />
        </div>
      </div>
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {};

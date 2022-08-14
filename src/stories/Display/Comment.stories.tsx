import { ComponentMeta, ComponentStory } from '@storybook/react';
import classNames from 'classnames';
import { AnchorHTMLAttributes, useRef, useState } from 'react';
import {
  motion,
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

// why need key: https://stackoverflow.com/a/33683036/8625892
function Message({ data }: any) {
  return (
    <motion.div
      layoutId={`${data.id}-wrapper`}
    >
      <motion.div layout className="text-sm whitespace-nowrap text-ellipsis overflow-hidden">
        <motion.span layoutId={`${data.id}-name`} className="mr-2">
          {data.user.name}
          :
        </motion.span>
        <motion.span layoutId={`${data.id}-content`} className="dark:text-zinc-400 text-zinc-700">{data.content}</motion.span>
      </motion.div>
    </motion.div>
  );
}

function Comment({
  id, data, replies, onClickLike, onClickDislike, onClickReply, maxReplies = 2, getMoreRepliesBtnText = (cnt: number) => `${cnt} more replies`,
}: any) {
  const [showMore, setShowMore] = useState(false);
  const repliesDetail = useRef(null);
  useOnClickOutside(repliesDetail, () => {
    setShowMore(false);
  });
  function repliesHead() {
    return (
      <motion.div
        layoutId={`${id}-replies`}
        className="p-2 mx-2 rounded dark:bg-zinc-800 bg-zinc-100 flex flex-col gap-1"
      >
        {replies.slice(0, maxReplies).map((reply: any) => (
          <Message key={reply.id} data={reply} />
        ))}
        {replies.length > maxReplies && (
        <motion.div layoutId="replies-btn">
          <Btn
            text
            size="sm"
            color="primary"
            className="text-xs"
            onClick={() => { setShowMore(!showMore); }}
          >
            {getMoreRepliesBtnText(data.replies.length - maxReplies)}
          </Btn>
        </motion.div>
        )}
      </motion.div>
    );
  }

  function expandReplies() {
    return (
      <div className="fixed inset-0 overflow-hidden flex">
        <motion.div
          ref={repliesDetail}
          layoutId={`${id}-replies`}
          className="absolute p-2 inset-y-10 left-2 right-2 md:left-1/4 md:right-1/4 rounded dark:bg-zinc-800 bg-zinc-100 flex flex-col gap-2 overflow-hidden"
          onScroll={(e) => {
            e.currentTarget.style.top = `-${e.currentTarget.scrollTop}px`;
          }}
        >
          <motion.div
            className="m-2"
          >
            <Comment key={`title-${id}`} id={`title-${id}`} data={data} />
            <div className="ml-4 flex-col flex gap-1">
              {data.replies.map((reply: any, i: number) => (
                <motion.div
                  key={reply.id}
                  initial={{ opacity: i < maxReplies ? 1 : 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: i * 0.1 }}
                >
                  <Comment id={reply.id} data={reply} />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    );
  }
  return (
    <motion.div
      layoutId={`${id}-wrapper`}
      className="flex flex-col gap-1"
    >
      <div
        className="flex gap-2"
      >
        <motion.div
          layoutId={`${id}-avatar`}
        >
          <Avatar src="https://placehold.jp/80x80.png" alt="place hold" />
        </motion.div>
        <div className="text-sm text-ellipsis overflow-hidden">
          <div className="flex gap-1">
            <motion.div layoutId={`${id}-name`}><Anchor>{data.user.name}</Anchor></motion.div>
            {/* <div className="text-zinc-400">{123123}</div> */}
          </div>
          <motion.div layoutId={`${id}-content`} className="dark:text-zinc-400 text-zinc-700">{data.content}</motion.div>
        </div>
      </div>
      <div className="flex justify-between gap-1">
        <div>
          {onClickDislike && <Btn leadingIcon="✕" size="sm" onClick={onClickDislike}>Dislike</Btn>}
          {onClickLike && <Btn leadingIcon="〇" size="sm" onClick={onClickLike}>Like it</Btn>}
          {onClickReply && <Btn size="sm" onClick={onClickReply}>Reply</Btn>}
        </div>
      </div>
      {showMore
        ? (
          <>
            <div style={{ height: 90 }} />
            {expandReplies()}
          </>
        )
        : replies && (
          repliesHead()
        )}
    </motion.div>
  );
}

export default {
  // component: Chip.Group,
  title: 'Display/Comment',
} as ComponentMeta<typeof Comment>;

const CommentList = ({ data }: any) => (
  <div className="relative flex flex-col gap-4 m-auto max-w-lg">
    {data.map((item: any) => (
      <Comment key={item.id} id={item.id} data={item} replies={item.replies} />
    ))}
  </div>
);

const Template: ComponentStory<typeof Comment> = () => {
  const data = [
    {
      id: '1',
      user: {
        name: 'Zeroroku',
        avatar: 'https://placehold.jp/80x80.png',
      },
      content: 'Hello, world!',
    },
    {
      id: '2',
      user: {
        name: 'Jannchie',
        avatar: 'https://placehold.jp/80x80.png',
      },
      content: 'This is a comment.',
      replies: [
        {
          id: '3',
          user: {
            name: 'Jannchie',
            avatar: 'https://placehold.jp/80x80.png',
          },
          content: 'This is a reply.',
        },
        {
          id: '9',
          user: {
            name: 'Cake',
            avatar: 'https://placehold.jp/80x80.png',
          },
          content: "I'm a very very very very very very very very very very very very Long reply.",
        },
        {
          id: '4',
          user: {
            name: 'Cake',
            avatar: 'https://placehold.jp/80x80.png',
          },
          content: "I'm a reply.",
        },
        {
          id: '8',
          user: {
            name: 'Cake',
            avatar: 'https://placehold.jp/80x80.png',
          },
          content: "I'm a reply 2.",
        },

        {
          id: '5',
          user: {
            name: 'X',
            avatar: 'https://placehold.jp/80x80.png',
          },
          content: 'Another reply.',
        },
      ],
    },
    {
      id: '6',
      user: {
        name: 'X',
        avatar: 'https://placehold.jp/80x80.png',
      },
      content: 'Another reply.',
      replies: [
        {
          id: '7',
          user: {
            name: 'X',
            avatar: 'https://placehold.jp/80x80.png',
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
Default.args = {
  children: 'Default Chip',
};

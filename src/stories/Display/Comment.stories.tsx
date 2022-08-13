import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Avatar, Btn } from '../..';

function Comment({
  body, onClickLike, onClickDislike, onClickReply,
}: any) {
  return (
    <div className="flex flex-col gap-1">
      <div className="flex gap-2">
        <div>
          <Avatar src="https://placehold.jp/80x80.png" alt="place hold" />
        </div>
        {body}
      </div>
      <div className="flex justify-between gap-1">
        <div>
          {onClickDislike && <Btn leadingIcon="✕" size="sm" onClick={onClickDislike}>Dislike</Btn>}
          {onClickLike && <Btn leadingIcon="〇" size="sm" onClick={onClickLike}>Like it</Btn>}
          {onClickReply && <Btn size="sm" onClick={onClickReply}>Reply</Btn>}
        </div>
      </div>
    </div>
  );
}

export default {
  // component: Chip.Group,
  title: 'Display/Comment',
} as ComponentMeta<typeof Comment>;

const Template: ComponentStory<typeof Comment> = () => {
  const name = 'Jannchie';
  const time = 'Just now';
  const content = 'This is the content. The content is sometimes longer, so the length of the sample text is also longer.';
  const body = (
    <div className="text-sm">
      <div className="flex gap-1">
        <div>{name}</div>
        <div className="text-zinc-400">{time}</div>
      </div>
      <div className="text-sm">{content}</div>
    </div>
  );
  return (
    <div className="flex flex-col gap-4">
      <Comment body={body} />
      <Comment body={body} />
      <Comment body={body} />
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  children: 'Default Chip',
};

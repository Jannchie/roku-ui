import { HTMLAttributes, ReactNode } from 'react';
import { CommentForm } from './CommentForm';
import { CommentList } from './CommentList';
import { CommentData, CommentDataWithReplies } from './CommentTypes';

export function CommentComponent(
  {
    data,
    replyTo,
    input,
    setInput,
    onLoadMore,
    loading,
    generateActions,
    onSend,
    ...props
  }: {
    data: CommentDataWithReplies[];
    replyTo: CommentData | null;
    input: string;
    setInput: (i: string) => void;
    onLoadMore: () => void;
    loading: boolean;
    generateActions: (d: CommentData) => ReactNode;
    onSend: () => void;
  } & HTMLAttributes<HTMLDivElement>,
) {
  return (
    <div {...props} className="relative flex flex-col gap-4 m-auto h-full">
      <CommentList
        loading={loading}
        generateActions={generateActions}
        data={data}
        getMoreRepliesBtnText={(cnt) => `Other ${cnt} replies`}
        onLoadMore={onLoadMore}
      />
      <CommentForm
        replyTo={replyTo}
        input={input}
        setInput={setInput}
        onSend={onSend}
      />
    </div>
  );
}

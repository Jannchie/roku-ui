import { ReactNode } from 'react';
import { CommentForm } from './CommentForm';
import { CommentList } from './CommentList';
import { CommentData, CommentDataWithReplies } from './CommentTypes';

export function CommentComponent(
  {
    setData,
    data,
    replyTo,
    setReplyTo,
    input,
    setInput,
    onLoadMore,
    loading,
    generateActions,
  }: {
    setData: (d: CommentDataWithReplies[]) => void;
    data: CommentDataWithReplies[];
    replyTo: CommentData | null;
    setReplyTo: (r: CommentData | null) => void;
    input: string;
    setInput: (i: string) => void;
    onLoadMore: () => void;
    loading: boolean;
    generateActions: (d: CommentData) => ReactNode;
  },
) {
  return (
    <div className="relative flex flex-col gap-4 m-auto h-full">
      <CommentList
        loading={loading}
        generateActions={generateActions}
        data={data}
        getMoreRepliesBtnText={(cnt) => `Other ${cnt} replies`}
        onLoadMore={onLoadMore}
      />
      <CommentForm
        setData={setData}
        data={data}
        replyTo={replyTo}
        setReplyTo={setReplyTo}
        input={input}
        setInput={setInput}
      />
    </div>
  );
}

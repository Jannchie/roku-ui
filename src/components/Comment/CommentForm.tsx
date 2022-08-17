import { Btn, Textarea } from '../..';
import { CommentData, CommentDataWithReplies } from './CommentTypes';

export function CommentForm({
  replyTo, input, setInput, data, setData, setReplyTo,
}: {
  replyTo: CommentData | null;
  input: string;
  setInput: (i: string) => void;
  data: CommentDataWithReplies[];
  setData: (d: CommentDataWithReplies[]) => void;
  setReplyTo: (r: CommentData | null) => void;
}) {
  return (
    <div>
      <div>
        {replyTo ? (
          <span>
            To
            {' '}
            {replyTo.user.name}
          </span>
        ) : <span>Jannchie</span>}
        :
      </div>
      <div className="flex gap-2 items-center">
        <Textarea
          border="dashed"
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
  );
}

import { Btn, Textarea } from '../..'
import { CommentData } from './CommentTypes'

export function CommentForm ({
  replyTo, input, setInput, onSend,
}: {
  replyTo: CommentData | null
  input: string
  setInput: (i: string) => void
  onSend: () => void
}) {
  return (
    <div>
      <div>
        {(replyTo != null)
          ? (
            <span>
            回复
              {' '}
              {replyTo.user.name}
            </span>
          )
          : <span>{'发送评论'}</span>}
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
          onClick={onSend}
        />
      </div>
    </div>
  )
}

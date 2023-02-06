import classNames from 'classnames'
import { ReactNode, useRef, useState } from 'react'
import {
  Avatar,
  Btn,
  useOnClickOutside,
  Anchor,
} from '../..'
import { SimpleComment } from './SimpleComment'
import { CommentData, CommentOptions } from './CommentTypes'
import Markdown from 'markdown-to-jsx'

export function Comment ({
  data,
  replies,
  maxReplies = 2,
  actions,
  refoldable,
  getMoreRepliesBtnText = (cnt: number) => `${cnt} more replies`,
}: {
  data: CommentData
  actions?: ReactNode
  replies?: CommentData[]
} & CommentOptions) {
  const [showMore, setShowMore] = useState(false)
  const repliesDetail = useRef(null)
  useOnClickOutside(repliesDetail, () => {
    if (refoldable) {
      setShowMore(false)
    }
  })
  let { avatar, name } = data.user
  if (typeof name === 'string') {
    if (data.user.link) {
      name = <Anchor href={data.user.link} target="_blank">{name}</Anchor>
    } else {
      name = <Anchor>{name}</Anchor>
    }
  }
  if (typeof avatar === 'string') {
    if (data.user.link) {
      avatar = (
        <Avatar
          size="sm"
          src={avatar}
          alt={avatar}
          onClick={() => {
            if (data.user.link) {
              window.open(data.user.link, '_blank')
            }
          }}
        />
      )
    } else {
      avatar = (
        <Avatar
          size="sm"
          src={avatar}
          alt={avatar}
        />
      )
    }
  }
  return (
    <div
      className="flex flex-col bg-b-3 rounded py-2 px-4 gap-2"
    >
      <div className="flex flex-col gap-1">
        <div
          className="flex gap-2 items-center mb-2 text-sm"
        >
          {avatar}
          <div className="font-bold">
            {name}
          </div>
          {data.time && <div className="text-f-3">{data.time}</div>}
        </div>
        <div className="text-f-2 not-prose">
          <Markdown>
            {data.content.replaceAll('\n', '\n\n')}
          </Markdown>
        </div>
        { actions &&
          (
            <div className="flex">
              {actions}
            </div>
          )}
      </div>
      {(replies != null) && (
        <div
          ref={repliesDetail}
          className={classNames(
            'rounded flex flex-col gap-2',
          )}
        >
          {!showMore && replies.slice(0, maxReplies).map((reply) => (
            <div
              key={`${reply.id}`}
            >
              <SimpleComment data={reply} />
            </div>
          ))}
          {showMore && replies.map((reply) => (
            <div
              key={`${reply.id}`}
            >
              <Comment
                key={reply.id}
                data={reply}
              />
            </div>
          ))}
          {replies.length > maxReplies && !showMore && (
            <div>
              <Btn
                text
                size="sm"
                color="primary"
                className="text-xs"
                onClick={() => { setShowMore(!showMore) }}
              >
                {getMoreRepliesBtnText(replies.length - maxReplies)}
              </Btn>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

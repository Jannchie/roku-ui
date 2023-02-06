import { type CommentData } from './CommentTypes'

export function SimpleComment ({ data }: { data: CommentData }) {
  const { user, content, id, time } = data
  return (
    <div key={id}>
      {
        time && (
          <div>
            {time}
          </div>
        )
      }
      <div className="text-sm flex">
        <div className="mr-2">
          {user.name}
        </div>
        <div className="text-sm not-prose dark:prose-invert">
          {content}
        </div>
      </div>
    </div>
  )
}

import { CommentData } from './CommentTypes';

export function SimpleComment({ data }: { data: CommentData; }) {
  const { user, content } = data;
  return (
    <div>
      <div className="text-sm flex">
        <div className="mr-2">
          {user.name}
          :
        </div>
        <div className="dark:text-default-400 text-default-700">{content}</div>
      </div>
    </div>
  );
}

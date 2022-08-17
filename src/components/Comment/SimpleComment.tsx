import { motion } from 'framer-motion';
import { CommentData } from './CommentTypes';

export function SimpleComment({ data }: { data: CommentData; }) {
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

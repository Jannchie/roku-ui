import { BtnPage } from './pages/BtnPage';
import { ChipPage } from './pages/ChipPage';
import { CommentPage } from './pages/CommentPage';
import { EditableLinePage } from './pages/EditableLinePage';
import { HomePage } from './pages/HomePage';
import { ResultPage } from './pages/ResultPage';
import { TypographyPage } from './pages/TypographyPage';

export const router = [{
  path: '/',
  title: 'Home',
  icon: 'home',
  element: <HomePage />,
}, {
  path: 'comment',
  title: 'Comment',
  icon: 'comment',
  element: <CommentPage />,
}, {
  path: 'typography',
  title: 'Typography',
  icon: 'title',
  element: <TypographyPage />,
}, {
  path: 'btn',
  title: 'Button',
  icon: 'crop_16_9',
  element: <BtnPage />,
}, {
  path: 'result',
  title: 'Result',
  icon: 'check_circle',
  element: <ResultPage />,
}, {
  path: 'chip',
  title: 'Chip',
  icon: 'label',
  element: <ChipPage />,
}, {
  path: 'editable-line',
  title: 'Editable Line',
  icon: 'edit',
  element: <EditableLinePage />,
}];

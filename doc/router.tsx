import { AvatarPage } from './pages/AvatarPage'
import { BtnPage } from './pages/BtnPage'
import { TagPage } from './pages/TagPage'
import { CommentPage } from './pages/CommentPage'
import { EditableLinePage } from './pages/EditableLinePage'
import { DigitalPage } from './pages/DigitalPage'
import { HomePage } from './pages/HomePage'
import { ResultPage } from './pages/ResultPage'
import { TypographyPage } from './pages/TypographyPage'

export const router = [{
  path: '/',
  title: 'Home',
  icon: 'home',
  element: <HomePage />,
}, {
  path: 'typography',
  title: 'Typography',
  icon: 'title',
  element: <TypographyPage />,
}, {
  path: 'btn',
  title: '按钮 (Btn)',
  icon: 'crop_16_9',
  element: <BtnPage />,
}, {
  path: 'result',
  title: '结果 (Result)',
  icon: 'check_circle',
  element: <ResultPage />,
}, {
  path: 'tag',
  title: '标签 (Tag)',
  icon: 'label',
  element: <TagPage />,
}, {
  path: 'editable-line',
  title: 'Editable Line',
  icon: 'edit',
  element: <EditableLinePage />,
}, {
  path: 'digital',
  title: 'Digital',
  icon: '123',
  element: <DigitalPage />,
}, {
  path: 'avatar',
  title: 'Avatar',
  icon: 'account_circle',
  element: <AvatarPage />,
}, {
  path: 'comment',
  title: '评论 (Comment)',
  icon: 'comment',
  element: <CommentPage />,
}]

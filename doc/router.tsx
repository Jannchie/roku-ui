import { AvatarPage } from './pages/AvatarPage'
import { BtnPage } from './pages/BtnPage'
import { TagPage } from './pages/TagPage'
import { CommentPage } from './pages/CommentPage'
import { EditableLinePage } from './pages/EditableLinePage'
import { DigitalPage } from './pages/DigitalPage'
import { ResultPage } from './pages/ResultPage'
import { TypographyPage } from './pages/TypographyPage'
import { HolyGrailPage } from './pages/HolyGrailPage'
import { AppbarPage } from './pages/AppbarPage'
import HomeMD from './markdown/home.md?raw'
import articleMD from './markdown/article.md?raw'
import { Page } from './components/Page'
export const router = [{
  path: '/',
  title: '主页',
  icon: 'home',
  element: <Page md={HomeMD} />,
}, {
  path: 'typography',
  title: '排版（Typography）',
  icon: 'title',
  element: <TypographyPage />,
}, {
  path: 'appbar',
  title: ' 应用栏（Appbar）',
  icon: 'settop_component',
  element: <AppbarPage />,
}, {
  path: 'btn',
  title: '按钮（Btn）',
  icon: 'crop_16_9',
  element: <BtnPage />,
}, {
  path: 'result',
  title: '结果（Result）',
  icon: 'check_circle',
  element: <ResultPage />,
}, {
  path: 'tag',
  title: '标签 (Tag)',
  icon: 'label',
  element: <TagPage />,
}, {
  path: 'editable-line',
  title: '可编行（Editable Line）',
  icon: 'edit',
  element: <EditableLinePage />,
}, {
  path: 'digital',
  title: '数字（Digital）',
  icon: '123',
  element: <DigitalPage />,
}, {
  path: 'avatar',
  title: '头像（Avatar）',
  icon: 'account_circle',
  element: <AvatarPage />,
}, {
  path: 'comment',
  title: '评论 (Comment)',
  icon: 'comment',
  element: <CommentPage />,
}, {
  path: 'holy-grail',
  title: '圣杯 (HolyGrail)',
  icon: 'view_day',
  element: <HolyGrailPage />,
}, {
  path: 'article',
  title: '文章（Article）',
  icon: 'article',
  element: <Page md={articleMD} />,
},
]

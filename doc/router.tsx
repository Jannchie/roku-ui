import editableLineMD from './markdown/editable-line.md?raw'
import typographyMD from './markdown/typography.md?raw'
import HomeMD from './markdown/home.md?raw'
import articleMD from './markdown/article.md?raw'
import appbarMD from './markdown/appbar.md?raw'
import commentMD from './markdown/comment.md?raw'
import avatarMD from './markdown/avatar.md?raw'
import buttonMD from './markdown/button.md?raw'
import resultMD from './markdown/result.md?raw'
import dynamicValueMD from './markdown/dynamic-value.md?raw'
import holyGrailMD from './markdown/holy-grail.md?raw'
import tagMD from './markdown/tag.md?raw'
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
  element: <Page md={typographyMD} />,
}, {
  path: 'appbar',
  title: ' 应用栏（Appbar）',
  icon: 'settop_component',
  element: <Page md={appbarMD} />,
}, {
  path: 'btn',
  title: '按钮（Btn）',
  icon: 'crop_16_9',
  element: <Page md={buttonMD} />,
}, {
  path: 'result',
  title: '结果（Result）',
  icon: 'check_circle',
  element: <Page md={resultMD} />,
}, {
  path: 'tag',
  title: '标签 (Tag)',
  icon: 'label',
  element: <Page md={tagMD} />,
}, {
  path: 'editable-line',
  title: '可编行（Editable Line）',
  icon: 'edit',
  element: <Page md={editableLineMD} />,
}, {
  path: 'dynamic-value',
  title: '动态数值（Dynamic Value）',
  icon: '123',
  element: <Page md={dynamicValueMD} />,
}, {
  path: 'avatar',
  title: '头像（Avatar）',
  icon: 'account_circle',
  element: <Page md={avatarMD} />,
}, {
  path: 'comment',
  title: '评论 (Comment)',
  icon: 'comment',
  element: <Page md={commentMD} />,
}, {
  path: 'holy-grail',
  title: '圣杯 (HolyGrail)',
  icon: 'view_day',
  element: <Page md={holyGrailMD} />,
}, {
  path: 'article',
  title: '文章（Article）',
  icon: 'article',
  element: <Page md={articleMD} />,
},
]

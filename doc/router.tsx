import HomeMD from './markdown/home.md?raw'
import { Page } from './components/Page'
import { TablerMoon } from '@roku-ui/icons-tabler'
export const router = [{
  path: '/',
  title: '主页',
  icon: 'home',
  element: <Page md={HomeMD} />,
}, {
  path: 'theme-toggle',
  title: '主题切换器（Theme Toggle）',
  icon: <TablerMoon />,
  element: <Page />,
}, {
  path: 'auto-complete',
  title: '补选框（Auto Complete）',
  icon: 'inventory_2',
  element: <Page />,
}, {
  path: 'anchor',
  title: '锚点（Anchor）',
  icon: 'anchor',
  element: <Page />,
}, {
  path: 'typography',
  title: '排版（Typography）',
  icon: 'title',
  element: <Page />,
}, {
  path: 'panel',
  title: '面板（Panel）',
  icon: 'table_bar',
  element: <Page />,
}, {
  path: 'appbar',
  title: ' 应用栏（Appbar）',
  icon: 'settop_component',
  element: <Page />,
}, {
  path: 'btn',
  title: '按钮（Btn）',
  icon: 'crop_16_9',
  element: <Page />,
}, {
  path: 'result',
  title: '结果（Result）',
  icon: 'check_circle',
  element: <Page />,
}, {
  path: 'tag',
  title: '标签 (Tag)',
  icon: 'label',
  element: <Page />,
}, {
  path: 'textarea',
  title: '文本框（Textarea）',
  icon: 'subject',
  element: <Page />,
}, {
  path: 'text-field',
  title: '输入框（Text Field）',
  icon: 'edit',
  element: <Page />,
}, {
  path: 'editable-line',
  title: '可编行（Editable Line）',
  icon: 'drive_file_rename_outline',
  element: <Page />,
}, {
  path: 'dynamic-value',
  title: '灵动数值（Dynamic Value）',
  icon: '123',
  element: <Page />,
}, {
  path: 'dynamic-island',
  title: '灵动岛（Dynamic Island）',
  icon: 'landscape',
  element: <Page />,
}, {
  path: 'tabs',
  title: '选项卡（Tabs）',
  icon: 'tab',
  element: <Page />,
}, {
  path: 'avatar',
  title: '头像（Avatar）',
  icon: 'account_circle',
  element: <Page />,
}, {
  path: 'comment',
  title: '评论 (Comment)',
  icon: 'comment',
  element: <Page />,
}, {
  path: 'holy-grail',
  title: '圣杯 (HolyGrail)',
  icon: 'view_day',
  element: <Page />,
}, {
  path: 'article',
  title: '文章（Article）',
  icon: 'article',
  element: <Page />,
}, {
  path: 'notice',
  title: '通知（Notice）',
  icon: 'campaign',
  element: <Page />,
}, {
  path: 'notification',
  title: '通知（Notification）',
  icon: 'notifications',
  element: <Page />,
}, {
  path: 'badge',
  title: '徽章（Badge）',
  icon: 'mark_chat_unread',
  element: <Page />,
}, {
  path: 'modal',
  title: '模态框（Modal）',
  icon: 'web_asset',
  element: <Page />,
}, {
  path: 'popover',
  title: '溢出框（Popover）',
  icon: 'live_help',
  element: <Page />,
}, {
  path: 'switch',
  title: '开关（Switch）',
  icon: 'toggle_on',
  element: <Page />,
}, {
  path: 'window',
  title: '窗体（Window）',
  icon: 'wysiwyg',
  element: <Page />,
}, {
  path: 'phone',
  title: '手机模型（Phone）',
  icon: 'smartphone',
  element: <Page />,
}, {
  path: 'steps',
  title: '步骤（Steps）',
  icon: 'arrow_right_alt',
  element: <Page />,
}, {
  path: 'collapse',
  title: '折叠面板（Collapse）',
  icon: 'expand_more',
  element: <Page />,
}, {
  path: 'icon',
  title: '图标（Icon）',
  icon: 'dentistry',
  element: <Page />,
}, {
  path: 'rating',
  title: '评分（Rating）',
  icon: 'star',
  element: <Page />,
}, {
  path: 'radio',
  title: '单选项（Radio）',
  icon: 'radio',
  element: <Page />,
}, {
  path: 'title-bar',
  title: '标题栏（Title Bar）',
  icon: 'window',
  element: <Page />,
}, {
  path: 'text',
  title: '文本（Text）',
  icon: 'format_size',
  element: <Page />,
}, {
  path: 'test',
  title: '测试用',
  icon: 'science',
  element: <Page />,
},
]

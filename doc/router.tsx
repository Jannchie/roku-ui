import HomeMD from './markdown/home.md?raw'
import { Page } from './components/Page'
import { Tabler123, TablerAnchor, TablerArticle, TablerCircleCheck, TablerCursorText, TablerHome, TablerIcons, TablerInputSearch, TablerLayoutNavbar, TablerList, TablerMessage, TablerMoon, TablerRectangle, TablerRectangleFilled, TablerStar, TablerTag, TablerTypography, TablerUserCircle, TablerWindow } from '@roku-ui/icons-tabler'
import { MaterialSymbolsArrowRightAlt, MaterialSymbolsArticle, MaterialSymbolsCampaign, MaterialSymbolsDriveFileRenameOutline, MaterialSymbolsExpandMore, MaterialSymbolsFormatSize, MaterialSymbolsLandscape, MaterialSymbolsLiveHelp, MaterialSymbolsMarkChatUnread, MaterialSymbolsNotifications, MaterialSymbolsRadio, MaterialSymbolsScience, MaterialSymbolsSmartphone, MaterialSymbolsTab, MaterialSymbolsToggleOn, MaterialSymbolsViewDay, MaterialSymbolsWebAsset, MaterialSymbolsWindow } from '@roku-ui/icons-material-symbols'
export const router = [{
  path: '/',
  title: '主页',
  icon: <TablerHome />,
  element: <Page md={HomeMD} />,
}, {
  path: 'theme-toggle',
  title: '主题切换器（Theme Toggle）',
  icon: <TablerMoon />,
  element: <Page />,
}, {
  path: 'list',
  title: '列表（List）',
  icon: <TablerList />,
  element: <Page />,
}, {
  path: 'auto-complete',
  title: '补选框（Auto Complete）',
  icon: <TablerInputSearch />,
  element: <Page />,
}, {
  path: 'anchor',
  title: '锚点（Anchor）',
  icon: <TablerAnchor />,
  element: <Page />,
}, {
  path: 'typography',
  title: '排版（Typography）',
  icon: <TablerTypography />,
  element: <Page />,
}, {
  path: 'panel',
  title: '面板（Panel）',
  icon: <TablerRectangle />,
  element: <Page />,
}, {
  path: 'appbar',
  title: ' 应用栏（Appbar）',
  icon: <TablerLayoutNavbar />,
  element: <Page />,
}, {
  path: 'btn',
  title: '按钮（Btn）',
  icon: <TablerRectangleFilled />,
  element: <Page />,
}, {
  path: 'result',
  title: '结果（Result）',
  icon: <TablerCircleCheck />,
  element: <Page />,
}, {
  path: 'tag',
  title: '标签 (Tag)',
  icon: <TablerTag />,
  element: <Page />,
}, {
  path: 'textarea',
  title: '文本框（Textarea）',
  icon: <TablerArticle />,
  element: <Page />,
}, {
  path: 'text-field',
  title: '输入框（Text Field）',
  icon: <TablerCursorText />,
  element: <Page />,
}, {
  path: 'editable-line',
  title: '可编行（Editable Line）',
  icon: <MaterialSymbolsDriveFileRenameOutline />,
  element: <Page />,
}, {
  path: 'dynamic-value',
  title: '灵动数值（Dynamic Value）',
  icon: <Tabler123 />,
  element: <Page />,
}, {
  path: 'dynamic-island',
  title: '灵动岛（Dynamic Island）',
  icon: <MaterialSymbolsLandscape />,
  element: <Page />,
}, {
  path: 'tabs',
  title: '选项卡（Tabs）',
  icon: <MaterialSymbolsTab />,
  element: <Page />,
}, {
  path: 'avatar',
  title: '头像（Avatar）',
  icon: <TablerUserCircle />,
  element: <Page />,
}, {
  path: 'comment',
  title: '评论 (Comment)',
  icon: <TablerMessage />,
  element: <Page />,
}, {
  path: 'holy-grail',
  title: '圣杯 (HolyGrail)',
  icon: <MaterialSymbolsViewDay />,
  element: <Page />,
}, {
  path: 'article',
  title: '文章（Article）',
  icon: <MaterialSymbolsArticle />,
  element: <Page />,
}, {
  path: 'notice',
  title: '通知（Notice）',
  icon: <MaterialSymbolsCampaign />,
  element: <Page />,
}, {
  path: 'notification',
  title: '通知（Notification）',
  icon: <MaterialSymbolsNotifications />,
  element: <Page />,
}, {
  path: 'badge',
  title: '徽章（Badge）',
  icon: <MaterialSymbolsMarkChatUnread />,
  element: <Page />,
}, {
  path: 'modal',
  title: '模态框（Modal）',
  icon: <MaterialSymbolsWebAsset />,
  element: <Page />,
}, {
  path: 'popover',
  title: '溢出框（Popover）',
  icon: <MaterialSymbolsLiveHelp />,
  element: <Page />,
}, {
  path: 'switch',
  title: '开关（Switch）',
  icon: <MaterialSymbolsToggleOn />,
  element: <Page />,
}, {
  path: 'window',
  title: '窗体（Window）',
  icon: <TablerWindow />,
  element: <Page />,
}, {
  path: 'phone',
  title: '手机模型（Phone）',
  icon: <MaterialSymbolsSmartphone />,
  element: <Page />,
}, {
  path: 'steps',
  title: '步骤（Steps）',
  icon: <MaterialSymbolsArrowRightAlt />,
  element: <Page />,
}, {
  path: 'collapse',
  title: '折叠面板（Collapse）',
  icon: <MaterialSymbolsExpandMore />,
  element: <Page />,
}, {
  path: 'icon',
  title: '图标（Icon）',
  icon: <TablerIcons />,
  element: <Page />,
}, {
  path: 'rating',
  title: '评分（Rating）',
  icon: <TablerStar />,
  element: <Page />,
}, {
  path: 'radio',
  title: '单选项（Radio）',
  icon: <MaterialSymbolsRadio />,
  element: <Page />,
}, {
  path: 'title-bar',
  title: '标题栏（Title Bar）',
  icon: <MaterialSymbolsWindow />,
  element: <Page />,
}, {
  path: 'text',
  title: '文本（Text）',
  icon: <MaterialSymbolsFormatSize />,
  element: <Page />,
}, {
  path: 'test',
  title: '测试用',
  icon: <MaterialSymbolsScience />,
  element: <Page />,
},
]

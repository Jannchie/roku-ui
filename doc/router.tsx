import { Tabler123, TablerAnchor, TablerArrowsUpDown, TablerArticle, TablerCircleCheck, TablerColorPicker, TablerCursorText, TablerHome, TablerIcons, TablerInputSearch, TablerLayoutNavbar, TablerList, TablerMessage, TablerMoon, TablerRectangle, TablerRectangleFilled, TablerSquareToggle, TablerStar, TablerTag, TablerTypography, TablerUserCircle, TablerWindow } from '@roku-ui/icons-tabler'
import { MaterialSymbolsArrowRightAlt, MaterialSymbolsArticle, MaterialSymbolsCampaign, MaterialSymbolsDriveFileRenameOutline, MaterialSymbolsExpandMore, MaterialSymbolsLiveHelp, MaterialSymbolsMarkChatUnread, MaterialSymbolsNotifications, MaterialSymbolsRadio, MaterialSymbolsScience, MaterialSymbolsSmartphone, MaterialSymbolsTab, MaterialSymbolsToggleOn, MaterialSymbolsViewDay, MaterialSymbolsWebAsset, MaterialSymbolsWindow } from '@roku-ui/icons-material-symbols'
import { Page } from './components/Page'
import HomeMD from './markdown/home.md?raw'
export const router = [
  {
    path: '/',
    title: '主页',
    icon: <TablerHome />,
    element: <Page md={HomeMD} />,
  },
  {
    path: 'anchor',
    title: '锚点（Anchor）',
    icon: <TablerAnchor />,
  },
  {
    path: 'appbar',
    title: '应用栏（Appbar）',
    icon: <TablerLayoutNavbar />,
  },
  {
    path: 'article',
    title: '文章（Article）',
    icon: <MaterialSymbolsArticle />,
  },
  {
    path: 'avatar',
    title: '头像（Avatar）',
    icon: <TablerUserCircle />,
  },
  {
    path: 'badge',
    title: '徽章（Badge）',
    icon: <MaterialSymbolsMarkChatUnread />,
  },
  {
    path: 'btn',
    title: '按钮（Btn）',
    icon: <TablerRectangleFilled />,
  },
  {
    path: 'collapse',
    title: '折叠面板（Collapse）',
    icon: <MaterialSymbolsExpandMore />,
  },
  {
    path: 'comment',
    title: '评论 (Comment)',
    icon: <TablerMessage />,
  },
  {
    path: 'dynamic-value',
    title: '灵动数值（Dynamic Value）',
    icon: <Tabler123 />,
  },
  {
    path: 'editable-line',
    title: '可编行（Editable Line）',
    icon: <MaterialSymbolsDriveFileRenameOutline />,
  },
  {
    path: 'holy-grail',
    title: '圣杯 (HolyGrail)',
    icon: <MaterialSymbolsViewDay />,
  },
  {
    path: 'icon',
    title: '图标（Icon）',
    icon: <TablerIcons />,
  },
  {
    path: 'list',
    title: '列表（List）',
    icon: <TablerList />,
  },
  {
    path: 'modal',
    title: '模态框（Modal）',
    icon: <MaterialSymbolsWebAsset />,
  },
  {
    path: 'notice',
    title: '通知（Notice）',
    icon: <MaterialSymbolsCampaign />,
  },
  {
    path: 'notification',
    title: '通知（Notification）',
    icon: <MaterialSymbolsNotifications />,
  },
  {
    path: 'panel',
    title: '面板（Panel）',
    icon: <TablerRectangle />,
  },
  {
    path: 'phone',
    title: '手机模型（Phone）',
    icon: <MaterialSymbolsSmartphone />,
  },
  {
    path: 'popover',
    title: '溢出框（Popover）',
    icon: <MaterialSymbolsLiveHelp />,
  },
  {
    path: 'radio',
    title: '单选项（Radio）',
    icon: <MaterialSymbolsRadio />,
  },
  {
    path: 'rating',
    title: '评分（Rating）',
    icon: <TablerStar />,
  },
  {
    path: 'result',
    title: '结果（Result）',
    icon: <TablerCircleCheck />,
  },
  {
    path: 'select',
    title: '选框（Select）',
    icon: <TablerInputSearch />,
  },
  {
    path: 'steps',
    title: '步骤（Steps）',
    icon: <MaterialSymbolsArrowRightAlt />,
  },
  {
    path: 'switch',
    title: '开关（Switch）',
    icon: <MaterialSymbolsToggleOn />,
  },
  {
    path: 'tag',
    title: '标签 (Tag)',
    icon: <TablerTag />,
  },
  {
    path: 'tabs',
    title: '选项卡（Tabs）',
    icon: <MaterialSymbolsTab />,
  },
  {
    path: 'textarea',
    title: '文本框（Textarea）',
    icon: <TablerArticle />,
  },
  {
    path: 'typography',
    title: '排版（Typography）',
    icon: <TablerTypography />,
  },
  {
    path: 'text-field',
    title: '输入框（Text Field）',
    icon: <TablerCursorText />,
  },
  {
    path: 'theme',
    title: '主题（Theme）',
    icon: <TablerColorPicker />,
    element: <Page />,
  },
  {
    path: 'theme-toggle',
    title: '主题切换器（Theme Toggle）',
    icon: <TablerMoon />,
  },
  {
    path: 'title-bar',
    title: '标题栏（Title Bar）',
    icon: <MaterialSymbolsWindow />,
  },
  {
    path: 'toggle-group',
    title: '选项组（Toggle Group）',
    icon: <TablerSquareToggle />,
  },
  {
    path: 'window',
    title: '窗体（Window）',
    icon: <TablerWindow />,
  },
  {
    path: 'scroll-area',
    title: '滚动区域（Scroll Area）',
    icon: <TablerArrowsUpDown />,
  },
  {
    path: 'test',
    title: '测试用',
    icon: <MaterialSymbolsScience />,
  },
]

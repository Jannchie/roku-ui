import { Appbar, Container, MaterialSymbolIcon, Typography } from '../../src'
import { CompExample } from '../components/CompExample'

export function AppbarPage () {
  return (
    <Container>
      <Typography.H1 className="gradient-text"> 应用栏（Appbar） </Typography.H1>
      <CompExample title="样式变体" desc="实现了四种变体。分别为默认、透明、模糊和花纹。" >
        <>
          <div style={{
            backgroundImage: 'radial-gradient(rgb(22,22,22,0.5) 0px, rgb(22,22,22,0.5) 25px, rgb(88,88,88,0.1) 25px, rgb(88,88,88,0.1) 50px)',
            backgroundSize: '60px 60px',
          }}>
            <Appbar varient="default" icon={<MaterialSymbolIcon icon={'home'} />} title="Roku UI App Default" />
            <Appbar varient="pattern" icon={<MaterialSymbolIcon icon={'home'} />} title="Roku UI App Pattern" />
            <Appbar varient="blur" icon={<MaterialSymbolIcon icon={'home'} />} title="Roku UI App Blur" />
            <Appbar varient="transparent" icon={<MaterialSymbolIcon icon={'home'} />} title="Roku UI App Transparent" />
          </div>
        </>
      </CompExample>
      <CompExample title="搜索" desc="支持进行搜索——通过提供一个 searchCallback 即可。如果你需要自定义搜索框，则需要使用 tailing。" >
        <Appbar varient="default" searchCallback={(val) => {
          console.log(val)
        }} title="Search" />
      </CompExample>
      <CompExample title="末端控件" desc="使用 tailing 属性可以在末端追加任意控件" >
        <Appbar varient="default" tailing={<MaterialSymbolIcon icon={'face'} />} title="Tailing" />
      </CompExample>
      <CompExample title="前端控件" desc="而使用 leading，可以在前端追加控件，通常我们会在这里放一个 menu 按钮。" >
        <Appbar varient="default" leading={<MaterialSymbolIcon icon={'menu'} />} title="Leading" />
      </CompExample>
    </Container>
  )
}

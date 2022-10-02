import { Appbar, MaterialSymbolIcon } from '../../src'

export default function Demo () {
  return <div>
    <Appbar
      varient="default"
      color="primary"
      icon={<MaterialSymbolIcon icon={'home'} />}
      title="Roku UI App Default"
    />
    <Appbar
      varient="pattern"
      style={{ backgroundImage: 'radial-gradient(hsl(var(--r-primary-2)/0.25) 1px, hsl(var(--r-primary-2)/0.75) 1px)', backgroundSize: '4px 4px' }}
      icon={<MaterialSymbolIcon icon={'home'} />}
      title="Roku UI App Pattern"
    />
    <Appbar
      varient="blur"
      color="primary"
      icon={<MaterialSymbolIcon icon={'home'} />}
      title="Roku UI App Blur"
    />
    <Appbar
      varient="transparent"
      color="primary"
      icon={<MaterialSymbolIcon icon={'home'} />}
      title="Roku UI App Transparent"
    />
  </div>
}

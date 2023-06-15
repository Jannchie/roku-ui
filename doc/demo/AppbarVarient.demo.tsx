import { Appbar } from '../../src'

export default function Demo () {
  return (
    <div style={{ backgroundImage: 'url("https://picsum.photos/seed/picsum/1024/52")' }}>
      <Appbar
        varient="default"
        title="Roku UI App Default"
      />
      <Appbar
        varient="pattern"
        title="Roku UI App Pattern"
      />
      <Appbar
        varient="blur"
        title="Roku UI App Blur"
      />
      <Appbar
        varient="transparent"
        title="Roku UI App Transparent"
      />
    </div>
  )
}

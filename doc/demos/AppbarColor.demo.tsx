import { Appbar } from '../../src'

export default function Demo () {
  return (
    <div style={{ background: 'url("https://picsum.photos/seed/picsum/1024/52")' }}>
      <Appbar
        varient="default"
        color="primary"
        title="Roku UI App Default"
      />
      <Appbar
        varient="blur"
        color="primary"
        title="Roku UI App Blur"
      />
      <Appbar
        varient="transparent"
        color="primary"
        title="Roku UI App Transparent"
      />
    </div>
  )
}

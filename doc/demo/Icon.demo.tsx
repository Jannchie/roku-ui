import { Icon } from '../../src'

export default function Demo () {
  const dataUri = '"data:image/svg+xml;utf8,%3Csvg viewBox=\'0 0 24 24\' display=\'inline-block\' height=\'1.2em\' width=\'1.2em\' vertical-align=\'text-bottom\' xmlns=\'http://www.w3.org/2000/svg\' %3E%3Cpath fill=\'currentColor\' d=\'M16.5 5a4.86 4.86 0 0 0-2.5.69A6 6 0 0 0 2.5 8v4a6 6 0 0 0 5 5.91V21a1 1 0 0 0 2 0v-3.09a6.08 6.08 0 0 0 2.78-1.26a5 5 0 0 0 3.22 2.25V21a1 1 0 0 0 2 0v-2.1a5 5 0 0 0 4-4.9v-4a5 5 0 0 0-5-5Zm-5 5v4a5.23 5.23 0 0 0 .06.57a4 4 0 0 1-2.06 1.3V13a1 1 0 0 0-2 0v2.86a4 4 0 0 1-3-3.86V8a4 4 0 0 1 6.83-2.84a3.94 3.94 0 0 1 1.06 2A5 5 0 0 0 11.5 10Zm8 4a3 3 0 0 1-2 2.82V13a1 1 0 0 0-2 0v3.82a3 3 0 0 1-2-2.82v-4a3 3 0 0 1 6 0Z\'/%3E%3C/svg%3E"'
  return (
    <>
      <div style={{ fontSize: 64, color: 'hotpink' }}>
        Text
        <Icon data={dataUri} />
      </div>
      <div style={{ fontSize: '1.5rem', lineHeight: '2.25rem', color: 'salmon' }}>
        Text
        <Icon data={dataUri} />
      </div>
    </>
  )
}

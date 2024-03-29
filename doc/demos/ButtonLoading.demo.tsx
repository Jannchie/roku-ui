import { useState } from 'react'
import { Btn, Icon, type Color } from '../../src'
import { TablerCheck } from '@roku-ui/icons-tabler'

export default function BtnLoadingDemo () {
  const [loading, setLoading] = useState(true)
  const [color, setColor] = useState<Color>('primary')
  return (
    <div className="flex flex-col items-center gap-2">
      <Btn
        color={color}
        loading={loading}
        size="sm"
        onClick={() => {
          setColor((val) => (val === 'primary' ? 'success' : 'primary'))
          setLoading((val) => !val)
        }}
      >
        { loading ? 'Loading' : 'Click' }
      </Btn>
      <Btn
        color="success"
        loading={loading}
        size="sm"
        onClick={() => {
          setLoading((val) => !val)
        }}
      >
        Small
      </Btn>
      <Btn
        color="info"
        loading={loading}
        size="md"
        onClick={() => {
          setLoading((val) => !val)
        }}
      >
        Medium
      </Btn>
      <Btn
        color="secondary"
        loading={loading}
        size="lg"
        onClick={() => {
          setLoading((val) => !val)
        }}
      >
        Large
      </Btn>
      <Btn
        color="danger"
        loading={loading}
        size="lg"
        onClick={() => {
          setLoading((val) => !val)
        }}
      >
        Large
      </Btn>
      <Btn
        icon
        color="primary"
        loading={loading}
        size="lg"
        onClick={() => {
          setLoading((val) => !val)
        }}
      >
        <Icon>
          <TablerCheck color="background"/>
        </Icon>
      </Btn>
    </div>
  )
}

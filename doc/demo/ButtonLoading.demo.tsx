import { useState } from 'react'
import { Btn, type Colors } from '../../src'

export default function BtnLoadingDemo () {
  const [loading, setLoading] = useState(true)
  const [color, setColor] = useState<Colors>('primary')
  return (
    <div className="flex flex-col items-center gap-2">
      <Btn
        color={color}
        loading={loading}
        size="sm"
        style={{ width: 128 }}
        onClick={() => {
          setColor((val) => (val === 'primary' ? 'success' : 'primary'))
          setLoading((val) => !val)
        }}
      >
        {loading ? 'Loading' : 'Click'}
      </Btn>
      <Btn
        color="success"
        loading={loading}
        size="sm"
        onClick={() => {
          setLoading((val) => !val)
        }}
      >
        Loading Button Small
      </Btn>
      <Btn
        color="info"
        loading={loading}
        size="md"
        onClick={() => {
          setLoading((val) => !val)
        }}
      >
        Loading Button Medium
      </Btn>
      <Btn
        color="secondary"
        loading={loading}
        size="lg"
        onClick={() => {
          setLoading((val) => !val)
        }}
      >
        Loading Button Large
      </Btn>
      <Btn
        color="danger"
        loading={loading}
        size="lg"
        onClick={() => {
          setLoading((val) => !val)
        }}
      >
        Loading Button Large
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
        <span className="material-symbols-rounded">check_circle</span>
      </Btn>
    </div>
  )
}

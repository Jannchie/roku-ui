import { Link } from 'react-router-dom'
import { Btn } from '../../src'

// 示例用法
export default function App () {
  return (
    <Btn
      as={Link}
      to={'/'}
    >
      To Home
    </Btn>
  )
}

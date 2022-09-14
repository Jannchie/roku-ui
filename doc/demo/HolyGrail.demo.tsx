import { HolyGrail } from '../../src'

export default function HolyGrailDemo () {
  return <HolyGrail
    header={(
      <div style={{ height: 64, backgroundColor: '#333' }} />
    )}
    main={(
      <div style={{ height: 200, backgroundColor: '#222' }} />
    )}
    innerLeft={(
      <div style={{ width: 40, backgroundColor: '#444' }} />
    )}
    innerRight={(
      <div style={{ width: 40, backgroundColor: '#444' }} />
    )}
    footer={(
      <div style={{ height: 64, width: '100%', backgroundColor: '#444' }} />
    )}
    outerLeft={
      <div style={{ width: 40, backgroundColor: '#555' }} />
    }
    outerRight={
      <div style={{ width: 40, backgroundColor: '#555' }} />
    }
  />
}

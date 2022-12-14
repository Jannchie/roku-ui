import { Btn } from '../../src'

export default function AllBtnDemo () {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
    }}>
      <div style={{ flexWrap: 'wrap', display: 'flex', gap: 8 }}>
        <Btn color="primary" label="Primary" />
        <Btn color="success" label="Success" />
        <Btn color="danger" label="Danger" />
        <Btn color="warning" label="Warning" />
        <Btn label="Default" />
      </div>
      <div style={{ flexWrap: 'wrap', display: 'flex', gap: 8 }}>
        <Btn border color="primary" label="Primary" />
        <Btn border color="success" label="Success" />
        <Btn border color="danger" label="Danger" />
        <Btn border color="warning" label="Warning" />
        <Btn border label="Default" />
      </div>
      <div style={{ flexWrap: 'wrap', display: 'flex', gap: 8 }}>
        <Btn text hoverColor="primary" label="Primary" />
        <Btn text hoverColor="success" label="Success" />
        <Btn text hoverColor="danger" label="Danger" />
        <Btn text hoverColor="warning" label="Warning" />
        <Btn text label="Default" />
      </div>
      <div style={{ flexWrap: 'wrap', display: 'flex', gap: 8 }}>
        <Btn text color="primary" label="Primary" />
        <Btn text color="success" label="Success" />
        <Btn text color="danger" label="Danger" />
        <Btn text color="warning" label="Warning" />
        <Btn text label="Default" />
      </div>
      <div style={{ flexWrap: 'wrap', display: 'flex', gap: 8 }}>
        <Btn border dash text color="primary" label="Primary" />
        <Btn border dash text color="success" label="Success" />
        <Btn border dash text color="danger" label="Danger" />
        <Btn border dash text color="warning" label="Warning" />
        <Btn border dash text label="Default" />
      </div>
      <div style={{ flexWrap: 'wrap', display: 'flex', gap: 8 }}>
        <Btn dash disabled color="primary" label="Primary" />
        <Btn dash disabled color="success" label="Success" />
        <Btn dash disabled color="danger" label="Danger" />
        <Btn dash disabled color="warning" label="Warning" />
        <Btn dash disabled label="Default" />
      </div>
    </div>
  )
}

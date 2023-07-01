import { Btn, Notifications, Panel, push } from '../../src'

export default function Demo () {
  return (
    <>
      <Btn
        onClick={() => {
          push({ msg: 'This is a message' }, {
            name: 'test1',
          })
        }}
      >
        Push By Data
      </Btn>
      <Notifications
        stack
        name="test1"
        maxCount={3}
        getNotice={(data) => {
          return (
            <Panel padding>
              { data.msg }
            </Panel>
          )
        }}
        className="mt-2"
      />
    </>
  )
}

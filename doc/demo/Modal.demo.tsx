import { useState } from 'react'
import { Btn, Card, Modal } from '../../src'

export default function Demo () {
  const [show, setShow] = useState(false)
  return (
    <>
      <Btn onClick={() => {
        setShow(true)
      }}>Open</Btn>
      <Modal
        background
        backgroundBlur
        show={show} hide={() => {
          setShow(false)
        }} >
        <Card
          style={{
            minWidth: 300,
          }}
          title="A Modal"
          subtitle="This is a modal."
          body="This is a modal body."
          actions={
            <Btn onClick={() => {
              setShow(false)
            }}>Close</Btn>
          } />
      </Modal>
    </>
  )
}

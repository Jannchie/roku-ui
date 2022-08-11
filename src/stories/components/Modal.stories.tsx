import { ComponentStory, ComponentMeta } from "@storybook/react";
import { useState } from "react";
import { Modal, Card, Btn } from "../..";
export default {
  title: "Example/Modal",
  component: Modal,
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => {
  const [show, setShow] = useState(false);
  return (
    <>
      <Btn onClick={() => setShow(true)}>Show Modal</Btn>
      <Modal {...args} show={show} hide={() => setShow(false)}>
        <Card
          title="Card Title"
          subtitle="Card Subtitle Text"
          body="Here is the body of the card, which may contain some rather long text. Therefore the example text is also longer."
          className="w-96"
          actions={
            <Btn
              onClick={() => setShow(false)}
              color="primary"
              label="OK, I Got it!"
            />
          }
        ></Card>
      </Modal>
    </>
  );
};
export const Default = Template.bind({});
Default.args = {
  background: true,
};

import { ComponentMeta, ComponentStory } from '@storybook/react';
import { useState } from 'react';
import { Btn, Card, Modal } from '../..';

export default {
  component: Modal,
  title: 'Global/Modal',
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => {
  const [show, setShow] = useState(false);
  return (
    <>
      <Btn onClick={() => setShow(true)}>Show Modal</Btn>
      <Modal {...args} hide={() => setShow(false)} show={show}>
        <Card
          actions={(
            <Btn
              color="primary"
              label="OK, I Got it!"
              onClick={() => setShow(false)}
            />
          )}
          body="Here is the body of the card, which may contain some rather long text. Therefore the example text is also longer."
          className="w-96"
          subtitle="Card Subtitle Text"
          title="Card Title"
        />
      </Modal>
    </>
  );
};
export const Default = Template.bind({});
Default.args = {
  background: true,
};

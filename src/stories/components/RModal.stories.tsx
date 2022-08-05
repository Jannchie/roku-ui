import { ComponentStory, ComponentMeta } from "@storybook/react";
import { useState } from "react";
import { RModal } from "../../components/RModal";
import { RBtn } from "../../components/RBtn";
import { RCard } from "../../components/RCard";
export default {
  title: "Example/RModal",
  component: RModal,
} as ComponentMeta<typeof RModal>;

const Template: ComponentStory<typeof RModal> = (args) => {
  const [show, setShow] = useState(false);
  return (
    <>
      <RBtn onClick={() => setShow(true)}>Show Modal</RBtn>
      <RModal {...args} show={show} hide={() => setShow(false)}>
        <RCard
          title="Card Title"
          subtitle="Card Subtitle Text"
          body="Here is the body of the card, which may contain some rather long text. Therefore the example text is also longer."
          className="w-96"
          actions={
            <RBtn
              onClick={() => setShow(false)}
              color="primary"
              label="OK, I Got it!"
            />
          }
        ></RCard>
      </RModal>
    </>
  );
};
export const Default = Template.bind({});
Default.args = {
  background: true,
};

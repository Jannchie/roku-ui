import { ComponentMeta, ComponentStory } from '@storybook/react';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Btn, Card } from '../..';

function Transformer() {
  return (
    <div>
      <Card>
        <div className="p-10">Test Card</div>
      </Card>
    </div>
  );
}

export default {
  // component: Chip.Group,
  title: 'Display/Transformer',
} as ComponentMeta<typeof Transformer>;

const Template: ComponentStory<typeof Transformer> = () => {
  const [show, setShow] = useState(false);
  return (
    <div className="h-96">
      {!show && (
        <>
          <motion.div
            layoutId="bg"
            className="bg-default-800 w-1 h-1"
          />
          <motion.div
            layoutId="btn"
            className=" text-white absolute right-4 bottom-4"
          >
            <motion.div layout>
              <Btn onClick={() => setShow(true)}>
                〇
              </Btn>
            </motion.div>
          </motion.div>
        </>
      )}
      {show && (
        <>
          <motion.div layoutId="bg" className="absolute bg-default-800 inset-4" style={{ borderRadius: 10 }} />
          <motion.div layoutId="btn" className="text-white absolute right-4 top-4">
            <motion.div layout>
              <Btn onClick={() => setShow(false)}>
                ✕
              </Btn>
            </motion.div>
          </motion.div>
        </>
      )}
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  children: 'Default Chip',
};

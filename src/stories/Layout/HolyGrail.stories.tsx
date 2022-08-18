import { ComponentMeta, ComponentStory } from '@storybook/react';
import classNames from 'classnames';
import {
  Appbar, Btn, Footer, Panel,
  MaterialSymbolIcon,
  HolyGrail,
} from '../..';

const Template: ComponentStory<typeof Appbar> = (args) => {
  const main = <Panel border className="h-[600px] m-10">Main</Panel>;
  const header = (
    <Appbar
      searchCallback={(d) => {
        // eslint-disable-next-line no-console
        console.log(d);
      }}
      icon={<MaterialSymbolIcon icon="home" />}
      title={args.title}
      tailing={(
        <Btn icon>
          <MaterialSymbolIcon icon="settings" />
        </Btn>
      )}
    />
  );
  const footer = <Footer>Footer</Footer>;
  function wrapWithPannel(text: string, extraClass?: string) {
    return <Panel norounded className={classNames('overflow-auto dark:border-default-700 dark:bg-default-800 bg-default-50', extraClass)}>{text}</Panel>;
  }
  return (
    <div className="bg-gradient-to-tr p-10 from-fuchsia-900 to-sky-900" style={{ height: 600 }}>
      <HolyGrail
        innerLeft={wrapWithPannel('innerLeft', 'border-r')}
        innerRight={wrapWithPannel('innerRight', 'border-l')}
        outerLeft={wrapWithPannel('outerLeft', 'border-r')}
        outerRight={wrapWithPannel('outerRight', 'border-l')}
        header={header}
        footer={footer}
        main={main}
      />
    </div>
  );
};
export default {
  component: HolyGrail,
  title: 'Layout/Holy Grail',
} as ComponentMeta<typeof HolyGrail>;

export const Default = Template.bind({});
Default.args = {
  title: 'App Name',
};

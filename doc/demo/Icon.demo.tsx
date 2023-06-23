import { TablerIcons } from '@roku-ui/icons-tabler'
import { type Color, Flex, Icon, Panel, Select, type IconVariant } from '../../src'
import { type Rounded, type Size } from '../../src/utils/type'
import { useState } from 'react'
import { Switch } from '../../src/components/Switch'

export default function Demo () {
  const colorList: Color[] = ['default', 'primary', 'secondary', 'success', 'danger', 'warning', 'info']
  const sizeList: Size[] = ['xs', 'sm', 'base', 'md', 'lg', 'xl']
  const roundedList: Rounded[] = ['xs', 'sm', 'base', 'md', 'lg', 'xl', 'full']
  const variantList: IconVariant[] = ['default', 'fill', 'text', 'dual']
  const [glory, setGlory] = useState<boolean>(false)
  const [color, setColor] = useState<Color>('default')
  const [size, setSize] = useState<Size>('base')
  const [rounded, setRounded] = useState<Rounded>('base')
  const [variant, setVariant] = useState<IconVariant>('default')
  return (
    <>
      <Flex
        justify="center"
        style={{ margin: '2rem' }}
      >
        <Icon
          glory={glory}
          color={color}
          size={size}
          rounded={rounded}
          variant={variant}
        >
          <TablerIcons />
        </Icon>
      </Flex>
      <Panel padding>
        <Flex
          col
          gap="0.25rem"
          justify="space-between"
        >
          <Select
            defaultValue={color}
            setValue={setColor}
            options={colorList}
          />
          <Select
            defaultValue={size}
            setValue={setSize}
            options={sizeList}
          />
          <Select
            defaultValue={rounded}
            setValue={setRounded}
            options={roundedList}
          />
          <Select
            defaultValue={variant}
            setValue={setVariant}
            options={variantList}
          />
          <Switch
            label="Glory"
            value={glory}
            setValue={setGlory}
          />
        </Flex>
      </Panel>
    </>
  )
}

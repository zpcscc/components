import { type SpaceProps } from '@zpcscc/components';
import { type FieldConfigType } from 'src/form-generator/types';
import { spaceConfig } from './config';

const space: FieldConfigType<SpaceProps> = {
  label: '间隔',
  componentItem: {
    id: 'space',
    type: 'Space',
    props: {
      direction: 'horizontal',
      align: 'center'
    }
  },
  configPanel: spaceConfig
};

export default space;

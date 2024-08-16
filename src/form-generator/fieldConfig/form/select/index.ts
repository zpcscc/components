import { type SelectProps } from '@zpcscc/components';
import { type FieldConfigType } from 'src/form-generator/types';
import { radioOptionsConfig } from '../../commonConfig';
import { selectConfig } from './config';

// 下拉框
const select: FieldConfigType<SelectProps> = {
  label: '下拉框',
  componentItem: {
    id: 'select',
    type: 'Select',
    label: '下拉框',
    showLabel: true,
    props: {
      size: 'large',
      placeholder: '请选择...',
      options: radioOptionsConfig().props?.optionsConfig?.options
    }
  },
  configPanel: selectConfig
};

export default select;

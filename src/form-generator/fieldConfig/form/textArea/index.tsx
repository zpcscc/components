import { type TextAreaProps } from '@zpcscc/components';
import { type FieldConfigType } from 'src/form-generator/types';
import { inputConfig } from '../input/config';

// 文本框
const textarea: FieldConfigType<TextAreaProps> = {
  label: '文本框',
  componentItem: {
    id: 'textarea',
    type: 'TextArea',
    label: '文本框',
    showLabel: true,
    props: {
      placeholder: '请输入文本'
    }
  },
  configPanel: inputConfig
};

export default textarea;

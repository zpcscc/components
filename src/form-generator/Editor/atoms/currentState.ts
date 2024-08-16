import { atom } from 'recoil';
import { type FieldConfigType } from 'src/form-generator/types';

type CurrentStateProps = {
  fieldConfig?: FieldConfigType;
  currentId?: string;
};

/**
 * @name 当前选中的组件默认配置信息
 */
const currentState = atom<CurrentStateProps>({
  key: 'current',
  default: {
    fieldConfig: undefined,
    currentId: undefined
  }
});

export default currentState;

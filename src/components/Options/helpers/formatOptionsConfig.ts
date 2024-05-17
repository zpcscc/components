import { getUuid } from '@zpcscc/utils';
import { type OptionsConfigType } from 'src/types';
import { type CurrOptionsConfigType } from '../type';

/**
 * @name 格式化配置，补全缺漏的值
 * @params optionsConfig 需要格式化的值
 * @return optionsConfig 格式化完成后的值
 */
const formatOptionsConfig = (optionsConfig?: OptionsConfigType): CurrOptionsConfigType => {
  const { type = 'Radio', defaultValue = '', options = [] } = optionsConfig || {};
  return {
    type,
    defaultValue,
    options: options.map((option) => ({
      ...option,
      id: option.id || getUuid(),
      checked: typeof option.checked === 'boolean' ? option.checked : false
    }))
  };
};

export default formatOptionsConfig;

/** @jsxImportSource @emotion/react */
import PlusOutlined from '@ant-design/icons/PlusOutlined';
import { css } from '@emotion/react';
import { getUuid } from '@zpcscc/utils';
import { Button } from 'antd';
import { type CheckboxOptionType } from 'antd/lib/checkbox/Group';
import { useState, type FC } from 'react';
import { type InputProps } from 'src/antd-components/Input';
import { type OptionsConfigType, type StyledType } from 'src/types';
import OptionsContainer from './OptionsContainer';
import { Wrapper } from './Styled';
import { type CurrOptionType, type CurrOptionsConfigType } from './type';
import { formatOptionsConfig } from './utils';

export type OptionsProps = {
  value?: OptionsConfigType;
  optionsConfig?: OptionsConfigType;
  inputOptions?: InputProps;
  styled?: StyledType;
  onChange?: (optionsConfig: OptionsConfigType) => void;
};

/**
 * @name 选项配置
 * @param value 组件的值
 * @param onChange 组件值修改的回调
 * @param styled 自定义样式 https://emotion.sh/docs/introduction
 * @param optionsConfig 选项配置
 */
const Options: FC<OptionsProps> = (props) => {
  const { value, styled, inputOptions, onChange } = props;
  const [optionsConfig, setOptionsConfig] = useState<CurrOptionsConfigType>(
    formatOptionsConfig(value || props.optionsConfig)
  );

  const onOptionsConfigChange = (newOptionsConfig: CurrOptionsConfigType) => {
    const { options } = newOptionsConfig;
    // 设置选中的默认值
    let defaultValue: OptionsConfigType['defaultValue'] =
      optionsConfig?.type === 'Checkbox' ? [] : '';
    options?.forEach((option: CurrOptionType) => {
      if (option?.checked) {
        if (optionsConfig?.type === 'Checkbox') {
          (defaultValue as CheckboxOptionType<string>[]).push(
            option.value as CheckboxOptionType<string>
          );
        } else {
          (defaultValue as string) = option.value;
        }
      }
    });
    setOptionsConfig({ ...newOptionsConfig, defaultValue });
    onChange?.({ ...newOptionsConfig, defaultValue } as OptionsConfigType);
  };

  // 添加选项
  const addOption = () => {
    const optionsLength = optionsConfig?.options?.length;
    const newOptions = optionsConfig?.options?.concat({
      id: getUuid(),
      label: `选项${optionsLength + 1}`,
      value: `选项${optionsLength + 1}`,
      checked: false
    });
    onOptionsConfigChange({
      ...optionsConfig,
      options: newOptions
    });
  };

  return (
    <Wrapper css={css(styled)}>
      <OptionsContainer
        optionsConfig={optionsConfig}
        onOptionsConfigChange={onOptionsConfigChange}
        inputOptions={inputOptions}
      />
      <Button type='text' style={{ color: '#00bcd4' }} onClick={addOption}>
        <PlusOutlined /> 添加选项
      </Button>
    </Wrapper>
  );
};

export default Options;

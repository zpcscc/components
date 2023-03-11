/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import type { CSSInterpolation } from '@emotion/serialize/types';
import { Slider as AntSlider } from 'antd';
import type { InputNumberProps } from 'antd/lib/input-number';
import type { SliderBaseProps } from 'antd/lib/slider';
import { useEffect, useState } from 'react';
import { InputNumber } from '../InputNumber';
import { Wrapper } from './Styled';

export interface SliderProps extends Omit<SliderBaseProps, 'onChange'> {
  value: number;
  onChange?: (value: number) => void;
  showInputNumber?: boolean;
  inputNumberOptions?: InputNumberProps;
  styled?: CSSInterpolation;
  layout?: 'horizontal' | 'vertical';
}

/**
 * @name 滑动输入条
 * @param value 组件的值
 * @param onChange 组件值修改的回调
 * @param showInputNumber 显示数字输入框
 * @param inputNumberOptions 数字显示框的参数
 * @param styled 自定义样式 https://emotion.sh/docs/introduction
 * @link 其他参数详见 https://ant.design/components/slider-cn/
 */
const Slider: React.FC<SliderProps> = (props) => {
  const {
    styled,
    value,
    onChange,
    showInputNumber = false,
    inputNumberOptions,
    layout = 'horizontal',
    ...rest
  } = props;
  const [inputValue, setInputValue] = useState<number>(value || 0);
  const isVertical = showInputNumber && layout === 'vertical';

  const onSliderChange = (newValue: number) => {
    if (typeof newValue === 'number') setInputValue(newValue);
    onChange?.(newValue);
  };

  useEffect(() => {
    // 传入的value变化时，也要及时更新inputValue
    setInputValue(value);
  }, [value]);

  return (
    <Wrapper
      css={css(styled)}
      style={
        {
          '--flex-direction': isVertical ? 'column' : 'row',
          '--margin-right': isVertical ? '0px' : '16px',
          '--input-number-width': isVertical ? '100%' : '110px',
        } as React.CSSProperties
      }
    >
      <AntSlider value={inputValue} onChange={onSliderChange} {...rest} />
      {showInputNumber && (
        <InputNumber
          value={inputValue}
          onChange={(value) => {
            if (value !== null) onSliderChange(Number(value));
          }}
          min={0}
          {...inputNumberOptions}
        />
      )}
    </Wrapper>
  );
};

export default Slider;

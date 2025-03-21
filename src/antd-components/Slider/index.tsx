/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Slider as AntSlider } from 'antd';
import { type InputNumberProps } from 'antd/lib/input-number';
import { type SliderBaseProps } from 'antd/lib/slider';
import classNames from 'classnames';
import { useEffect, useState, type CSSProperties, type FC } from 'react';
import InputNumber from 'src/antd-components/InputNumber';
import { type StyledType } from 'src/types';
import { Wrapper } from './Styled';

export type SliderProps = {
  value?: number;
  onChange?: (value: number) => void;
  showInputNumber?: boolean;
  inputNumberOptions?: InputNumberProps;
  styled?: StyledType;
  layout?: 'horizontal' | 'vertical';
} & Omit<SliderBaseProps, 'onChange'>;

/**
 * @name 滑动输入条
 * @param value 组件的值
 * @param onChange 组件值修改的回调
 * @param showInputNumber 显示数字输入框
 * @param inputNumberOptions 数字显示框的参数
 * @param styled 自定义样式 https://emotion.sh/docs/introduction
 * @link 其他参数详见 https://ant.design/components/slider-cn/
 */
const Slider: FC<SliderProps> = (props) => {
  const {
    styled,
    value = 0,
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
      className={classNames('w-full min-w-100px flex', {
        'flex-col': isVertical,
        'flex-row': !isVertical,
      })}
      css={css(styled)}
      style={
        {
          '--margin-right': isVertical ? '0px' : '16px',
          '--input-number-width': isVertical ? '100%' : '110px',
        } as CSSProperties
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

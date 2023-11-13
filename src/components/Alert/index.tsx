/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import type { AlertProps as AntAlertProps } from 'antd/lib/alert';
import type { FC } from 'react';
import type { StyledType } from 'src/type/customType';
import { AlertWrapper } from './Styled';

export interface AlertProps extends AntAlertProps {
  styled?: StyledType;
}

/**
 * @name 警告提示
 * @param styled 自定义样式 https://emotion.sh/docs/object-styles
 * @link 其他参数详见 https://ant.design/components/alert-cn/
 */
const Alert: FC<AlertProps> = (props) => {
  const { styled, ...rest } = props;
  return <AlertWrapper css={css(styled)} {...rest} />;
};

export default Alert;
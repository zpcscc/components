import { css } from '@emotion/css';
import styled from '@emotion/styled';
import { Form } from 'antd';

export const editorStyled = css`
  pointer-events: none;
`;

export const FormItemWrapper = styled(Form.Item)`
  .ant-form-item-label > label::after {
    display: inline-block;
  }
`;

export const FormWrapper: Any = styled(Form)`
  overflow: hidden;
  padding: 2px;
`;

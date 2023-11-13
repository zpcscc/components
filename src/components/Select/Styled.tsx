import type { StyledComponent } from '@emotion/styled';
import styled from '@emotion/styled';
import { Select } from 'antd';
import type { SelectProps } from '.';

export const SelectWrapper = styled(Select)`
  width: 100%;
` as StyledComponent<SelectProps>;

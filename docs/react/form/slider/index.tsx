import type { SliderProps } from '@dxsixpc/components';
import { Slider, Space } from '@dxsixpc/components';
import { ResultTextarea } from 'docs/react/common';
import { useState } from 'react';

const App: React.FC<SliderProps> = () => {
  const [value, setValue] = useState<number>(0);

  const onChange = (value: number) => {
    setValue(value || 0);
  };

  const SliderStyled = `
    width: 400px;
  `;

  return (
    <Space size={100} align='end'>
      <Slider
        value={value}
        onChange={onChange}
        showInputNumber
        inputNumberOptions={{ size: 'middle' }}
        layout='horizontal'
        styled={SliderStyled}
      />
      <ResultTextarea value={value} />
    </Space>
  );
};

export default App;

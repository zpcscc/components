import { MonacoEditor, Render, Title, type ComponentItemType } from '@zpcscc/components';
import { toData, toString } from '@zpcscc/utils';
import { Space } from 'antd';
import { useState, type FC } from 'react';
import { pageData } from './mock';
import { RenderSpace } from './Styled';

// 渲染器
const RenderPanel: FC = () => {
  const [value, setValue] = useState<ComponentItemType[]>(pageData);

  const onChange = (value?: string) => {
    const newValueData = toData(value);
    // 是正确的数组，再更新数据
    if (Array.isArray(newValueData)) {
      setValue(newValueData);
    }
  };

  const onValuesChange = (changeValue?: AnyObject, values?: AnyObject) => {
    console.log('changeValue:', changeValue);
    console.log('values:', values);
  };

  return (
    <Space className='u-center-around' align='start'>
      <Space direction='vertical'>
        <Title>代码编辑器</Title>
        <MonacoEditor
          defaultValue={toString(value, null, 2)}
          height={500}
          width={500}
          language='json'
          onChange={onChange}
        />
      </Space>
      <RenderSpace direction='vertical'>
        <Title>实时预览渲染效果</Title>
        <Render componentItems={value} onChange={onValuesChange} />
      </RenderSpace>
    </Space>
  );
};

export default RenderPanel;

import { QuillEditor, Space, type QuillEditorProps } from '@zpcscc/components';
import { useState, type FC } from 'react';
import { ResultTextarea } from '../../components';

const App: FC = () => {
  const defaultValue = '<p>Hello World!</p>';
  const [value, setValue] = useState<string>(defaultValue);

  const options: QuillEditorProps['options'] = {
    theme: 'snow', // 或 'bubble'
    placeholder: 'Hello, World!',
    modules: {
      toolbar: [
        [{ header: 1 }, { header: 2 }, { header: 3 }, { header: 4 }, { header: 5 }, { header: 6 }], // 标题大小 [{ header: [1, 2, 3, 4, 5, 6] }]
        ['bold', 'italic', 'underline', 'strike', { color: [] }, { background: [] }], // 加粗，倾斜，下划线，中划线，文字颜色，文字背景颜色
        [{ list: 'ordered' }, { list: 'bullet' }, { list: 'check' }], // 有序列表，无需列表，可勾选列表
        [{ align: [] }, { indent: '-1' }, { indent: '+1' }, { direction: 'rtl' }], // 对齐方式 减小缩进，增加缩进，文本排列方式
        ['link', 'image', 'video'], // 超链接，图片，视频，
        ['formula', { script: 'sub' }, { script: 'super' }], // 数学公式，下标，上标
        ['blockquote', 'code-block', 'clean'], // 引用，代码块，删除选中文本的格式
        [{ size: [] }, { font: [] }] // 文字大小，字体
      ]
    }
  };

  const onChange = (value: string) => {
    setValue(value);
  };

  return (
    <Space>
      <QuillEditor
        styled={{ width: '500px', height: '300px' }}
        value={value}
        options={options}
        onChange={onChange}
      />
      <ResultTextarea value={value} styled={{ textarea: { width: '400px', height: '200px' } }} />
    </Space>
  );
};

export default App;

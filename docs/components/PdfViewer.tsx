import { PdfViewer } from '@zpcscc/components';
import { validate } from '@zpcscc/utils';
import { Button, Input, message, Space } from 'antd';
import { Fragment, useState, type FC } from 'react';

const App: FC = () => {
  const [pdfUrl, setPdfUrl] = useState(
    'https://raw.githubusercontent.com/mozilla/pdf.js/ba2edeae/examples/learning/helloworld.pdf'
  );
  const [urlText, setUrlText] = useState('');

  // 'https://test-img-zuche.oss-cn-beijing.aliyuncs.com/school/2023/1215/fe757c48-49ec-4024-83ed-44990b2a0c5d.pdf'
  // 'https://test-img-zuche.oss-cn-beijing.aliyuncs.com/school/2023/1218/0142de8f-70ec-42f4-9629-02925a892cb7.pdf'

  return (
    <Fragment>
      <Space style={{ marginBottom: '10px' }}>
        <Input.TextArea
          rows={3}
          style={{ width: '400px' }}
          placeholder={'请输入pdf链接'}
          value={urlText}
          onChange={({ target: { value } }) => setUrlText(value)}
        />
        <Button
          type='primary'
          onClick={() => {
            if (validate(urlText, 'url') && urlText.endsWith('.pdf')) {
              setPdfUrl(urlText);
            } else {
              message.error('请输入正确的pdf链接');
            }
          }}
        >
          预览
        </Button>
      </Space>
      <PdfViewer url={pdfUrl} />
    </Fragment>
  );
};

export default App;

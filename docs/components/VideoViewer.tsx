import { VideoViewer } from '@zpcscc/components';
import { validate } from '@zpcscc/utils';
import { Button, Input, message, Space } from 'antd';
import { Fragment, useState, type FC } from 'react';

const App: FC = () => {
  const [videoUrl, setVideoUrl] = useState('https://vjs.zencdn.net/v/oceans.mp4');
  const [urlText, setUrlText] = useState('');

  return (
    <Fragment>
      <Space style={{ marginBottom: '10px' }}>
        <Input.TextArea
          rows={3}
          style={{ width: '400px' }}
          placeholder={'请输入video链接'}
          value={urlText}
          onChange={({ target: { value } }) => setUrlText(value)}
        />
        <Button
          type='primary'
          onClick={() => {
            if (validate(urlText, 'url')) {
              setVideoUrl(urlText);
            } else {
              message.error('请输入正确的pdf链接');
            }
          }}
        >
          预览
        </Button>
      </Space>
      <VideoViewer url={videoUrl} width={300} height={200} />
    </Fragment>
  );
};

export default App;

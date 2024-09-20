import { Button, Modal, Space } from '@zpcscc/components';
import { type FC, useState } from 'react';
import ModalChildren from './ModalChildren';

const App: FC = () => {
  const [show, setShow] = useState(false);

  const handleShowModal = () => {
    // 通过命令式的方式，打开弹框；
    const modalId = Modal.show({
      children: <ModalChildren />
    });

    // 也可以通过命令式的方式主动关闭弹框
    setTimeout(() => {
      // 3 秒后关闭弹框；
      Modal.hide(modalId);
    }, 3000);
  };

  return (
    <Space>
      <Button onClick={handleShowModal}>通过命令式的方式打开弹框,3s后自动关闭</Button>
      <Button onClick={() => setShow(true)}>通过声明式的方式打开弹框</Button>
      <Modal show={show} closeable onClose={() => setShow(false)}>
        <ModalChildren />
      </Modal>
    </Space>
  );
};

export default App;

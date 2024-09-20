import { type FC } from 'react';

const ModalChildren: FC = () => {
  return (
    <div
      style={{
        width: '300px',
        height: '200px',
        backgroundColor: '#fff',
        borderRadius: '8px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <h2>这是一个自定义弹框</h2>
      <p>这是一个自定义弹框的内容</p>
    </div>
  );
};

export default ModalChildren;

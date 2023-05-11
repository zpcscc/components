import { Button } from '@dxsixpc/components';

const App: React.FC = () => {
  const onClick = () => {
    console.log('点击了按钮');
  };

  return (
    <Button styled={{ width: '150px', span: { color: 'red' } }} onClick={onClick}>
      {'这是红色按钮'}
    </Button>
  );
};

export default App;

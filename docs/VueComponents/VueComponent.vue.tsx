import { applyVueInReact } from 'veaury';
import VueComponent from './dist/VueComponent';

const VueContainer: React.FC = () => {
  const BasicWithNormal = applyVueInReact(VueComponent);
  return <BasicWithNormal />;
};

export default VueContainer;

import { applyVueInReact } from 'veaury';
import VueComponent from './dist/VueComponent';

const VueContainer: React.FC = () => {
  const BasicWithNormal = applyVueInReact(VueComponent) as React.FC;
  return <BasicWithNormal />;
};

export default VueContainer;

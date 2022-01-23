import { Title } from '../../index';
import './index.scss';

function Header(props) {
  return (
    <header>
      <Title isTitle={props.isTitle} />
    </header>
  );
}

export default Header;

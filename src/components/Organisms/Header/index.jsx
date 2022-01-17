import { Title } from '../../index'

function Header(props) {
  return (
    <header>
      <Title isTitle={props.isTitle} />
    </header>
  )
}

export default Header

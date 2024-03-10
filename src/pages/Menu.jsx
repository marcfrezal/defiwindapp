import Nav from '../components/Nav';
import '../scss/pages/Menu.scss';
import Logo from '../assets/defiwind-logo.png';

function Menu() {
  return (
    <div className="dw-menu">
      <div className="dw-menu-container">
        <img className="dw-logo" src={Logo} />
        <Nav />
      </div>
    </div>
  );
}

export default Menu;

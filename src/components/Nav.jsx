import { Link } from 'react-router-dom';
import '../scss/components/Nav.scss';

function Nav() {
  return (
    <div className="dw-nav-container">
      <Link className="dw-nav-link" to="/counter">
        LE Z
      </Link>
      <Link className="dw-nav-link" to="/lottery">
        TIRAGE AU SORT
      </Link>
    </div>
  );
}

export default Nav;

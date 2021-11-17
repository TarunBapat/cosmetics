import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
const Navigation = () => {
  return (
    <Nav defaultActiveKey="/home" as="ul">
      <Nav.Item as="li">
        <Nav.Link>
          <Link to="/">Home</Link>
        </Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link>
          <Link to="/about">About</Link>
        </Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link>
          <Link to="/store">Store</Link>
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
};
export default Navigation;

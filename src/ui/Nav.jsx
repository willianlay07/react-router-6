import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <ul
        style={{ listStyleType: "none", display: "flex", paddingLeft: "0px" }}
      >
        <li style={{ paddingLeft: "15px", paddingRight: "15px" }}>
          <Link to="/">Home</Link>
        </li>
        <li style={{ paddingLeft: "15px", paddingRight: "15px" }}>
          <Link to="/about">About</Link>
        </li>
        <li style={{ paddingLeft: "15px", paddingRight: "15px" }}>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
};

export default Nav;

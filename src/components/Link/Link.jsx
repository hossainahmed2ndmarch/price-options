import PropTypes from "prop-types";

const Link = ({ route }) => {
  return (
    <li className="mr-10 hover:rounded-md hover:px-3 hover:bg-white hover:text-black" key={route.id}>
      <a href={route.path}>{route.name}</a>
    </li>
  );
};

Link.propTypes = {
  route: PropTypes.object.isRequired,
};

export default Link;

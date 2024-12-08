import PropTypes from "prop-types";

const FruitItem = ({ id, title }) => {
  return (
    <li>
      {id} : {title}
    </li>
  );
};
FruitItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
};

export default FruitItem;

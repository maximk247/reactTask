import PropTypes from 'prop-types';

const List = ({ items }) => {
  return (
    <ul
      style={{
        listStylePosition: 'inside',
        display: 'inline-block',
        textAlign: 'left',
        margin: '1rem auto',
        padding: 0,
      }}
    >
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
};

List.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default List;

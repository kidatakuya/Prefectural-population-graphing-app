import PropTypes from 'prop-types';

function Title(props) {
  return <h1>{props.title}</h1>;
}

Title.PropsTypes={
  title: PropTypes.string,
};


export default Title;

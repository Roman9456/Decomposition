import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';

function MainCategories({ categories }) {
  return (
    <div className='mt-5'>
      {categories.map(elem =>
        <a
          className='me-2'
          key={elem.id}
          href={elem.url}
          rel='noreferrer'
          target='_blank'
        >
          <Button variant="outline-primary" className='fw-bold'>{elem.title}</Button>
        </a>
      )}
    </div>
  )
}

MainCategories.propTypes = {
  categories: PropTypes.array.isRequired,
};

export default MainCategories;
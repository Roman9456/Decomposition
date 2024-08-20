import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';

function SearchCategories({ categories }) {
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
          <Button variant="outline-secondary" className='fw-bold'>{elem.title}</Button>
        </a>
      )}
    </div>
  )
}

SearchCategories.propTypes = {
  categories: PropTypes.array.isRequired,
};

export default SearchCategories;
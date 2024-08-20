import PropTypes from 'prop-types';

import Stack from 'react-bootstrap/Stack';

function News({ news }) {
  return (
    <div>
      {news.map(elem =>
        <Stack key={elem.id} direction="horizontal" gap={2}>
          <img src={elem.icon} alt='Иконка' />
          <a
            className='me-2 text-decoration-none text-dark'
            href={elem.url}
            rel='noreferrer'
            target='_blank'
          >
            {elem.title}
          </a>
        </Stack>
      )}
    </div>
  )
}

News.propTypes = {
  news: PropTypes.array.isRequired,
};

export default News;
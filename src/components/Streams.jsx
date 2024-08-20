import PropTypes from 'prop-types';

import Stack from 'react-bootstrap/Stack';

function Streams({ streams }) {
  return (
    <div>
      <h3 className='mb-3'>Эфир</h3>
      {streams.map(elem =>
        <Stack key={elem.id} direction="horizontal">
          <img src='./src/assets/free-icon-play-button.png' className='me-2' alt='Стрим иконка' width={16} height={16} />
          <a href={elem.url} className='text-decoration-none'>
            {elem.show} <span className='text-muted'>{elem.channel}</span>
          </a>
        </Stack>
        
      )}
    </div>
  )
}

Streams.propTypes = {
  streams: PropTypes.array.isRequired,
};

export default Streams;
import PropTypes from 'prop-types';

import Stack from 'react-bootstrap/Stack';

function Shedule({ tv }) {
  return (
    <Stack>
      <h3 className='mb-3'>Телепрограмма</h3>
      {tv.map(elem =>
        <p key={elem.id} className='mb-1'>
          {elem.time} {elem.show} <span className='text-muted'>{elem.channel}</span>
        </p>
      )}
    </Stack>
  )
}

Shedule.propTypes = {
  tv: PropTypes.array.isRequired,
};

export default Shedule;
import PropTypes from 'prop-types';
import Stack from 'react-bootstrap/Stack';

function Advertisement({ title, text, img, url, width, height }) {
  return (
    <div>
      {title && text ? (
        <Stack>
          <img src={img} alt='Картинка рекламы' className='rounded' width={width} height={height} />
          <a
            className='me-2 text-decoration-none text-dark'
            href={url}
            rel='noreferrer'
            target='_blank'
          >
            {title}
          </a>
          <p className='text-muted'>{text}</p>
        </Stack>
      ) : (
        <Stack className='text-center'>
          <a
            className='me-2'
            href={url}
            rel='noreferrer'
            target='_blank'
          >
            <img src={img} alt='Картинка рекламы' className='rounded' width={width} height={height} />
          </a>
        </Stack>
      )}
      
    </div>
  )
}

Advertisement.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  img: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
};

export default Advertisement;
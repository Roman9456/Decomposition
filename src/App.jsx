// components
import MainCategories from './components/MainCategories';
import News from './components/News';
import Advertisement from './components/Advertisement';
import SearchCategories from './components/SearchCategories';
import Weather from './components/Weather';
import Shedule from './components/Schedule';
import Streams from './components/Streams';

// bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';

// configs
import mainCategories from './configs/mainCategories';
import news from './configs/news';
import advertisement from './configs/advertisement';
import searchCategories from './configs/searchCategories';
import shedule from './configs/shedule';
import streams from './configs/streams';

function App() {
  return (
    <Container>
      <MainCategories categories={mainCategories}/>

      <Row className='mt-3'>
        <Col>
          <News news={news}/>
        </Col>
        <Col>
          <Advertisement {...advertisement[0]}/>
        </Col>
      </Row>

      <Row className='mt-3'>
        <SearchCategories categories={searchCategories}/>
      </Row>

      <InputGroup size="lg" className="mb-3 mt-3">
        <InputGroup.Text id="inputGroup-sizing-lg">YANDEX</InputGroup.Text>
        <Form.Control
          aria-label="Large"
          aria-describedby="inputGroup-sizing-lg"
        />
        <Button variant="warning">
          Найти
        </Button>
      </InputGroup>

      <Col>
        <Advertisement {...advertisement[1]}/>
      </Col>

      <Row className='mt-3'>
        <Col>
          <Weather />
        </Col>
        <Col>
          <Shedule tv={shedule}/>
        </Col>
        <Col>
          <Streams streams={streams}/>
        </Col>
      </Row>

    </Container>
  )
}

export default App

import Carousel from 'react-bootstrap/Carousel';
import Image1 from '../Assets/Art1.jpeg'
import Image2 from '../Assets/Art2.jpeg'
import Image3 from '../Assets/Art3.jpeg'

const LandingPage = (props)=> {
  
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Image2}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>{props.message}</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Image3}
          alt="Second slide"
        />

        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Image1}
          alt="Third slide"
        />

        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default LandingPage
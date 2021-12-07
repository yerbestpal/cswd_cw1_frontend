import React from 'react'
import { Container, Image } from 'react-bootstrap'
import splash from '../../assets/home_splash.jpg'
import testimonial_1 from '../../assets/testimonial_1.jpg'
import testimonial_2 from '../../assets/testimonial_2.jpg'
import testimonial_3 from '../../assets/testimonial_3.jpg'
import Testimonial from '../Testimonial/Testimonial'
import './Home.css'
import Footer from '../Footer/Footer'

const Home = () => {
  return (
    <>
      <Container>
        <header>
          <Image className={'splash'} src={splash} alt="" fluid/>
          <div className={'center-text splash-text'}>Discover North Coast 500 - Scotland's ultimate road trip</div>
        </header>
        <main>
          <Testimonial
            image={testimonial_1}
            name={'Jamie'}
            location={'Glasgow'}
            reverse_row={false}
            quote={'NC500 Hostels is an excellent service for planning trips across the north coast. 10/10!'}
          />
          <Testimonial
            image={testimonial_2}
            name={'Angela'}
            location={'Liverpool'}
            reverse_row={true}
            quote={'I had an amazing trip and I couldn\'t have done it without NC500 Hostels'}
          />
          <Testimonial
            image={testimonial_3}
            name={'Jemma'}
            location={'Cardiff'}
            reverse_row={false}
            quote={'NC500 Hostels gave me the opportunity to explore Scotland in a unique way. I couldn\'t rate them higher.'}
          />
        </main>
      </Container>
      <Footer />
    </>
  )
}

export default Home
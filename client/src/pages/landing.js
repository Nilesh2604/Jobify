
import {Logo} from '../components'
import main from '../assets/images/main.svg'
import Wrapper from '../assets/wrappers/LandingPage'
import { Link } from 'react-router-dom'

const Landing = () => {
  return  (
  <Wrapper>
    <nav>
     <Logo />
    </nav> 

    <div className="container page">
      <div className="info">
        <h1>
          job <span>
            tracking
          </span> app
        </h1>
        <p>Iceland skateboard enamel pin same, umami chambray Brooklyn. Paleo next level chia thundercats vegan messenger bag hell of tbh solarpunk vibecession small batch poutine narwhal cardigan. Prism edison bulb freegan 90's. Kickstarter williamsburg umami viral cloud bread JOMO aesthetic pour-over fashion axe drinking vinegar .</p>
        <Link to='/register' className='btn btn-hero'>
              Login/Register
            </Link>
      </div>
      <img src={main} alt='job hunt' className="img main-img" />
    </div>

  </Wrapper>
  )
}





export default Landing
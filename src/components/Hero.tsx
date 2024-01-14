import { useMediaQuery } from 'react-responsive'
import HeroMobile from './HeroMobile'
import HeroDesktop from './HeroDesktop'

const Hero = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 })

  return <>{isMobile ? <HeroMobile /> : <HeroDesktop />}</>
}

export default Hero

// Combines and renders all sections that make up the homepage
// Contributor : Aryan Puri (23BCE8560)


import Navbar1 from './Navbar1'
import Hero1 from './Hero1'
import About from './About'
import Events from './Events'
import Projects from './Projects'
import Team from './Team'
import Contact from './Contact'
import Footer from './Footer'

const Homepage = () => {
  return (
    <>
      <Navbar1 />
      <Hero1 />
      <About />
      <Events />
      <Projects />
      <Team />
      <Contact />
      <Footer />

    </>
  )
}

export default Homepage

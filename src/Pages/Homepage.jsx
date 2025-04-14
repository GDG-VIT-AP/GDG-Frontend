// Combines and renders all sections that make up the homepage
// Contributor : Aryan Puri (23BCE8560)


import Navbar1 from '../components/Navbar1'
import Hero1 from '../components/Hero1'
import About from '../components/About'
import Events from '../components/Events'
import Projects from '../components/Projects'
import Team from '../components/Team'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

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

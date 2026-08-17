import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import Positioning from './components/Positioning.jsx'
import Services from './components/Services.jsx'
import Work from './components/Work.jsx'
import SecurityLab from './components/SecurityLab.jsx'
import Skills from './components/Skills.jsx'
import About from './components/About.jsx'
import Experience from './components/Experience.jsx'
import Leadership from './components/Leadership.jsx'
import Articles from './components/Articles.jsx'
// import GithubActivity from './components/GithubActivity.jsx'
import HowIWork from './components/HowIWork.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <div>
      <Nav />
      <main>
        <Hero />
        <Positioning />
        <Services />
        <Work />
        <SecurityLab />
        <Skills />
        <About />
        <Experience />
        <Leadership />
        <Articles />
        {/* <GithubActivity /> */}
        <HowIWork />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

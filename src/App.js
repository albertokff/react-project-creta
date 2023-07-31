import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import Home from './components/pages/Home'
import NewProject from './components/pages/NewProject'
import Project from './components/pages/Project'
import Projects from './components/pages/Projects'
import Company from './components/pages/Company'
import Contact from './components/pages/Contact'

import Container from './components/layout/Container'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Container customClass="min-height"><Home /></Container>} />
        <Route path="/company" element={<Container customClass="min-height"><Company /></Container>} />
        <Route path="/contact" element={<Container customClass="min-height"><Contact /></Container>} /> 
        <Route path="/newproject" element={<Container customClass="min-height"><NewProject /></Container>} />
        <Route path="/projects" element={<Container customClass="min-height"><Projects /></Container>} />
        <Route path="/project/:id" element={<Container customClass="min-height"><Project /></Container>} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App;
 
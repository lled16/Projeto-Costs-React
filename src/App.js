import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Home from './Components/Pages/Home'
import Company from './Components/Pages/Company'
import Contact from './Components/Pages/Contact'
import NewProject from './Components/Pages/NewProject'


import Container from './Components/layout/Container'
import Navbar from './Components/layout/Navbar'
import Footer from './Components/layout/Footer'
import Projects from './Components/Pages/Projects'
import Project from './Components/Pages/Project'

function App() {
  return (
    <Router>
      <Navbar/>
      <Container customClass="min-height">
      <Routes>
      
          <Route exact path='/' element={<Home />}> </Route>

          <Route path='/projects' element={<Projects />}> </Route>

          <Route path='/company' element={<Company />}> </Route>

          <Route path='/contact' element={<Contact />}> </Route>

          <Route path='/newproject' element={<NewProject />}> </Route>

          <Route path='/project/:id' element={<Project />}> </Route>
      </Routes>
      </Container>


     <Footer/>
    </Router>
  );
}

export default App;

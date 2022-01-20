import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import { Route, Routes } from 'react-router-dom'

function App() {

  return (
    <div className="App">
      <Header/>
      <div className='content-wrap'>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
      </div>
      <Footer/>
    </div>
  )
}

export default App

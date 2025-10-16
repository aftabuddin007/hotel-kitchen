
import './App.css'
import Heading from './Components/Heading'
import Logo from './Components/Logo'
import Navbar from './Components/Navbar'


function App() {
  

  return (
    <div className='max-w-7xl mx-auto'>
    
      <header>
        <Navbar></Navbar>
      </header>
      <section>
        <Heading>Hotel Kitchen</Heading>
      </section>
    </div>
  )
}

export default App

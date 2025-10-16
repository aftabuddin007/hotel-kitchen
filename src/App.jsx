
import { Suspense } from 'react'
import './App.css'
import Heading from './Components/Heading'
import Logo from './Components/Logo'
import Navbar from './Components/Navbar'
import OrderContainer from './Components/OrderContainer'
// import States from './Components/States'
const loadOrder = ()=>fetch("/orders.json").then((res)=>res.json())

function App() {
  
const orderPromise = loadOrder()

  return (
    <div className='max-w-7xl mx-auto'>
    
      <header>
        <Navbar></Navbar>
      </header>
      <section>
        <Heading>Hotel Kitchen</Heading>
      </section>
      <section>
      <Suspense fallback={'loading....'}>
        <OrderContainer orderPromise={orderPromise}></OrderContainer>
      </Suspense>
      </section>
    </div>
  )
}

export default App

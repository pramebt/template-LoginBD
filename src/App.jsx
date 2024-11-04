import React from 'react'
import Login from './page/Login'
import Curcle2 from './component/Curcle2'
import Curcle from './component/Curcle'


const App = () => {
  return (
    // <Example/>
    <div className='relative z-40 top-[50%] left-[50%] 
     translate-x-[-50%] translate-y-[-50%]  h-[635px] w-[480px]'>
      
      <div className='z-0 absolute top-[10%] left-[5%]'>
      <Curcle2/>
      </div>
      <div className='z-0 absolute bottom-[10%] right-[5%]'>
      <Curcle/>
      </div>
     
    <div className='absolute z-40 top-[50%] left-[50%] 
     translate-x-[-50%] translate-y-[-50%]'>
    <Login/>
    </div>
    </div>
  )
}

export default App
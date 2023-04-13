import React from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Loader from './components/Loader'
function App() {
  const [count, setCount] = React.useState(0)
  const [isLoading,setIsLoading] = React.useState<boolean>(true)

  React.useEffect(()=> {
    setTimeout(()=>{
      setIsLoading(false)
    },6000)
  },[])

  return (
    <React.Fragment>
      {
        isLoading? (
          <Loader/>
        ):(
          <div className="App">
          <div>
            <a href="https://vitejs.dev" target="_blank">
              <img src={viteLogo} className="logo" alt="Vite logo" />
            </a>
            <a href="https://reactjs.org" target="_blank">
              <img src={reactLogo} className="logo react" alt="React logo" />
            </a>
          </div>
          <h1>Vite + React</h1>
          <div className="card">
            <button onClick={() => setCount((count) => count + 1)}>
              count is {count}
            </button>
            <p>
              Edit <code>src/App.tsx</code> and save to test HMR
            </p>
          </div>
          <p className="read-the-docs">
            Click on the Vite and React logos to learn more
          </p>
        </div>
        )
      }
    </React.Fragment>
  
  )
}

export default App

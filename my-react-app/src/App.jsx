import { useRef } from "react"


function App() {
   
  const inputRef = useRef();

  const focusInput = ()=>{
    inputRef.current.focus();
  }

  return (
   <div style={{padding: "20px"}}>
    <h1>UseRef Example</h1>

    <input type="text" ref={inputRef} placeholder="Enter Your Name"/>
    <br /><br />

    <button onClick={focusInput}>Focus Input</button>
   </div>
  )
}

export default App

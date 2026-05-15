import { useRef, useState } from "react"

function UseRef_ex_2() {
    const[count,setCount] = useState(0);

    const timerRef = useRef(null)

    const startTimer = ()=> {
        timerRef.current = setInterval(()=>{
            setCount((prev)=> prev + 1)
        },1000)
    }
    const stopTimer = ()=> {
        clearInterval(timerRef.current)
    }
  return (
    <div style={{padding:"20px"}}>
        <h1>Stopwatch using useRef</h1>
        <h2>{count}</h2>

        <button onClick={startTimer}>Start</button>

        <button onClick={stopTimer}>Stop</button>


      
    </div>
  )
}

export default UseRef_ex_2

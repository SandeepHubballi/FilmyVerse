import React , {useState} from 'react'

const Inc_dec = () => {

    let [state , setState ] = useState(0)

    let inc = () => {
        setState(state+1)
    }

    let dec = () => {
        setState(state-1)
    }

  return (
    <>
        <div>{state}</div>
        <button onClick={inc}>Incement</button>
        <button onClick={dec}>Decrement</button>
    </>
  )
}

export default Inc_dec
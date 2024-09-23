import './App.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';

function App() {
  const [principle, setPrinciple] = useState("")
  const [rate, setRate] = useState("")
  const [year, setYear] = useState("")
  const [interest, setInterest] = useState("")
  const [isPrinciple, setIsPrinciple] = useState(true)
  const [isRate, setIsRate] = useState(true)
  const [isYear, setIsYear] = useState(true)

  const validate = (e) => {
    console.log(e.target.name);
    console.log(e.target.value);
    console.log(!!e.target.value.match('^[0-9]*$'));

    if (!!e.target.value.match('^[0-9]*$')) {
      if (e.target.name === 'principle') {
        setPrinciple(e.target.value)
        setIsPrinciple(true)
      } else if (e.target.name === 'rate') {
        setRate(e.target.value)
        setIsRate(true)
      } else {
        setYear(e.target.value)
        setIsYear(true)
      }
    } else {
      if (e.target.name === 'principle') {
        setPrinciple(e.target.value)
        setIsPrinciple(false)
      } else if (e.target.name === 'rate') {
        setRate(e.target.value)
        setIsRate(false)
      } else {
        setYear(e.target.value)
        setIsYear(false)
      }
    }
  }

  const handleReset = () => {
    setPrinciple("")
    setRate("")
    setYear("")
    setInterest("") 
    setIsPrinciple(true)
    setIsRate(true)
    setIsYear(true)
  }

  const handleCalculate = ()=>{
    setInterest((principle*rate*year)/100)
  }

  return (
    <>
      <div style={{ height: '100vh' }} className='bg-dark w-100 d-flex justify-content-center align-items-center'>
        <div style={{ width: '500px' }} className='p-5 bg-light rounded'>
          <h1><b>Simple Interest App</b></h1>
          <p>Calculate your simple Interest Easily</p>
          <div style={{ width: '400px', height: '150px' }} className='bg-warning rounded d-flex justify-content-center align-items-center flex-column'>
            <h1><b>₹ {interest || 0}</b></h1>
            <p>Total simple interest</p>
          </div>
          <div className='my-3'>
            <TextField name='principle' id="outlined-basic" label="₹ Principle amount" variant="outlined" className='w-100'
              onChange={(e) => validate(e)} value={principle}/>
            {!isPrinciple && <span className='text-danger'>*invalid input</span>}
          </div>
          <div className='mb-3'>
            <TextField name='rate' id="outlined-basic" label="Rate of Interest" variant="outlined" className='w-100' onChange={(e) => validate(e)}value={rate}/>
            {!isRate && <span className='text-danger'>*invalid input</span>}
          </div>
          <div className='mb-3'>
            <TextField name='year' id="outlined-basic" label="Year" variant="outlined" className='w-100' onChange={(e) => validate(e)} value={year}/>
            {!isYear && <span className='text-danger'>*invalid input</span>}
          </div>
          <div className='my-3 d-flex justify-content-between'>
            <Button onClick={handleCalculate} variant="contained" color="success" disabled={isPrinciple && isRate && isYear ? false:true}>CALCULATE</Button>
            <Button onClick={handleReset} variant="outlined" color="error">RESET</Button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App;

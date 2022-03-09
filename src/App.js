import React, {useEffect, useState} from 'react';
import './App.css';
import CurRow from './CurRow';
const API_URL = 'https://api.currencyapi.com/v2/latest?apikey=itaKd1wemitPKoUVPur7jH6PrgDmA9QIXennUI7k'

function App() {
  const [CurOptions, setCurOptions] = useState([])
  const [fromCur, setFromCur] = useState()
  const [toCur, setToCur] = useState()
  const [amount, setAmount] = useState(1)
  const [amountFrom, setAmountFrom] = useState(true)
  const [fxRate, setFxRate] = useState()
 // console.log(fxRate)

  let toAmount, fromAmount

  if(amountFrom){
    fromAmount = amount
    toAmount = amount * fxRate
  }else{
    toAmount = amount
    fromAmount = amount / fxRate
  }
  
useEffect(()=> {
    fetch(API_URL)
    .then(dataResponse => dataResponse.json())
    .then(data => {
      const firstCur = Object.keys(data.data)[0]
      setCurOptions([...Object.keys(data.data)])
      setFromCur(data.query.base_currency)
      setToCur(firstCur)
      setFxRate(data.data[firstCur])
    })
}, [])
    
  function fromChangedAmount(e){
    setAmount(e.target.value)
    setAmountFrom(true)
  }

  function toChangedAmount(e){
    setAmount(e.target.value)
    setAmountFrom(false)
  }

  return (
    <>
    <div className='cc-body'>
      <h1>Currency Converter</h1>
      <CurRow
        selecttype = "curFrom"
        setCur = {fromCur}
        CurOptions = {CurOptions}
        onChangeCur = {e=> setFromCur(e.target.value)}
        amount = {fromAmount} 
        onChangeAmount = {fromChangedAmount}
      />
      <div className='equal-sign'>=</div>
      <CurRow 
        selecttype = "curTo"
        setCur = {toCur}
        CurOptions = {CurOptions}
        onChangeCur = {e=> setToCur(e.target.value)}
        amount = {toAmount}
        onChangeAmount = {toChangedAmount}
      />
    </div>
    </>
  );
}

export default App;

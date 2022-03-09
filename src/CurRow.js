import React from 'react'

export default function CurRow(props) {
    const {
        CurOptions,
        setCur,
        onChangeCur,
        selecttype,
        amount,
        onChangeAmount
    } = props
 


  return (
     
    <div>
        <input type="number" className='inputField' value={amount} onChange={onChangeAmount}/>
        <select id={selecttype} value={setCur} onChange={onChangeCur}>
            {CurOptions.map(option=>(<option value={option} key={option}>{option}</option>))}
        </select>
    </div>
  )
}

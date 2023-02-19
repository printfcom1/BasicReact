import './App.css';
import Transaction from './component/Transaction';
import './component/item.css'
import FormComponent from './component/FormComponent';
import { useEffect, useState,useReducer } from 'react';
import dataContext from './data/DataContext';
import FormatTest from './component/FormatTest';
//import { element } from 'prop-types';

function App() {

  const Title = () => <h1>บัญชีรายรับ- รายจ่าย</h1>


  const initdata = [

  ]

  const [reportIncome,setReportIncome] = useState(0)
  const [reportExpense,setReportExpense] = useState(0)
  const [item,setItem] = useState(initdata)

  const onAddNewItem = (newItem) => {
    setItem((data)=>{
      return [newItem,...data]
    })
  }
  useEffect(()=>{
   const amounts = item.map(item=>item.amount)
   const income = amounts.filter(element=>element>0).reduce((total,element)=>total+=element,0)
   const expense = (amounts.filter(element=>element<0).reduce((total,element)=>total+=element,0))*(-1)
 
   setReportIncome(income)
   setReportExpense(expense)
  }
    ,[item,reportIncome,reportExpense])


  const [showReport,setShowReport] =useState(false)

  const reducer = (state,action) => {
    switch(action.type){
      case "SHOW" : 
        return setShowReport(true)
      case "HIDE" :
        return setShowReport(false)
    }
  }

  const [result,dispatch] = useReducer(reducer,showReport)

  return (
    <dataContext.Provider value = {
      {
        income : reportIncome,
        expense : reportExpense,
      }
    }>
      <div className ='container'>
        <Title/>
        {showReport && <FormatTest/>}
        <FormComponent onAddItem ={onAddNewItem}/>
        <Transaction item = {item}/>
        <p> {result}</p>
      <button onClick={()=>dispatch({type:"SHOW"})}> แสดง</button>
      <button onClick={()=>dispatch({type:"HIDE"})}> ซ่อน</button>
    </div>
    </dataContext.Provider>
  );
  

  
}

export default App;



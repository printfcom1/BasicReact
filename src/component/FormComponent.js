import { useState,useEffect } from "react"
import "./FormComponent.css"
import { v4 as uuidv4 } from 'uuid';

const FormComponent = (props) => {
    const [title,SetTiTle] = useState("")
    const [amount,SetAmount] = useState(0)
    const [formValid,SetformValid] = useState(false)

    const InputTitle =(event) => {
        SetTiTle(event.target.value)
    }

    const InputAmount =(event) => {
        SetAmount(event.target.value)
    }

    const saveItem =(event) => {
        event.preventDefault()
        console.log("เพิ่มข้อมูลเรียบร้อย")
        const itemData = {
            id: uuidv4(),
            title:title,
            amount:Number(amount)
        }
        props.onAddItem(itemData)
        SetAmount(0)
        SetTiTle("")
    }

     useEffect(()=>{
        const checkData = title.trim().length>0 && Number(amount) !==0
        SetformValid(checkData)
    },[title,amount])
    return ( <div>
        <form onSubmit={saveItem}>
            <div className="form-control">
                <label>ชื่อรายการ</label>
                <input type={"text"} placeholder="ระบุชื่อรายการของคุณ" onChange={InputTitle} value={title}/>
            </div>
            <div className="form-control">
                <label>จำนวนเงิน</label>
                <input type={"number"} placeholder="(+ รายรับ, -รายจ่าย)" onChange={InputAmount} value={amount}/>
            </div>
            <div >
                <button type="submit" className="btn" disabled={!formValid}>เพิ่มข้อมูล</button>
            </div>
        </form>

    </div>

    );
}

export default FormComponent
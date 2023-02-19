import { useContext } from "react";
import dataContext from "../data/DataContext";
import './ReportComponent.css'

const FormatTest = () => {
    const {income,expense} = useContext(dataContext)
    return (
        <div>
            <h4>ยอดคงเหลือ (บาท)</h4>
            <h2>{income-expense}</h2>
            <div className="report-container">
                <div>
                    <h4>ยอดรายรับ (บาท)</h4>
                    <p className="report plus">{income} </p>
                </div>
                <div>
                    <h4>ยอดรายจ่าย (บาท)</h4>
                    <p className="report minus">{expense} </p>
                </div>
            </div>
        </div>
    )
}

export default FormatTest
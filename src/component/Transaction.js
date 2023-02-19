import './item.css'
import PropTypes from 'prop-types'; // ES6


const Item = (props) =>{
    const {title,amount} = props
    const status = amount<0 ? "expense":"income"
    const symbol = amount<0 ? "-":"+"
    return <li className={status}> {title}  <samp>{symbol} {Math.abs(amount)} </samp>
    </li>
}

Item.propTypes ={
    title:PropTypes.string.isRequired,
    amount:PropTypes.number.isRequired
}

const Transaction = (props) => {
const {item} = props
   return (
        <div>
            <ul className='list-item'>
                {item.map((element)=>{
                return <Item {...element} key= {element.id}/>
                })}
            </ul>
        </div>

    )
  }

export default Transaction
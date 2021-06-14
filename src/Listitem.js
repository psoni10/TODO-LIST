import React from 'react';
import './Listitem.css'
function Listitem(props){
    const items =  props.items;
    const listItems = items.map(item =>{
        return <div className="list" key={item.key}>
             <p>
             <input type= "text" id = {item.text} 
             value = {item.text}
             onChange = { (e) => {
                 props.setUpdate(e.target.value, item.key)
             }
             }
             />
             {/* <span>&#10006;
               onClick = { () =>{ props.deleteItem(item.key)}}  
             </span> */}
             <button onClick = { () =>props.deleteItem(item.key)}  >&#10006;</button>
             </p>
             
        </div>
    })
    return(
        <div>{listItems}</div>
    )
}
export default Listitem;
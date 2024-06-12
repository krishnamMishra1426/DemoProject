import React, { useState } from 'react'
import './AddToCard.css';
import { cardData } from '../CardData/CardData'
import { addItem, removeItem } from '../../Redux/cartSlice/cartSlice';
import { useDispatch, useSelector } from 'react-redux';

const AddToCard = () => {
    const [data,setData]=useState(cardData)
    const cartDetails=useSelector((state)=> state.cart.items)
    const dispatch=useDispatch();

   const handleAddToCard =async(item)=>{
    dispatch(addItem(item));
   }
   

   const handleRemoveAddToCard =async(id)=>{
    dispatch(removeItem(id));
   }
  
  return (
    <>
     <h1 style={{textAlign:"center"}}>Items</h1>
    <div className='app-container'> 
    {data?.map((item,index)=>(
        <div key={index}  >
            <div className='item-box'>
            <p><b>Name : </b>{item.name}</p>
            <p><b>Description : </b>{item.description}</p>
            <p><b>Price : </b>{item.price}	&#8377;</p>
            <div className='button-box'>
            <button onClick={()=>handleAddToCard(item)}>AddToCard</button>
            </div>
            </div>
        </div>
    ))}
    </div>
    <h1 style={{textAlign:"center"}}>Show AddToCard Items ({cartDetails?.length})</h1>
    <div className='app-container'> 
    {cartDetails?.map((cart,index)=>(
        <div key={index}  >
            <div className='item-box'>
            <p><b>Name : </b>{cart.name}</p>
            <p><b>Description : </b>{cart.description}</p>
            <p><b>Price : </b>{cart.price}	&#8377;</p>
            <p><b>Quantity : </b>{cart.quantity}</p>
            <p><b>totalPrice : </b>{cart.totalPrice}</p>
            <div className='button-box'>
            <button onClick={()=>handleRemoveAddToCard(cart.id)}>Delete</button>
            </div>
            </div>
        </div>  
    ))}
        </div>
    </>
  )
}

export default AddToCard
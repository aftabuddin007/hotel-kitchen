import React, { use, useState } from 'react';
import States from './States';
import OrderCard from './Cards/OrderCards';
import CookingCard from './CookingCards';
import { toast } from 'react-toastify';
import ReadyCard from './ReadyCard';

const OrderContainer = ({orderPromise}) => {
    const data = use(orderPromise)
    const [orders,setOrders]=useState(data)
    const [cookingItem,setCookingItem]=useState([])
    const [readyItem,setReadyItems]=useState([])

const handleOrder = (order)=>{
    toast.success('Order called')
const isExist = cookingItem.find(item=>item.id ===order.id)
if(isExist){
    toast.error('already cooking')
    return;
}
const newCookingItems = [...cookingItem,order]
setCookingItem(newCookingItems)


}
const handleCooking =(order)=>{
    order.cookedAt=new Date().toLocaleDateString()
const newReadyItems = [...readyItem,order]
setReadyItems(newReadyItems)
const remaining = cookingItem.filter((item)=>item.id !== order.id);
setCookingItem(remaining);
const remainingOrders = orders.filter((item)=>item.id !==order.id)
setOrders(remainingOrders)

}
    return (
        <div>
            <States 
            cookingTotal = {cookingItem.length} 
            orderTotal={orders.length}
            readyTotal={readyItem.length}
            ></States>
            <section className='grid grid-cols-1 lg:grid-cols-12 gap-5'>
<div  className=' lg:col-span-7'>
    <h2 className='font-bold text-4xl'>Current Orders</h2>
<div className='space-y-5'>
{
    orders.map(item=>(<OrderCard handleOrder={handleOrder} key={item.id} order={item}></OrderCard>))
}
</div>

</div>
<div className=' lg:col-span-5 space-y-5'>
    <h2 className='font-bold text-4xl'>Cooking Now</h2>
<div className='shadow p-10 space-y-5'>
{
    cookingItem.map(order=><CookingCard    handleCooking={handleCooking} key={order.id} order={order}></CookingCard>)
}

</div>
    <h2 className='font-bold text-4xl'>Order Ready</h2>
<div className='shadow p-10 space-y-5'>
    {
        readyItem.map(order=><ReadyCard key={order.id} order={order}></ReadyCard>)
    }
</div>





</div>

            </section>
        </div>
    );
};

export default OrderContainer;
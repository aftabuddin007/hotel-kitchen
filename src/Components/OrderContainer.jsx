import React, { use } from 'react';
import States from './States';
import OrderCard from './Cards/OrderCards';

const OrderContainer = ({orderPromise}) => {
    const orders = use(orderPromise)
    console.log(orders)
    return (
        <div>
            <States orderTotal={orders.length}></States>
            <section className='grid grid-cols-1 lg:grid-cols-12 gap-5'>
<div className=' lg:col-span-7'>
    <h2 className='font-bold text-4xl'>Current Orders</h2>
<div className='space-y-5'>
{
    orders.map(item=>(<OrderCard key={item.id} order={item}></OrderCard>))
}
</div>

</div>
<div className=' lg:col-span-5'>Cooking + Ready Food</div>

            </section>
        </div>
    );
};

export default OrderContainer;
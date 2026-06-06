import React from 'react';

const ReadyCard = ({ order }) => {
    return (
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow duration-200 w-full max-w-sm">
            {/* Header Section */}
            <div className="bg-amber-50 border-b border-amber-100 px-5 py-4 flex justify-between items-center">
                <h2 className="text-lg font-bold text-gray-800 truncate pr-4">
                    {order.order_title}
                </h2>
                <span className="bg-amber-500 text-white text-xs font-bold px-2.5 py-1 rounded-full uppercase tracking-wider shrink-0 shadow-sm">
                    Ready
                </span>
            </div>

            {/* Details Section */}
            <div className="p-5 space-y-3">
                <div className="flex justify-between items-center text-sm border-b border-dashed border-gray-200 pb-2">
                    <span className="text-gray-500 font-medium">Table No.</span>
                    <span className="text-gray-900 font-bold bg-gray-100 px-2 py-0.5 rounded">
                        {order.table_no}
                    </span>
                </div>

                <div className="flex justify-between items-center text-sm border-b border-dashed border-gray-200 pb-2">
                    <span className="text-gray-500 font-medium">Waiter ID</span>
                    <span className="text-gray-900 font-medium">
                        {order.waiterId}
                    </span>
                </div>

                <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-500 font-medium">Cooked At</span>
                    <span className="text-gray-900 font-medium">
                        {order.cookedAt}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default ReadyCard;
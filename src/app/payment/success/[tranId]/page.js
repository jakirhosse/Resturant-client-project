import React from 'react';

const SuccessPayment = ({ params }) => {
    console.log(params.tranId);
    return (
        <div>
            <h3>Payment successfully</h3>
        </div>
    );
};

export default SuccessPayment;
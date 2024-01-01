import React from "react";
import format from 'number-formatter';

const NumberFormat = ({ amount }) => {
    const formattedAmount = format('#,##0.00', amount);
  
    return (
      <div>
        <p>{formattedAmount} NGN</p>
      </div>
    );
};

export default NumberFormat;
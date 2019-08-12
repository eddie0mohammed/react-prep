import React from 'react'

import './Card.styles.scss';

const Card = () => {
    return (
        <div className="card-container">
            <h3>work order: name from allOrders</h3>
            <p>description: from allOrders</p>
            
            <h4>Employee name: from employee</h4>
            <h5>email: from employee</h5>
            <h6>Deadline: from allOrders</h6>


        </div>
    )
}

export default Card

import React from 'react'

const Card = (props) => {

    const {name, description, deadline} = props.order;
    const {companyName, email} = props.worker;

    const date = new Date(deadline * 1000);





    return (
        <div style={{border: '1px solid black', width: '45%', margin: '20px', padding: '10px'}}>
            <h3>{name}</h3>
            <p>{description}</p>
            <h4>{props.worker.name}</h4>
            <p>{companyName}</p>
            <p>{email}</p>
            <p>{date.toLocaleDateString()}{' '}{date.toLocaleTimeString()}</p>
            <p>{deadline}</p>
            
        </div>
    )
}

export default Card

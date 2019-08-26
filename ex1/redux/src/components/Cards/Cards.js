import React from 'react'

const Cards = (props) => {
    return (
        <div className='mt-5 p-3 mx-2 ' style={{border: '1px solid black', width: '40%'}}>

            <h4>Work order: from workOrder</h4>
            <p>Description: from workOrder</p>
            <h4>Worker Name: from workersID</h4>
            <p>Company: from workersID</p>
            <p>email: from workersID</p>
            <p>DeadLine: from workOrder</p>

            
        </div>
    )
}

export default Cards

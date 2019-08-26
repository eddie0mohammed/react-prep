import React from 'react'

import Button from 'react-bootstrap/Button';

const Filters = () => {
    return (
        <div className="container d-flex justify-content-center">

            <Button className="btn-md btn-primary mx-5">Earliest first</Button>
            <Button className="btn-md btn-primary mx-5">Latest first</Button>
            
            
        </div>
    )
}

export default Filters

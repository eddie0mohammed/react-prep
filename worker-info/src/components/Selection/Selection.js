import React from 'react'

import Button from 'react-bootstrap/Button';
import './Selection.scss';

const Selection = () => {
    return (
        <div className="d-flex justify-content-center">

            <Button className="btn-secondary mx-3">Earliest First</Button>
            <Button className="btn-secondary mx-3">Latest First</Button>


            
        </div>
    )
}

export default Selection

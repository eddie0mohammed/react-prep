import React from 'react'

import Button from 'react-bootstrap/Button';

const Sorting = (props) => {
    return (
        <div className="container d-flex justify-content-between" style={{width: '30%'}}>
            <Button>Earliest first</Button>
            <Button>Latest first</Button>

        </div>
    )
}

export default Sorting

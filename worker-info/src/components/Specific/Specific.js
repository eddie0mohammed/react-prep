import React from 'react'
import Card from '../Card/Card';
import Button from 'react-bootstrap/Button';

const Specific = (props) => {
    return (
        <div>
            <div className="container my-5 bg-primary">
                specific
            </div>

            <Button className="primary" onClick={() => props.history.push('/')}>Back</Button>
        </div>
    )
}

export default Specific

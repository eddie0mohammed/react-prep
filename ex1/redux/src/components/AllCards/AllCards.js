import React from 'react'

import Card from '../Cards/Cards';

const AllCards = (props) => {
    return (
        <div className="d-flex flex-wrap justify-content-center">
            <Card />
            <Card />
            <Card />
            <Card />
        </div>
    )
}

export default AllCards

import React from 'react'

import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

const SearchBar = (props) => {
    return (
        <div className="container mt-5">
              <InputGroup className="mb-3">
                
                <FormControl
                placeholder="Username"
                aria-label="Username"
                aria-describedby="basic-addon1"
                />
                <InputGroup.Append>
                    <Button >Search</Button>
                </InputGroup.Append>
            </InputGroup>
            
        </div>
    )
}

export default SearchBar

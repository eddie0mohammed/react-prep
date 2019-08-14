import React from 'react'

import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';


class SearchBar extends React.Component{

    state = {
        id: ''
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state.id);
        this.setState({id : ''})
        
    }

    handleChange = (e) => {
        this.setState({
            id: e.target.value
        })
    }

    render(){

    return (
        <div>
            <InputGroup className="mb-3">

                <form onSubmit={this.handleSubmit} style={{width: '100%', display:'flex'}}>
                    <FormControl style={{width: '100%'}}
                    placeholder="Search employees by Id"
                    aria-label="Search employee by Id"
                    aria-describedby="basic-addon1"
                    value={this.state.id} onChange={this.handleChange}
                    />
                    
                    <Button type="submit" variant="primary">Search</Button>
                    
                </form>           
            </InputGroup>
            

        </div>
    )
    }
}

export default SearchBar

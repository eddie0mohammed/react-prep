import React from 'react'

import FormControl from 'react-bootstrap/FormControl';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button'

import {withRouter} from 'react-router-dom';

class SearchBar extends React.Component{

    state = {
        id: ''
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({
            id: ''
        })
        this.props.history.push(`/${this.state.id}`);
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render(){

        


        return (
        
            <form onSubmit={this.handleSubmit}>
                <InputGroup className="mb-3">
                
                    <FormControl
                    placeholder="Search employee by id"
                    value={this.state.id} onChange={this.handleChange} name="id"
                    />
                    
                    <InputGroup.Prepend>
                        <Button type="submit" className="btn-md btn-success">Submit</Button>
                    </InputGroup.Prepend>
                </InputGroup>
        </form>

        )
    }
}

export default withRouter(SearchBar);

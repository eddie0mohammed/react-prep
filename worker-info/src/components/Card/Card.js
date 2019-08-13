import React from 'react';

import {connect} from 'react-redux';

import './Card.styles.scss';

class Card extends React.Component {

    render(){
    const {order, description, deadline, workerId, employees} = this.props;
    

    // console.log(employees);
    const current = employees ? employees : null;
    console.log(current);



    return (
        
        <div className="card-container">
            <h3>{order}</h3>
            <p>{description}</p>
            
            <h4>Employee name: from employee</h4>
            <h3>company: from employee</h3>
            <h5>email: from employee</h5>
            <h6>{deadline}</h6>

        </div>
    )
    }

}

const mapStateToProps = (state) => {
    return {
        employees: state.app.allEmployees 
    }
}

export default connect(mapStateToProps)(Card)

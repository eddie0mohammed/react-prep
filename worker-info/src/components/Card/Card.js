import React from 'react';

import {connect} from 'react-redux';

import './Card.styles.scss';

class Card extends React.Component {
   

    render(){
    const {order, description, deadline, workerId, employees} = this.props;
    

    // console.log(employees); 
    const currentEmployee = employees.filter(employee => employee.id === workerId)
    // console.log(currentEmployee)

    //date
    const date = new Date(deadline * 1000);
   
    return (
        
        <div className="card-container">
            <h3>{order}</h3>
            <p>{description}</p>
            
            <h4>{currentEmployee[0].name}</h4>
            <h3>{currentEmployee[0].companyName}</h3>
            <h5>{currentEmployee[0].email}</h5>
            <h6>{date.toGMTString()}</h6>

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

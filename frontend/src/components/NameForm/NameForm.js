import React from 'react'
import "../NameForm/NameForm.css"
import { Link } from "react-router-dom";

class NameForm extends React.Component {
    constructor(props)
    {
        super(props);
        this.state = {value: 'Please enter you name'};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event)
    {
        this.setState({value: event.target.value});
        
    }

    handleSubmit(event)
    {
        event.preventDefault();
    }

    render()
    {
        return (
          <div class="name_form">
          <form onSubmit={this.handleSubmit}>
            <div class="name_form-input">
        <input id="name" class="form-element-input" onChange={this.handleChange} type="input" placeholder={this.state.value} required/>
        <div class="form-element-bar"></div>
        <label class="form-element-label" for="name">Name</label>
        <small class="form-element-hint">beautiful name</small>
        </div>
        <Link to={"/"} style={{ textDecoration: "none" }}>
            <input type="Submit" value="Submit" class="Submit_button"/>
        </Link>
            </form>
            </div>
        );
    }
}

export default NameForm
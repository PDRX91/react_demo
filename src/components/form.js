import React, {Component} from 'react';

class Form extends Component{
    constructor(props){
        super(props);
        this.state ={
            form:{
                email: '',
                password: ''
            } 
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    handleInputChange(event){
        const {name,value} = event.target;

        this.setState({
            form:{
                ...this.state.form, // equivalent--> email: this.state.form.email, password: this.state.form.password
                [name]: value
            }
            //longer version without destructuring above
            // [event.target.name]:event.target.value
            
        })
    }

    handleFormSubmit(event){
        event.preventDefault();
        console.log('submitting form...', this.state);
    }

    render(){
        const formStyle = {
            fontSize: '24px'
        }

        const {email, password} = this.state.form;

        return(
            <form onSubmit={this.handleFormSubmit}>
                <h1>I'm a form!</h1>
                <div>
                    <label>Email</label>
                    <br/>
                    <input style={formStyle} type="text" value={email} onChange={this.handleInputChange} name="email"/>
                </div>
                <div>
                    <label>Password</label>
                    <br/>
                    <input style={formStyle} type="password" value={password} onChange={this.handleInputChange} name="password"/>
                </div>
                <button>Login</button>
            </form>
        )
    }
}

export default Form;
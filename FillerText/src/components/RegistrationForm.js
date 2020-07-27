import React from 'react';
class RegistrationForm extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            pwd: ''
        };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange(event) {
        this.setState({
            [event.target.id]: event.target.value
        });
      }
    
      handleSubmit(event) {
        console.log(`A username [${this.state.name}] was submitted with pwd [${this.state.pwd}]`);
        event.preventDefault();
      }
    
    render(){
        return(
            <form onSubmit={this.handleSubmit}>
            <label>
              Name:
              <input id="name" type="text"    value={this.state.name} onChange={this.handleChange} />
            </label>
            <label>
            Password:
              <input id="pwd" type="password" value={this.state.pwd} onChange={this.handleChange} />
            </label>
            <input type="submit" value="Submit"  />
          </form>


        )
    }
}
export default RegistrationForm;
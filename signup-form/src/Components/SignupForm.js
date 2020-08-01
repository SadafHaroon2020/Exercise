import React from 'react';

class SignupForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isSubmitted : false,
            userName: '',
            password: '',
            age: '',
            gender: '',

        };
        this.handleChange = this.handleChange.bind(this);

        this.handleSubmit = this.handleSubmit.bind(this);

    }
    handleChange = (event) => {
        this.setState({
          
            [event.target.id]: event.target.value
        })
    }

    handleSubmit = (event) => {
        // alert('User name  :' + this.state.userName + " Password : " + this.state.password + " Age :" + this.state.age + "gender" + this.state.gender);
        this.setState({
            isSubmitted: true
          });
        event.preventDefault();
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <h1>Signup Page </h1>
                <ul className="flex-outer">
                    <li>
                        <label>User Name : </label>
                        <input id="userName" type='text' value=
                            {this.state.userName} onChange=
                            {this.handleChange} />
                    </li>
                    <br/><br/>
                    <li>
                        <label>Password :</label>
                        <input id="password" type='password' value=
                            {this.state.password} onChange=
                            {this.handleChange} />
                    </li>
                    <br /><br />
                    <li>
                        <label>Age :</label>
                        <input id="age" type='text' value=
                            {this.state.age} onChange=
                            {this.handleChange} />
                    </li>
                    <br /><br />

                    <label className="gen">Gender :</label>
                    <li>
                   
                    <br /><br /><input id="gender" type="radio" value="male" name="gender" onChange={this.handleChange}
                            checked={this.state.gender === "male"} /> Male
                 </li>
                    <li>
                        <input id="gender" type="radio" value="female" name="gender" onChange={this.handleChange}
                            checked={this.state.gender === "female"} /> Female
                </li>
                    <input id="button" type="submit" value="Submit" />
                </ul>

                {this.state.isSubmitted &&<p>A username "{this.state.userName}" was submitted with password, "{this.state.password}"
                age, "{this.state.age}" and gender "{this.state.gender}"</p>
    }
            </form>
        )
    }
}
export default SignupForm;
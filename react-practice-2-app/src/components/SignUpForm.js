import React, { Component } from 'react';
import SignUpForm1 from './SignUpForm1';
import FormPreview from './FormPreview';

class SignUpForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      username: '',
      password: '',
      firstName: '',
      lastName: '',
      country: '',
      education: '',
      step: 1
    }
  }

  handleEmailChange = (e) => {
    this.setState({
      email: e.target.value
    })
  }

  handleUsernameChange = (e) => {
    this.setState({
      username: e.target.value
    })
  }

  handlePasswordChange = (e) => {
    this.setState({
      password: e.target.value
    })
  }

  handleSubmit1 = (e) => {
    this.setState({
      step: 2
    })
  }

  handleFirstNameChange = (e) => {
    this.setState({
      firstName: e.target.value
    })
  }

  handleLastNameChange = (e) => {
    this.setState({
      lastName: e.target.value
    })
  }

  handleCountryChange = (e) => {
    this.setState({
      country: e.target.value
    })
  }

  handleEducationChange = (e) => {
    this.setState({
      education: e.target.value
    })
  }

  handleSubmit2 = (e) => {
    this.setState({
      step: 3
    })
  }

  handleSubmit3 = (e) => {
    this.setState({
      step: 4
    })
  }

  handleSubmitBack1 = (e) => {
    this.setState({
      step: 1
    })
  }

  handleSubmitBack2 = (e) => {
    this.setState({
      step: 2
    })
  }

  backHomePage = (e) => {
    this.setState({
      step: 1,
      email: '',
      username: '',
      password: '',
      firstName: '',
      lastName: '',
      country: '',
      education: ''
    })
  }

  render() {

    return (
      <div>
        {
          this.state.step == 1
          &&
          <form action="" className="form" onSubmit={this.handleSubmit1}>
            <h4>Sign up</h4>
            <input type="email" value={this.state.email} placeholder="Email Address" onChange={this.handleEmailChange} />
            <input type="text" value={this.state.username} placeholder="Username" onChange={this.handleUsernameChange} />
            <input type="password" value={this.state.password} placeholder="Password" onChange={this.handlePasswordChange} />
            <button type='submit'>NEXT</button>
          </form>
        }

        {
          this.state.step == 2
          &&
          <form action="" className="form" onSubmit={this.handleSubmit2} >
            <h4>Sign up</h4>
            <input type="text" value={this.state.firstName} id='first_name' placeholder="First Name" onChange={this.handleFirstNameChange} />
            <input type="text" value={this.state.lastName} id='last_name' placeholder="Last Name" onChange={this.handleLastNameChange} />
            <input type="text" value={this.state.country} placeholder="Country of Residence" onChange={this.handleCountryChange} />
            <input type="text" value={this.state.education} placeholder="Level of Education" onChange={this.handleEducationChange} />
            <div className="btn-group">
              <button onClick={this.handleSubmitBack1}>PREVIOUS</button>
              <button type='submit' className='margin-left'>NEXT</button>
            </div>
          </form>
        }

        {
          this.state.step == 3
          &&
          <div className="result">
            <label htmlFor="email">Email</label>
            <div id='email'>{this.state.email}</div>
            <label htmlFor="username">Username</label>
            <div id="username">{this.state.username}</div>
            <label htmlFor="first_name">First Name</label>
            <div id="first_name">{this.state.firstName}</div>
            <label htmlFor="last_name">Last Name</label>
            <div id="last_name">{this.state.lastName}</div>
            <label htmlFor="country">Country of Residence</label>
            <div id="country">{this.state.country}</div>
            <label htmlFor="">Level of Education</label>
            <div id="education">{this.state.education}</div>
            <div className="btn-group">
              <button onClick={this.handleSubmitBack2}>PREVIOUS</button>
              <button type='submit' onClick={this.handleSubmit3} className='margin-left'>CONFIRM & CONTINUE</button>
            </div>
          </div>
        }

        {
          this.state.step == 4
          &&
          <div className="final-result">
            <h1>Thank you for your submision</h1>
            <button onClick={this.backHomePage} >Reset</button>
          </div>
        }
      </div>
    )
  }
}

export default SignUpForm

import React, { Component } from 'react'

class SignUpForm1 extends Component {
  render() {
    return (
      <div>
        <form action="" className="form">
          <h4>Sign up</h4>
          <input type="text" id='first_name' placeholder="First Name" />
          <input type="text" id='last_name' placeholder="Last Name" />
          <input type="text" placeholder="Country of Residence" />
          <input type="text" placeholder="Level of Education" />
          <div className="btn-group">
            <button>PREVIOUS</button>
            <button className='margin-left'>NEXT</button>
          </div>
        </form>
      </div>
    )
  }
}

export default SignUpForm1

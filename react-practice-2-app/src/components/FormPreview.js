import React, { Component } from 'react'

class FormPreview extends Component {
  render() {
    return (
      <div>
        <form action="" className="form form-preview">
          <label htmlFor="email">Email</label>
          <input type="email" placeholder="Email" />
          <label htmlFor="username">Username</label>
          <input type="text" placeholder="Username" />
          <label htmlFor="first_name">First Name</label>
          <input type="text" id='first_name' placeholder="First Name" />
          <label htmlFor="last_name">Last Name</label>
          <input type="text" id='last_name' placeholder="Last Name" />
          <label htmlFor="country">Country of Residence</label>
          <input type="text" placeholder='Country of Residence' />
          <label htmlFor="">Level of Education</label>
          <input type="text" placeholder="Level of Education" />
          <div className="btn-group">
            <button>PREVIOUS</button>
            <button className='margin-left'>CONFIRM & CONTINUE</button>
          </div>
        </form>
      </div>
    )
  }
}

export default FormPreview

import React, { Component } from 'react'

export class Classtate1 extends Component {
  constructor(){
    super();
    this.state={
      name:" ",
      email:" ",
      password:" "
    }
  }
  render() {
    let {nameClass,mailClass,passClass} = this.props;
    let namChange = (event) => {
      this.setState({name:event.target.value});
    }
    // let Change = (event) => {
    //   this.setState({name:event.target.value});
    // }
    let passChange = (event) => {
      this.setState({password:event.target.value});
    }
    let submitkbutton = () => {
      console.log(this.state.name);
      console.log(this.state.email);
      console.log(this.state.password);
    }
    let cleabutton = () => {
      this.setState.name("");
      this.setState.email("");
      this.setState.password("");
    }
    return (
      <div>
        <h3>Now this is time to make form from class</h3>
        <label>Name:-</label><input type="text"  value={nameClass} onChange={namChange}/><br/>
        <label>Email:-</label><input type="Email" value={mailClass} onChange={(e)=>this.setState({email:e.target.value})}/><br/>
        <label>Password:-</label><input type="password" value={passClass} onChange={passChange}/><br/>
        <button className='btn btn-danger' onClick={submitkbutton}>Submit</button>
        <button className='btn btn-danger' onClick={cleabutton}>Clear</button>

      </div>
    )
  }
}

export default Classtate1
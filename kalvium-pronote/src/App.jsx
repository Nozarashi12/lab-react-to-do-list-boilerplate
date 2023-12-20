import React, { Component } from 'react'
import "./App.css"
export default class App extends Component {
  constructor(props) {
    super(props)
    this .state={
      inp:"",
      input:[]
    }
     this .change_inp=this.change_inp.bind(this)
  }

  change_inp(e){
    this.setState(()=>{
      return {
        inp: e.target.value,
        input:this.state.input
      }
    })
  }
   create=()=>{
    if(this.state.inp == ""){
    return 
    }
    let oldval = this.state.inp
    let oldinp =this.state.input.slice()
    oldinp.push(oldval)
    this.setState(()=>{
      return{
        inp:"",
        input:oldinp
      }
    })
   }
    update=(e,ind)=>{
      let oldiarray =[...this.state.input]
      oldiarray[ind] = e.target.value 
      this.setState(()=>{
        return{
          inp:"",
          input:oldiarray
        }
      })
    }
    delete = (ind) => {
      let oldiarray = [...this.state.input];
      oldiarray.splice(ind, 1);
      this.setState(() => {
        return {
          input: oldiarray,
       };
      });
    };
  render() {
    return (
      <>
        <input type="text" placeholder='Type here' value ={this.state.inp} onChange={this.change_inp}></input>
        <button onClick={this.create}>Add item</button>
        <br/>
        {this.state.inp}
        <br/>
        {
          this.state.input && this.state.input.map((item,ind)=>{
            return(
              <>
              <input type="text" value={item} onChange={(e)=>this.update(e,ind)}/>
              <button onClick={()=>this.delete(ind)}>delete</button>
              <br/>
              </>
            )
          })
        }
      </>
    )
  }
}

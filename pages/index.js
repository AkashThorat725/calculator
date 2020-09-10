import { Component } from "react";

export default class Hello extends Component {
  constructor() {
    super();
    this.state = {
      input1: null,
      result: 0,
    };
    this.isChange = this.isChange.bind(this);
    this.calculator = this.calculator.bind(this);
    this.add = this.add.bind(this);
    this.sub = this.sub.bind(this);
    this.mul = this.mul.bind(this);
    this.divide = this.divide.bind(this);
  }

  isChange(event) {
    this.setState({
      input1: event.target.value, 
    });
    console.log(event.target.value);
  }

  add() {
    this.setState({
      input1: this.state.input1 + "+",
    });
  }
  sub() {
    this.setState({
      input1: this.state.input1 + "-",
    });
  }
  mul() {
    this.setState({
      input1: this.state.input1 + "*",
    });
  }
  divide() {
    this.setState({
      input1: this.state.input1 + "/",
    });
  }
  calculator(operator){
    console.log(this.state.input1)
    var a=this.state.input1;
  if(a.includes("+")){
    var sum=this.state.input1.split("+");
    var result=parseInt(sum[0])+parseInt(sum[1]);
    this.setState({input1:result})
  }
  else if(a.includes("-")){
    var sum=this.state.input1.split("-");
    var result=parseInt(sum[0])-parseInt(sum[1]);
    this.setState({input1:result})
  }
  else if(a.includes("*")){
    var sum=this.state.input1.split("*");
    var result=parseInt(sum[0])*parseInt(sum[1]);
    this.setState({input1:result})
  }
  else if(a.includes("/")){
    var sum=this.state.input1.split("/");
    var result=parseInt(sum[0])/ parseInt(sum[1]);
    this.setState({input1:result})
  }
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <input
              className="form-control"
              name="input1"
              placeholder="Input 1"
              value={this.state.input1}
              onChange={this.isChange}/>
          </div>
        </div>
        <br />
        <button className="btn btn-primary" onClick={this.add}>  + </button>
        <button className="btn btn-primary" onClick={this.sub}>  - </button>
        <button className="btn btn-primary" onClick={this.mul}>  * </button>
        <button className="btn btn-primary" onClick={this.divide}>  / </button>
        <button className="btn btn-primary" onClick={this.calculator}>  = </button>
        <br/>
      
        {this.state.result != 0 ? <div>{this.state.result}</div> : ""}
      </div>
    );
  }
}
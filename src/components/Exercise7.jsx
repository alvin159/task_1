import React from "react";
import '../App.css';

class exercise7 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {first: "", last: ""};

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    alert('Hello ' + this.state.first + ' '+ this.state.last);
    event.preventDefault();
  }

  render() {
    return (
      <form className="exercise7" onSubmit={this.handleSubmit}>
        <label>
          First name: 
          <input className="input" type="text" value={this.state.first} onChange={e => this.setState({first : e.target.value})} placeholder = "First name"/>
        </label>
        <label>
          Last name: 
          <input className="input" type="text" value={this.state.last} onChange={e => this.setState({last : e.target.value})} placeholder = "Last name"/>
        </label>
        <input className="btn2" type="submit" value="Greet Me" />
      </form>
    );
  }
}

export default exercise7;

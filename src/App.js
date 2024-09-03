import React,{Component} from "react";

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      email: '',
      senha: ''
    }
    this.trocssaEmail = this.trocaEmail.bind(this);
  }

  trocaEmail(e){
    let valorDigitado = e.target.value;
    this.setState({email: valorDigitado});
  }

  render(){
    return(
      <div>
        <h2>Login</h2>
        Email:
        <input type="email" name="email" value={this.state.email} onChange={this.trocaEmail}></input><br/>
        Senha:
        <input type="text" name="senha" value={this.state.senha} onChange={(e) => this.setState({senha: e.target.value})}></input><br/>
        <div>
          <h3>{this.state.email}</h3>
          <h3>{this.state.senha}</h3>
        </div>
      </div>
      
    )
  }
}
export default App;
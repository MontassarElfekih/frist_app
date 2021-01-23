import React from "react";
const styles = {
    outer: {
      borderRadius: 5,
      boxShadow: "0 10px 30px #BBB",
      padding: 10,
    },
  };

class Formulaire extends React.Component {
   

    constructor(props) {
        super(props);
        this.state = {name: '', prenom: '', adresse: '',majeur: false};

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleSubmit(event) {
        console.log(this.state.value);
        const aa = this.state.majeur== true ? " Majeur": " Mineur";
        alert('Le nom a été soumis : ' + this.state.name +" "+this.state.prenom+ " "+ aa);
        event.preventDefault();
      }

    handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    
    var partialState = {};
    partialState[name] = value;
    this.setState(partialState);
    console.log(this.state);
    }

  render() {
  return(
    <div className="contentF">
    <div style={styles.outer}>
      <h2>Register</h2>
      <form onSubmit={this.handleSubmit}>
        <label>
            Nom :
            <input type="text" name ="name"  onChange={this.handleInputChange} />
        </label><br></br>
        <label>
        Prenom :
            <input type="text" name ="prenom" onChange={this.handleInputChange} />
        </label><br></br>
        <label>
        Adresse :
            <input type="text" name ="adresse"  onChange={this.handleInputChange}  />
        </label><br></br>
        <label>
          Majeur +18 :
          <input
            name="majeur"
            type="checkbox"
            onChange={this.handleInputChange} />
        </label><br></br>
        <button type="submit" class="btn-primary" style={{marginLeft:'20 em'}} >Envoyer </button>
    </form>
    
        <h3>Vous etes {this.state.name} {this.state.prenom}</h3> 
        <h4>Vous etes{this.state.majeur == true ? " Majeur": " Mineur"} </h4> 
    
    </div>
    </div>
    
  )
}
}

export default Formulaire;
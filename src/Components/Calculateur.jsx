import React, {Component} from "react";

class Calculateur extends Component{

    state = {
        nombre1: 0,
        nombre2: 0,
        resultat : 0
    }

    additionne = () => {
        this.setState(() => ({
            resultat: this.state.nombre1 + this.state.nombre2
        }));
    }

    mettreAJourNombre1 = (e) => {
        this.setState(() => ({
            nombre1: Number(e.target.value)
        }));
    }

    mettreAJourNombre2 = (e) => {
        this.setState(() => ({
            nombre2: Number(e.target.value)
        }));
    }


    render(){
        return(        
            <div>
            <p>{"Nombre 1 :"}</p>
            <input onChange={this.mettreAJourNombre1}></input>
            <p>{"Nombre 2 :"}</p>
            <input onChange={this.mettreAJourNombre2}></input>
            <br></br>
            <button onClick={this.additionne}>Additionner</button>
            <p>{"Résultat : " + this.state.resultat}</p>
        </div>
        )
    }
}

export default Calculateur;
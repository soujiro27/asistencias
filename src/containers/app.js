import React, { Component } from 'react';
import Login from '../components/Login/Login';
import Sigin from '../components/Sigin/Sigin';
import img_login from '../static/img/login.jpg';
import './app.css';



class App extends Component {

    state = {
        login:true,
        sigin:false,
    }

    getForm = e => {
        if(this.state.login){
            return <Login  />
        } else if(this.state.sigin){
            return <Sigin  />
        }
    }

   
    handleLogin = e =>{
        e.preventDefault();
        this.setState({login:true, sigin:false})
    }

    handleSigin = e =>{
        e.preventDefault();
        this.setState({login:false, sigin:true})
    }


    render(){
       
        return(
            <div className="app__container" >
                <img className="app__image" src={img_login} alt="img login" />
                <div className="form__container">
                    <div className="tab__container">
                        <div className="tab__login" onClick={this.handleLogin}>Login</div>
                        <div className="tab__sigin" onClick={this.handleSigin}>Sigin</div>
                    </div>
                    <p>Bienvenido al Sistema de Asistencias</p>
                    {this.getForm()}
                   
                </div>
            </div>
        )
    }
}


export default App;



import React from 'react'

const Login = props => (
    <div className="login__container">
        <p>Ya tienes cuenta Logueate</p>
        <p>Imagen Logo</p>
        <form className="login__form">
            <input type="email" inputMode="email" placeholder="Correo Electronico" maxLength="5" />
            <input type="password" inputMode="text" placeholder="Contraseña" maxLength="3" />
            <input type="submit" value="Loguearse" />
        </form>
    </div>
);

export default Login;
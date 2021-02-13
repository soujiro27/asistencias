import React from 'react'
import {connect} from 'react-redux';
import {set_field_sigin, set_field_submit } from '../../actions/sigin';

const Sigin = props =>(
    <div className="sigin__container">
        <p>Aun NO tienes cuenta Registrate</p>
        <p>Imagen Logo</p>
        <div className="sigin__div" >
            <input type="email" inputMode="email" placeholder="Email" name="email" maxLength="20"    onChange={props.set_field_sigin}   />
            <input type="text" inputMode="text" placeholder="Nombre" name="nombre" maxLength="45" onChange={props.set_field_sigin}  />
            <input type="password" inputMode="text" placeholder="Contraseña" name="password" maxLength="10" onChange={props.set_field_sigin}   />
            <p>{props.error_form}</p>
            <button onClick={props.set_field_submit}>Registrarse</button>
        </div>
    </div>
);

 const mapStateToProps = ({app}) => app;
 const actionCreator = {
    set_field_sigin,
    set_field_submit
 }

export default connect(mapStateToProps,actionCreator)(Sigin);
import {SET_FIELD_SIGIN, FIELD_ERROR,FIELD_SIGIN_SUBMIT} from '../types/loginTypes';
import Validate from '../utils/Validate'

export const set_field_sigin = (data) =>(dispatch) =>{
    
        let field_name = data.target.name;
        let field_value = data.target.value;

        dispatch({
            type:SET_FIELD_SIGIN,
            payload:{
                name:field_name, 
                value:field_value,
            }
        })
        
}

export const set_field_submit = e =>  (dispatch, getState) =>{
    e.preventDefault();
    const validate = new Validate();
    let state = getState();
    let validate_sigin = validate.sigin(state.app.siginForm);

    if(validate_sigin.status){


    } else{
        dispatch({
            type:FIELD_ERROR,
            payload:validate_sigin.messagge
        })
    }
}

export const new_user = response =>  (dispatchEvent, getState) =>{
        console.log('todo esta bien ', response)
}

/*

l

        */
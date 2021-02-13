import {SET_FIELD_SIGIN, FIELD_ERROR,FIELD_SIGIN_SUBMIT} from '../types/loginTypes'

const intialState = {
    loginForm:{
        user:'',
        password:''
    },
    siginForm:{
        email:'',
        nombre:'',
        password:'',
       
    }
};

export default function app(state = intialState, action){
    switch(action.type){
        case SET_FIELD_SIGIN:
            return{
                siginForm:{
                    ...state.siginForm,
                    [action.payload.name]:action.payload.value
                },
                error_form:action.payload.error_form
            }

        case FIELD_ERROR:
            return{
                ...state,
                error_form:action.payload
            }
        case FIELD_SIGIN_SUBMIT:
            return{
                siginForm:{
                    ...state.siginForm,
                 submit:action.payload.field_submit   
                }

            }
        default:
            return state;
    }
}
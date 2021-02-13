import validator from 'validator';

class Validate {

    sigin({nombre,email,password}){
        
        
        let nombre_empty = validator.isEmpty(nombre);
        let email_empty = validator.isEmpty(email);
        let pass_empty = validator.isEmpty(password);
        let expresion = /^[A-Za-z\s]+$/g
        
        if(nombre_empty || email_empty || pass_empty){
            return {
                status:false,
                messagge:'Uno o mas campos se encuentran Vacios'
            }
        }

        if(!nombre.match(expresion)){
            
            return {
                status:false,
                messagge:'El campo Nombre tiene Valores no permitidos'
            }
        }

        if(!validator.isEmail(email)){
            return {
                status:false,
                messagge:'El campo Email no es un correo Electronico'
            }
        }

        return  {
            status:true,
            messagge:'Estamos procesado tu peticion'
        }


    }

    
}

export default Validate
class Api {
    sigin(email,nombre,apellido,password){
        return fetch('http://192.168.64.2/app/server/sigin.php',{
            method:'POST',
            body:JSON.stringify({
                email,nombre,apellido,password
            })
        }).then(res => res.json())
    }
}

export default Api;
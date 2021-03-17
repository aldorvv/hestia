import React, {useState} from 'react';
import axios from 'axios';

function RegistrationForm(props) {

    const [state , setState] = useState({
        email : "",
        password : "",
        firstName : "",
        lastName : "",
        username: "",
        confirmPassword: "",
    })

    const handleChange = (e) => {
        const {id , value} = e.target   
        setState(prevState => ({
            ...prevState,
            [id] : value
        }))
    }

    const handleSubmitClick = (e) => {
        console.log(state.password, state.confirmPassword);
        e.preventDefault();
        if(state.password === state.confirmPassword) {
            sendDetailsToServer()    
        } else {
            props.showError('Passwords do not match');
        }
    };

    const redirectToHome = () => {
        props.updateTitle('Home')
        props.history.push('/');
    }

    const sendDetailsToServer = () => {
        if(state.email.length && state.password.length) {
            const payload={
                "first_name": state.firstName,
                "last_name": state.lastName,
                "username": state.username,
                "email": state.email,
                "password": state.password,
            }
            axios.post("http://localhost:8080/api/v1/users/", payload)
                .then(function (response) {
                    if(response.status === 200){
                        setState(prevState => ({
                            ...prevState,
                            'successMessage' : 'Usuario registrado'
                        }))
                        redirectToHome();
                        props.showError(null)
                    } else{
                        props.showError("algo salió mal");
                    }
                })
                .catch(function (error) {
                    console.log(error);
                });    
        } else {
            props.showError('Contraseña o usario inválido')    
        }
        
    }

    return(
        <div className="card col-12 col-lg-4 login-card mt-2 hv-center">
            <form>
                <div className="form-group text-left">
                <label htmlFor="firstName">Nombre</label>
                <input type="text" 
                       className="form-control" 
                       id="firstName" 
                       placeholder="Ingresa tu nombre"
                       value={state.firstName}
                       onChange={handleChange}
                />
                <label htmlFor="lastName">Apellido</label>
                <input type="text" 
                       className="form-control" 
                       id="lastName" 
                       placeholder="Ingresa tu apellido"
                       value={state.lastName}
                       onChange={handleChange}
                />
                <label htmlFor="usernameInput">Nombre de usuario</label>
                <input type="text" 
                       className="form-control" 
                       id="username" 
                       placeholder="Enter username"
                       value={state.username}
                       onChange={handleChange}
                />
                <label htmlFor="exampleInputEmail1">Email</label>
                <input type="email" 
                       className="form-control" 
                       id="email" 
                       aria-describedby="emailHelp" 
                       placeholder="Enter email"
                       value={state.email}
                       onChange={handleChange}
                />
                <small id="emailHelp" className="form-text text-muted">Tu email no será compartido con nadie.</small>
                </div>
                <div className="form-group text-left">
                    <label htmlFor="exampleInputPassword1">Contraseña</label>
                    <input type="password" 
                        className="form-control" 
                        id="password" 
                        placeholder="Contraseña"
                        value={state.password}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group text-left">
                    <label htmlFor="exampleInputPassword1">Confirmar Contraseña</label>
                    <input type="password" 
                        className="form-control" 
                        id="confirmPassword" 
                        placeholder="Contraseña"
                        value={state.confirmPassword}
                        onChange={handleChange}
                    />
                </div>
                <button type="submit" className="btn btn-primary" onClick={handleSubmitClick}>
                    Register
                </button>
            </form>
        </div>
    );
}

export default RegistrationForm;
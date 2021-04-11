import React, {useState} from 'react';
import Instance from '../Services/Services';

function RegistrationForm(props) {

    const [state , setState] = useState({
        email : "",
        password : "",
        username: "",
        confirmPassword: "",
    })

    const handleChange = (e) => {
        const { id , value } = e.target
        setState(prevState => ({
            ...prevState,
            [id] : value
        }))
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();
        if(state.password === state.confirmPassword) {
            sendDetailsToServer()    
        } else {
            props.showError('Las contraseñas no coinciden');
        }
    };

    const redirectToHome = () => {
        props.history.push('/');
    }

    const sendDetailsToServer = () => {
        if(state.email.length && state.password.length) {
            let payload = {
                "username": state.username,
                "name": state.name,
                "email": state.email,
                "password": state.password,
            }
            Instance.post("/users", payload)
                .then(function (response) {
                    if (response.status === 201) {
                        setState(prevState => ({
                            ...prevState,
                            'successMessage' : 'Usuario registrado'
                        }))
                        redirectToHome();
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
        <div className='h-screen flex bg-gray-bg1'>
            <div className='w-full max-w-md m-auto bg-white rounded-lg border border-primaryBorder shadow-default py-10 px-16'>
                <h1 className='text-2xl font-medium text-primary mt-4 mb-12 text-center'>
                    ¡Regístrate!
                </h1>

                <form onSubmit={handleFormSubmit}>
                    <div>
                        <label htmlFor='name'>Nombre(s)</label>
                        <input
                            type='text'
                            className={`w-full p-2 border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                            id='name'
                            value={state.name}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label htmlFor='email'>Correo Electrónico</label>
                        <input
                            type='email'
                            className={`w-full p-2 border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                            id='email'
                            placeholder='me@example.com'
                            value={state.email}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label htmlFor='username'>Usuario</label>
                        <input
                            type='text'
                            className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                            id='username'
                            placeholder='Nombre de usuario'
                            value={state.username}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label htmlFor='password'>Contraseña</label>
                        <input
                            type='password'
                            className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                            id='password'
                            placeholder='Contraseña'
                            value={state.password}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label htmlFor='password-confirm'>Confirmar contraseña</label>
                        <input
                            type='password'
                            className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                            id='confirmPassword'
                            placeholder='Confirmar contraseña'
                            value={state.confirmPassword}
                            onChange={handleChange}
                        />
                    </div>

                    <div className='flex justify-center items-center mt-6'>
                        <button
                            className={`bg-green py-2 px-4 text-sm text-white rounded border border-green focus:outline-none focus:bg-green-dark hover:bg-green-dark`}
                            type="submit"
                        >
                            Enviar
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default RegistrationForm;
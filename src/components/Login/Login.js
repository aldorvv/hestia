import React from 'react';
import Instance from '../Services/Services';

const Login = () => {

    const sendDetailsToServer = (username, password) => {
        console.log(password);
        const payload = {
            "username": username,
            "password": password
        }

        Instance.post("/login", payload)
             .then(response => {
                 let token = response.data.token;
                console.log(token);
             })
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();

        let username = e.target.elements.username?.value;
        let password = e.target.elements.password?.value;

        sendDetailsToServer(username, password);
    };

    return (
        <div className='h-screen flex bg-gray-bg1'>
            <div className='w-full max-w-md m-auto bg-white rounded-lg border border-primaryBorder shadow-default py-10 px-16'>
                <h1 className='text-2xl font-medium text-primary mt-4 mb-12 text-center'>
                    Inicia sesión 🔐
                </h1>

                <form onSubmit={handleFormSubmit}>
                    <div>
                        <label htmlFor='email'>Nombre de usuario</label>
                        <input
                            type='text'
                            className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                            id='username'
                            placeholder='Tu usuario'
                        />
                    </div>
                    <div>
                        <label htmlFor='password'>Contraseña</label>
                        <input
                            type='password'
                            className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                            id='password'
                            placeholder='Tu contraseña'
                        />
                    </div>

                    <div className='flex justify-center items-center mt-6'>
                        <button
                            className={`bg-green py-2 px-4 text-sm text-white rounded border border-green focus:outline-none focus:border-green-dark`}
                            type="submit"
                        >
                            Enviar
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;

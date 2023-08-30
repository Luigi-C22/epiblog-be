import React, { useState } from 'react';
import  axios  from 'axios';


const Login = () => {

    const [loginFormData, setLoginFormData] = useState({});

    const onSubmit = async (e) => {
        e.preventDefault();

        await axios
            .post("http://localhost:5050/login", loginFormData)
            .then((res) => console.log(res));
                //ocalStorage.setItem('userLoggedIn', JSON.stringify(res.token))
    };
    return (
        <div className="flex flex-col justify-center items-center">
            <form
                onSubmit={onSubmit}
                className='flex flex-col gap-3 justify-center items-center'
            >
                <input
                    className="p-2 bg-zinc-100 text-black rounded"
                    type="email"
                    name='email'
                    onChange={(e) => setLoginFormData({
                        ...loginFormData,
                        email: e.target.value,
                    })}
                />

                <input
                    className="p-2 bg-zinc-100 text-black rounded"
                    type="password"
                    name='password'
                    onChange={(e) => setLoginFormData({
                        ...loginFormData,
                        password: e.target.value,
                    })
                    }
                />
                <button type='submit'>Login</button>
            </form>

        </div>
    );
}

export default Login;
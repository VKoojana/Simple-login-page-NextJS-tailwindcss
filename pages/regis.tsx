
import React, { useState } from "react";

const SignupForm = () => {

    const[username,setUserName] = useState('');
    const[email,setEmail] = useState('');
    const[password,setPassword] = useState('');

    const handleUserName = (event:React.ChangeEvent<HTMLInputElement>) => {
        setUserName(event.target.value);
    };

    const handlePassword = (event:React.ChangeEvent<HTMLInputElement>) => {
     setPassword(event.target.value);
    };

    const handleEmail = (event:React.ChangeEvent<HTMLInputElement>)  => {
        setEmail(event.target.value);
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
    
        if (!username || !email || !password) {
          alert('Please fill out all the fields.');
          return;
        }
        alert('User registered successfully!');
        
    };
  

    return (
        <form onSubmit={handleSubmit}>
            <div className="bg-white rounded-2xl shadow-2xl p-5">
                < div className="container mx-auto bg-green-500  flex justify-center mb-3">
                    <p>Please fill details</p>
                </div>
                <div className="text-black  font-sans text-sm ">
                <label htmlFor="username" className="block font-bold text-sm ">   
                   Username:
                   </label>
                    <input type= "username"
                    className="mt-1 px-2 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1 placeholder= Username"
                    id="username"
                    value={username}
                    onChange={handleUserName}
                    />
                </div>
                <div className="text-black  font-sans text-sm ">
                <label htmlFor="email" className="block font-bold text-sm ">   
                   Email:
                   </label>
                    <input type= "email"
                    className="mt-1 px-2 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1 placeholder= Username"
                    id="password"
                    value={email}
                    onChange={handleEmail}
                    />
                </div>
                <div className="text-black  font-sans text-sm ">
                <label htmlFor="password" className="block font-bold text-sm ">   
                   Password:
                   </label>
                    <input type= "password"
                    className="mt-1 px-2 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1 placeholder= Username mb-2"
                    id="password"
                    value={password}
                    onChange={handlePassword}
                    />
                </div>
                <button type="submit" className='text-sm rounded  text-green-500   hover:bg-gray-500   hover:text-green-500 font-semibold bg-white p-1 w-20 items-center justify-center'>Enter</button>
            </div>
        </form>

    );
};

export default SignupForm ;
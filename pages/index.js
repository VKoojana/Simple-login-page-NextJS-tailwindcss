import Cookies from "js-cookie";
import { useRouter } from "next/router";


export default function Home() {
  
  const router = useRouter();

  const logIn = (e) => {
    e.preventDefault();

    const username = e.target.elements.username.value;
    Cookies.set("username", username);
    Cookies.set("loggedin", "true");
    router.push("/dashboard");
  };

  const handleSignUp =() => {
    router.push('/regis')
  }


  return (
        <form onSubmit={(e) => logIn(e)}>
         <div className="flex justify-center">
          <div className="bg-white rounded-2xl shadow-2xl p-5">
           <div className="bg-green-400 rounded p-40 text-white text-center items-center justify-center">
            <p className="mb-5 font-semibold text-3xl  ">Log into Account</p>
            <div className="mb-2">
            <label className="block font-bold text-sm mb-1" >
            Username:
          </label>
          <input type="text" placeholder="Username" id="username"required  className="mb-3 rounded text-black mt-1 px-2 py-2 bg-white border shadow-sm border-slate-300 "/>
          <label className="block font-bold text-sm mb-1" >
            Password:
          </label>
          <input type="password" placeholder="Password" required className="mb-3 rounded text-black  mt-1 px-2 py-2 bg-white border shadow-sm border-slate-300 " />
          <br></br>
          <button className=" text-sm rounded  text-green-500   hover:bg-gray-500   hover:text-green-500 font-semibold bg-white p-1 w-20 mb-2">Log In</button>
          <br />
      <label className="block font-bold text-sm mb-1" >
            Didn't sign up yet ? 
          </label>
      <a href="/regis" className='mb-5 flex align-bottom font-bold text-sm' onClick={handleSignUp}>Sign up </a>
             </div>
           </div>
         </div>
        </div>
      </form>
    
  );
}
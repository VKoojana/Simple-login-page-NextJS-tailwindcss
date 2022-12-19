import Cookies from "js-cookie";
import { useRouter } from "next/router";


const Dashboard = () => {
  const router = useRouter();

  const username = Cookies.get("username");

  const logOut = () => {
    Cookies.remove("loggedin");
    router.push('/')
  };
  
  return (
    
    <div className=" Dashboard bg-blue-500">
      <div className="flex justify-center">
        <div className="mt-5 text-white ">
        <p> Welcome {username}! </p>
      <br></br>
      </div>
     </div>
     
       <div className="flex justify-center">
       <button
          type="submit"
          onClick={() => logOut()}
          className = "text-sm rounded  text-black  hover:text-red-500 font-semibold bg-white p-1 mt-1 mb-10 "
        >
          Log Out
        </button>
       </div>
      </div> 
    
  );
};

export default Dashboard;
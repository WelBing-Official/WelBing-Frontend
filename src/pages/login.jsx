import AuthLayout from "../layouts/authlayout"
import { Link, useNavigate } from "react-router-dom"

export default function Login(){
    let nav = useNavigate();
    return (
        <AuthLayout page="login">
            <h1 className="text-mainBlue font-nunito text-3xl font-bold">
                Login
            </h1> <br /> <br />
            <label className="text-gray-500 font-lato mr-2 ">Email</label> <br />
            <input type="text" className="input font-nunito text-sm bg-white text-gray-800 focus:outline-none" /> <br /> <br />

            <label className="text-gray-500 font-lato mr-2 ">Password</label> <br />
            <input type="password" className="input font-nunito text-sm bg-white text-gray-800 focus:outline-none" /> <br />

            <div className="flex justify-between items-center p-2 w-4/5 m-auto">
                <div className="flex items-center">
                    <input type="checkbox" id="remember" className=" checkbox text-gray-400 checkbox-sm" />
                    <label htmlFor="remember" className="text-mainBlue ml-2 font-nunito text-sm">Save User</label>
                </div>

                <Link to="/login" className="text-mainBlue font-nunito text-sm">
                    Forgot Password
                </Link>
            </div> <br />

            <button 
            type="submit" 
            className="bg-secondColor text-white font-nunito btn w-4/5 m-auto border-0 no-animation hover:bg-secondColor"
            onClick={()=>{nav("/account")}}
            >
                Login Now
            </button>
        </AuthLayout>
    )
}
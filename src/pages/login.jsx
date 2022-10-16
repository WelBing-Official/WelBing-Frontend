import AuthLayout from "../layouts/authlayout"
import { Link, useNavigate } from "react-router-dom"
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"

export default function Login(){
    const categories = {
        "Patients Account": "basic",
        "Hospital/Government Bodies Account": "hospital",
        "Health Practitioner": "practitioner"
    };

    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [acctype, setAcctype] = useState("Patients Account");

    const loginUser = () =>{
        setLoading(!loading)
        if(email == "" || password == ""){
            toast.error("Fill in all fields", {
                draggable: false,
                position: toast.POSITION.TOP_RIGHT
            });
            setLoading(false);
        }
        else{
            fetch("https://welbing-waitlist.herokuapp.com/login", {
                method: 'POST',
                body: JSON.stringify({
                    'email': email,
                    "password": password,
                    'category': categories[`${acctype}`]
                })
            })
            .then(res=>res.json())
            .then((data)=>{
                let {resolved, message} = data;

                switch(message){
                    case 'Incorrect email or password':
                        toast.error("Incorrect Details", {
                            draggable: false,
                            position: toast.POSITION.TOP_RIGHT
                        });
                        break;
                    default:
                        toast.success("Login Successful", {
                            draggable: false,
                            position: toast.POSITION.TOP_RIGHT
                        })
                }
                setLoading(false);
            })
            .catch((err)=>{
                console.log(err);
                setLoading(false);
            })
        }
    }

    let nav = useNavigate();
    return (
        <AuthLayout page="login">
            <ToastContainer />
            <h1 className="text-mainBlue font-nunito text-3xl font-bold">
                Login
            </h1> <br /> <br />
            <select className="input bg-white font-nunito shadow-md focus:outline-none rounded-sm" onChange={(e)=>{setAcctype(e.target.value)}}>
                <option value="Patients Account">Patients Account</option>
                <option value="Hospital/Government Bodies Account">Hospital/Government Bodies Account</option>
                <option value="Health Practitioner">Health Practitioner</option>
            </select> <br />
            <label className="text-gray-500 font-lato mr-2 ">Email</label> <br />
            <input type="text" className="input font-nunito text-sm bg-white text-gray-800 focus:outline-none" onChange={(e)=>{setEmail(e.target.value)}} /> <br /> <br />

            <label className="text-gray-500 font-lato mr-2 ">Password</label> <br />
            <input type="password" className="input font-nunito text-sm bg-white text-gray-800 focus:outline-none" onChange={(e)=>{setPassword(e.target.value)}} /> <br />

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
            onClick={()=>{loginUser()}}
            >
                Login Now
            </button>
        </AuthLayout>
    )
}
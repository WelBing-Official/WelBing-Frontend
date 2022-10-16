import AuthLayout from "../layouts/authlayout"
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Signup(){
    const categories = {
        "Patients Account": "basic",
        "Hospital/Government Bodies Account": "hospital",
        "Health Practitioner": "practitioner"
    };

    const [loading, setLoading] = useState(false);
    const [typeacc, setType] = useState("Patients Account");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const signupUser = () =>{
        setLoading(!loading)
        if(name == "" || email == "" || password == ""){
            toast.error("Please Fill All Fields", {
                draggable: false,
                position: toast.POSITION.TOP_RIGHT
            })
            setLoading(false)
        }
        else{
            console.log(typeacc)
            fetch("https://welbing-waitlist.herokuapp.com/register", {
                method: 'POST',
                body: JSON.stringify({
                    'name': name,
                    'email': email,
                    'password': password,
                    'category': categories[`${typeacc}`]
                })
            })
            .then(res=>res.json())
            .then((data)=>{
                console.log(data)
                let {resolved, message, addon} = data;
                switch(message){
                    case 'Input error':
                        toast.error("Internal Server Error!!", {
                            draggable: false,
                            position: toast.POSITION.TOP_RIGHT
                        });
                        break;
                    case 'exists':
                        toast.error("This user already exists", {
                            draggable: false,
                            position: toast.POSITION.TOP_RIGHT
                        });
                        break;
                    case 'Server Error':
                        toast.error("Fatal Error!", {
                            draggable: false,
                            position: toast.POSITION.TOP_RIGHT
                        });
                        break;
                    default:
                        toast.success("Registered Successfully!", {
                            draggable: false,
                            position: toast.POSITION.TOP_RIGHT
                        })
                }
                setLoading(false)
            })
            .catch((err)=>{
                setLoading(false)
                console.log(err)
            })
        }
    }

    return (
        <AuthLayout page="signup">
            <ToastContainer />
            <h1 className="font-nunito text-3xl text-mainBlue font-bold">
                Register
            </h1> <br />
            <label className="font-lato text-sm text-gray-500 mr-2">
                Account Type
            </label> <br />
            <select className="input bg-white font-nunito shadow-md focus:outline-none rounded-sm" onChange={(e)=>{setType(e.target.value)}}>
                <option value="Patients Account">Patients Account</option>
                <option value="Hospital/Government Bodies Account">Hospital/Government Bodies Account</option>
                <option value="Health Practitioner">Health Practitioner</option>
            </select> <br />
            <label className="font-lato text-sm text-gray-500 mr-2">
                Full Name
            </label> <br />
            <input 
            type="text"
            className="input bg-white mb-3 focus:outline-none shadow-md rounded-sm text-sm text-gray-800 font-nunito" 
            onChange={(e)=>{setName(e.target.value)}}
            /> <br />
            <label className="font-lato text-sm text-gray-500 mr-2">
                Email
            </label> <br />
            <input 
            type="email"
            className="input bg-white mb-3 focus:outline-none shadow-md rounded-sm text-sm text-gray-800 font-nunito" 
            onChange={(e)=>{setEmail(e.target.value)}}
            /> <br />
            <label className="font-lato text-sm text-gray-500 mr-2">
                Password
            </label> <br />
            <input 
            type="password"
            className="input bg-white mb-3 focus:outline-none shadow-md rounded-sm text-sm text-gray-800 font-nunito" 
            onChange={(e)=>{setPassword(e.target.value)}}
            /> <br />
            <button type="submit" className="btn no-animation bg-secondColor text-white w-4/5 m-auto border-0 hover:bg-secondColor" onClick={()=>{signupUser()}}>
                {(loading)?"Please Wait" : "Register"}
            </button>
        </AuthLayout>
    )
}
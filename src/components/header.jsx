import Logo from "../assets/Logo.png"
import { Link } from "react-router-dom"

export default function Header(){
    return (
        <div className="py-4 lg:px-12 px-2 flex justify-between items-center">
            <Link to="/" className="w-40">
                <img src={Logo} alt="" className="object-cover object-center" />
            </Link>
            <Link 
            className="btn text-white hidden lg:flex rounded border-0 font-lato bg-mainBlue hover:bg-mainBlue outline-none active:outline-none"
            to="/signup"
            >
                Create An Account
            </Link>
        </div>
    )
}
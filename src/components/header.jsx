import Logo from "../assets/Logo.png"
import { Link } from "react-router-dom"

export default function Header(){
    return (
        <div className="py-4 px-12 flex justify-between items-center">
            <Link to="/" className="w-40">
                <img src={Logo} alt="" className="object-cover object-center" />
            </Link>
            <button 
            className="btn text-white rounded border-0 font-lato bg-mainBlue hover:bg-mainBlue outline-none"
            >
                Join Our Waitlist
            </button>
        </div>
    )
}
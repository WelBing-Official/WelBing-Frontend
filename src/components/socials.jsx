import { FaTwitter, FaFacebook, FaInstagramSquare } from "react-icons/fa"

export default function Socials(){
    return (
        <div className="p-4 bg-mainBlue flex items-center justify-center text-white">
            <i className="mx-4 text-xl"><FaTwitter /></i>
            <i className="mx-4 text-xl"><FaFacebook /></i>
            <i className="mx-4 text-xl"><FaInstagramSquare /></i>
        </div>
    )
}
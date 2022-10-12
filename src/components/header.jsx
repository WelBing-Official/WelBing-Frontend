import Logo from "../assets/Logo.png"

export default function Header(){
    return (
        <div className="py-4 px-12 flex justify-between items-center">
            <div className="w-40">
                <img src={Logo} alt="" className="object-cover object-center" />
            </div>
            <button 
            className="btn text-white rounded border-0 font-lato bg-mainBlue hover:bg-mainBlue outline-none"
            >
                Join The Waitlist
            </button>
        </div>
    )
}
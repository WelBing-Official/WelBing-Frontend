import Logo from "../assets/Logo.png"
import {BsGear} from "react-icons/bs"
import {AiOutlineArrowLeft} from "react-icons/ai"
import { Link } from "react-router-dom"

export default function AccountLayout(props) {
    return (
        <div className="drawer drawer-mobile">
            <input type="checkbox" className="drawer-toggle" id="my-drawer" />
            <div className="drawer-content">
                {props.children}
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer" className="drawer-overlay"></label>
                <ul className="menu p-4 relative overflow-y-auto w-80 bg-base-100 text-base-content">
                    <div className=" w-36"><img src={Logo} alt="" /></div> <br /> <br />
                    <Link to="/account" className="text-colorPurple btn btn-ghost no-animation flex flex-nowrap font-nunito font-bold justify-around items-center hover:bg-notwhite">
                        <i className="font-bold text-2xl"><BsGear /></i> Account Settings
                    </Link>
                    <button className=" bg-secondColor text-white absolute bottom-12 justify-around btn border-0 rounded-md w-4/5 no-animation hover:bg-secondColor">
                        <i className="text-xl text-white font-bold"><AiOutlineArrowLeft /></i> Dashboard
                    </button>
                </ul>
            </div>
        </div>
    )
}
import Doctor from "../assets/doctor.svg"
import {BsCheckCircleFill} from "react-icons/bs"
import { Link } from "react-router-dom"

export default function Intro(){
    return (
        <div className="lg:py-16 py-8 bg-topBg flex justify-center items-center h-fit slant shadow-topBg shadow-2xl">
            <div className="lg:w-1/2 lg:px-16 px-8 relative w-11/12">
                <div className="absolute rounded-full lg:p-20 p-14 -z-10 bg-aGreen opacity-30 -top-3 left-1"></div>
                <h1 className="lg:text-6xl lg:p-6 font-lato font-bold text-gray-800 text-4xl">
                    Serving Your Health Needs Is Our Priority
                </h1>
                <p className="text-sm lg:px-7 pb-3 pt-0 font-lato text-gray-600 lg:mt-0 mt-6">
                    WelBing is here to improve communication between health practitioners and patients.
                    Maybe you're in need of medical assistance or just health tips? You don't want to go all the way to the clinic?
                    WelBing solves this issue by bringing you even closer to your health personel(s)
                </p>
                <div className="relative lg:px-7 pb-16 pt-8">
                    <Link
                    to="/signup"
                    className="btn bg-mainBlue text-white rounded border-0 hover:bg-mainBlue shadow-shadowColor shadow-2xl lg:px-8 px-5"
                    >
                        Create An Account
                    </Link>
                    <div className="absolute border-t-2 border-b-2 border-t-colorPurple -z-10 opacity-70 border-b-colorPurple border-dashed py-4 lg:px-24 px-14 lg:top-16 top-14 left-24"></div>
                </div>
            </div>

            <div className="w-1/2 h-4/5 lg:flex justify-center items-center hidden">
                <div className="rounded-full border-dashed p-6 border-mainBlue border-2 flex justify-center items-center w-80 h-80 relative">
                    <div className="absolute top-1/4 -left-2 p-5 rounded-full bg-colorPurple"></div>
                    <div className="absolute top-32 left-72 z-10 w-14 h-14 flex justify-center items-center rounded-full bg-white">
                        <i className="text-green-600 text-5xl w-fit h-fit">
                            <BsCheckCircleFill />
                        </i>
                    </div>
                    <div className="rounded-full border-dashed border-mainBlue border-2 w-full h-full"></div>
                    <img src={Doctor} alt="" className="absolute -top-4 left-3 w-4/5" />
                    <div className="absolute top-72 font-nunito left-20 bg-white rounded text-gray-900 py-2 px-4 text-sm font-bold shadow-lg">
                        We Care About Your Health
                    </div>
                </div>
            </div>
        </div>
    )
}
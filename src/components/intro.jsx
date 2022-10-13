import Doctor from "../assets/doctor.svg"
import {BsCheckCircleFill} from "react-icons/bs"

export default function Intro(){
    return (
        <div className="py-16 bg-topBg flex justify-center items-center h-fit slant shadow-topBg shadow-2xl">
            <div className="w-1/2 px-16 relative">
            <div className="absolute rounded-full p-20 -z-10 bg-aGreen opacity-30 -top-3 left-1"></div>
                <h1 className="text-6xl p-6 font-lato font-bold text-gray-800">
                    Serving Your Health Needs Is Our Priority
                </h1>
                <p className=" text-sm px-7 pb-3 pt-0 font-lato text-gray-600">
                    WelBing is here to improve communication between health practitioners and patients.
                    Maybe you're in need of medical assistance or just health tips? You don't want to go all the way to the clinic?
                    WelBing solves this issue by bringing you even closer to your health personel(s)
                </p>
                <div className="relative px-7 pb-16 pt-8">
                    <button
                    className="btn bg-mainBlue text-white rounded border-0 hover:bg-mainBlue shadow-shadowColor shadow-2xl px-8"
                    >
                        Join Our Waitlist
                    </button>
                    <div className="absolute border-t-2 border-b-2 border-t-colorPurple -z-10 opacity-70 border-b-colorPurple border-dashed py-4 px-24 top-16 left-24"></div>
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
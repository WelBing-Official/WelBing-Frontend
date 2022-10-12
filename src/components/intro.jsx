import Doctor from "../assets/doctor.svg"
import {BsCheckCircleFill} from "react-icons/bs"

export default function Intro(){
    return (
        <div className="py-16 bg-topBg flex h-fit slant">
            <div className="w-1/2 px-16">
                <h1 className="text-6xl p-6 font-lato font-bold">
                    Serving Your Health Needs Is Our Priority
                </h1>
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
                    <div className="absolute top-72 font-nunito left-20 bg-white rounded text-black py-2 px-4 text-sm font-bold shadow-lg">
                        We Care About Your Health
                    </div>
                </div>
            </div>
        </div>
    )
}
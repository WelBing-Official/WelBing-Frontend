import {FaRegHospital} from "react-icons/fa"
import {VscEye} from "react-icons/vsc"
import {RiMessage2Line} from "react-icons/ri"
import {MdOutlinePrivacyTip, MdOutlineVerifiedUser} from "react-icons/md"
import {GiFlake} from "react-icons/gi"

export default function Expectations(){
    return (
        <div className="py-12 flex flex-col items-center px-9">
            <h1 
            className="font-bold text-gray-800 text-xl after:block after:w-3/5 after:bg-green-500 after:h-1 leading-9 font-lato"
            >
                WHAT TO EXPECT
            </h1>
            <br />
            <div className="flex justify-center items-center flex-wrap font-nunito">
                <div className=" w-72 bg-white p-4 mx-8 my-4 shadow-lg text-gray-800 rounded">
                    <i className="text-3xl text-mainBlue"><FaRegHospital /></i><br />
                    <h1 className="font-bold text-xl font-lato">Centralized Network For Hospitals</h1>
                    <p className=" text-sm mt-2">Creating a central server to eradicate time wastage in several hospitals across the nation; <span className="font-bold">introducing master hospital cards</span>.</p>
                </div>

                <div className=" w-72 bg-white p-4 mx-8 my-4 shadow-lg text-gray-800 rounded">
                    <i className="text-3xl text-mainBlue"><VscEye /></i><br />
                    <h1 className="font-bold text-xl font-lato">Patients Profile Trackers System</h1>
                    <p className=" text-sm mt-2">Enabling doctors see patients health information and keep track of health practices.</p>
                </div>

                <div className=" w-72 bg-white p-4 mx-8 my-4 shadow-lg text-gray-800 rounded">
                    <i className="text-3xl text-mainBlue"><RiMessage2Line /></i><br />
                    <h1 className="font-bold text-2xl font-lato">Improved Communication</h1>
                    <p className=" text-sm mt-2">Improving the communication between patients and doctors, inclusive of in-app chatting!</p>
                </div>

                <div className=" w-72 bg-white p-4 mx-8 my-4 shadow-lg text-gray-800 rounded">
                    <i className="text-3xl text-mainBlue"><MdOutlinePrivacyTip /></i><br />
                    <h1 className="font-bold text-2xl font-lato">Privacy Of Data</h1><br />
                    <p className=" text-sm my-4">Ensuring the privacy of all users, from doctors to patients.</p>
                </div>

                <div className=" w-72 bg-mainBlue text-white p-4 mx-8 my-4 shadow-lg rounded">
                    <i className="text-3xl text-green-500"><GiFlake /></i><br />
                    <h1 className="font-bold text-xl font-lato">Natural Health Occurence Prediction System</h1>
                    <p className=" text-sm my-2">Helping users track all of their natural health occurence (example ovulation in women).</p>
                </div>

                <div className=" w-72 bg-white p-4 mx-8 my-4 shadow-lg text-gray-800 rounded">
                    <i className="text-3xl text-mainBlue"><MdOutlineVerifiedUser /></i><br />
                    <h1 className="font-bold text-xl font-lato">Qualification Verification System</h1>
                    <p className=" text-sm my-6">Verifying that health practitioners are as qualified as claimed on our server.</p>
                </div>
            </div>
        </div>
    )
}
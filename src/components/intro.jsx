import Doctor from "../assets/doctor.svg"

export default function Intro(){
    return (
        <div className="py-16 bg-topBg flex h-fit slant">
            <div className="w-1/2 px-16">
                <h1 className="text-6xl p-6 font-nunito font-bold">
                    Serving Your Health Needs Is Our Priority
                </h1>
            </div>

            <div className="w-1/2 h-4/5 flex justify-center items-center">
                <div className="rounded-full border-dashed p-6 border-mainBlue border-2 flex justify-center items-center w-80 h-80 relative">
                    <div className="absolute top-1/4 -left-2 p-5 rounded-full bg-colorPurple"></div>
                    <div className="rounded-full border-dashed border-mainBlue border-2 w-full h-full"></div>
                    <img src={Doctor} alt="" className="absolute -top-9 -left-6" />
                </div>
            </div>
        </div>
    )
}
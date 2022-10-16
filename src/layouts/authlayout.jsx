import Logo from "../assets/Logo.png"
import { Link } from "react-router-dom"

export default function AuthLayout(props){
    return (
        <div className="p-1 h-viewHeight flex bg-white overflow-hidden">
            <div 
            className="w-1/2 h-full text-white rounded-tl-md rounded-bl-md bg-gradient-to-tl from-mainBlue to-secondGrad 
            relative hidden lg:flex items-center justify-center overflow-hidden"
            >
                <div className="bg-trasnparentWhite rounded-full -top-48 left-2/3 flex items-center justify-center absolute h-abit w-abit">
                    <div className="bg-trasnparentWhite rounded-full h-4/5 w-4/5"></div>
                </div>
                
                <div className="absolute top-14 left-12 w-48">
                    <div className="border-dotted border-r-0 border-l-0 border-t-trasnparentWhite border-b-trasnparentWhite border-2 py-4 w-full"></div>
                    <div className="border-dotted border-r-0 border-l-0 border-t-0 border-b-trasnparentWhite border-2 py-4 w-full"></div>
                    <div className="border-dotted border-r-0 border-l-0 border-t-0 border-b-trasnparentWhite border-2 py-4 w-full"></div>
                </div>

                <h1 className="text-5xl font-bold font-lato px-4">
                    {(props.page == "signup") ? "WelBing Registration Portal" : "WelBing Login Portal"}
                </h1>

                <div className="absolute top-3/4 right-12 w-48">
                <div className="border-dotted border-r-0 border-l-0 border-t-trasnparentWhite border-b-trasnparentWhite border-2 py-4 w-full"></div>
                    <div className="border-dotted border-r-0 border-l-0 border-t-0 border-b-trasnparentWhite border-2 py-4 w-full"></div>
                    <div className="border-dotted border-r-0 border-l-0 border-t-0 border-b-trasnparentWhite border-2 py-4 w-full"></div>
                </div>

                <div className="bg-trasnparentWhite rounded-full top-3/4 -left-40 absolute h-96 w-96"></div>
            </div>
            <div className="px-2 py-4 lg:w-1/2 w-full bg-notwhite rounded-tr-md rounded-br-md flex flex-col overflow-y-auto">
                <div className="flex justify-between w-full items-center px-3 mb-6">
                    <div className=" w-28"> <img src={Logo} alt="" /></div>
                    <Link to={(props.page == "signup") ? "/login" : "/signup"} className="m-0 bg-white btn btn-ghost no-animation shadow-md w-28 p-0 font-inter font-bold">
                        {(props.page == "signup") ? 'Login' : 'Register'}
                    </Link>
                </div>
                <form className="w-full p-3 flex flex-col justify-center" onSubmit={(e)=>{e.preventDefault()}}>
                    {props.children}
                </form>
            </div>
        </div>
    )
}
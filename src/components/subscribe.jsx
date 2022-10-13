export default function Subscribe(){
    return (
        <div className=" bg-topBg py-24 flex justify-center items-center">
            <div className="bg-mainBlue flex flex-col items-center text-white py-8 lg:w-hIw w-11/12 rounded">
                <h1 className="text-white text-2xl font-nunito font-bold leading-8 text-center">Subscribe To Our Newsletter</h1>
                <p className="text-gray-300 p-3 flex justify-center text-center text-sm">Stay up to date with our latest news, updates and special offers.</p>
                <br /><br />
                <div className=" bg-white rounded py-2 flex lg:w-4/6 w-11/12 items-center justify-around">
                    <input type="text" className="input focus:outline-none rounded outline-none font-nunito h-8 text-black w-3/5" placeholder="Enter Your Email" />
                    <button className="btn bg-mainBlue p-4 border-0 text-sm font-lato hover:bg-mainBlue rounded">Join Now</button>
                </div>
            </div>
        </div>
    )
}
export default function Modal(){
    return (
        <>
        <input type="checkbox" id="my-modal" className="modal-toggle" />
        <div className="modal">
            <div className="modal-box bg-white rounded-md flex flex-col items-center lg:w-hIw w-11/12 max-w-5xl px-1">
                <h1 className="text-gray-800 font-nunito font-bold text-xl">JOIN THE WAITLIST</h1><br />

                <form onSubmit={(e)=>{e.preventDefault()}} className="lg:w-4/5 w-11/12 flex flex-col justify-center items-center">
                    <input 
                    type="text" 
                    className="input focus:outline-none text-gray-700 font-nunito bg-white border-solid border-gray-400 rounded-sm w-full" 
                    placeholder="Enter Your Name" 
                    /> <br />
                    <input 
                    type="email" 
                    className="input focus:outline-none text-gray-700 font-nunito bg-white border-solid border-gray-400 rounded-sm w-full" 
                    placeholder="Enter Your Email" 
                    /> <br />
                    <h2 className="w-full font-nunito text-black text-lg">Select A Category</h2>
                    <select className="input mt-2 focus:outline-none bg-white text-md text-gray-700 border-gray-400 rounded-sm w-full font-nunito font-bold">
                        <option value={null}>- Choose Your Category -</option>
                        <option value="Public Sector Doctor">
                            Public Sector Doctor
                        </option>
                        <option value="Private Sector Doctor">
                            Private Sector Doctor
                        </option>
                        <option value="Individual (Non-Health Professional)">
                            Individual (Non-Health Professional)
                        </option>
                    </select> <br />
                    <label htmlFor="my-modal" className="btn bg-mainBlue hover:bg-mainBlue rounded w-4/5 font-lato font-bold text-white border-0">
                        Join Now
                    </label>
                </form>
            </div>
        </div>
        </>
    )
}

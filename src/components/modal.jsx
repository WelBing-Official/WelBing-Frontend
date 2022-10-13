export default function Modal(){
    return (
        <>
        <input type="checkbox" id="my-modal" className="modal-toggle" />
        <div className="modal">
            <div className="modal-box bg-white rounded-md flex flex-col items-center lg:w-hIw w-11/12 max-w-5xl px-1">
                <h1 className=" font-nunito font-bold text-xl">JOIN WAITLIST</h1><br />

                <form onSubmit={(e)=>{e.preventDefault()}} className="w-4/5">
                    <input 
                    type="text" 
                    className="input focus:outline-none text-gray-700 font-nunito bg-white border-solid border-gray-400 rounded-sm w-full" 
                    placeholder="Enter Your Name" 
                    /> <br /> <br />
                    <input 
                    type="email" 
                    className="input focus:outline-none text-gray-700 font-nunito bg-white border-solid border-gray-400 rounded-sm w-full" 
                    placeholder="Enter Your Email" 
                    /> <br /><br />
                    <label htmlFor="my-modal" className="btn bg-mainBlue hover:bg-mainBlue rounded px-20 font-lato font-bold text-white border-0">
                        Join Now
                    </label>
                </form>
            </div>
        </div>
        </>
    )
}

import { useState } from "react"
import 'react-toastify/dist/ReactToastify.css'
import { toast, ToastContainer } from "react-toastify";

export default function Modal() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [category, setCategory] = useState("");

    const checkInput = () => {
        return ((name == "" || email == "" || category == "- Choose Your Category -") ? false : true)
    }

    const startOperation = () => {
        if (checkInput()) {
            toast.info("Please Hold On!", {
                className: 'bg-green-600 text-white',
                draggable: false,
                position: toast.POSITION.TOP_RIGHT
            });

            if (category == "Public Sector Doctor") {
                setCategory("hospital")
            } else if (category == "Private Sector Doctor") {
                setCategory("practitioner")
            }
            else {
                setCategory("basic")
            }

            fetch("https://welbing-waitlist.herokuapp.com/", {
                method: "POST",
                body: JSON.stringify({
                    'name': name,
                    'email': email,
                    'category': category
                })
            })
                .then(res => res.json())
                .then((data) => {
                    let { resolved, message } = data;
                    console.log(`Resolved => ${resolved} and Message => ${message}`);
                    switch (message) {
                        case "Has joined successfully":
                            toast.success("Great!! Please Check Your Email", {
                                className: 'bg-green-400 text-white',
                                draggable: false,
                                position: toast.POSITION.TOP_RIGHT
                            })
                            break;
                        default:
                            toast.error(`${message}`, {
                                className: 'text-gray-800',
                                draggable: false,
                                position: toast.POSITION.TOP_RIGHT
                            })
                    }
                })
        }
        else{
            toast.error("Please Fill in all required spaces", {
                className: "bg-red-500 text-white font-bold",
                draggable: false,
                position: toast.POSITION.TOP_RIGHT
            })
        }
    }

    return (
        <>
            <ToastContainer />
            <input type="checkbox" id="my-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box bg-white rounded-md flex flex-col items-center lg:w-hIw w-11/12 max-w-5xl px-1">
                    <h1 className="text-gray-800 font-nunito font-bold text-xl">JOIN THE WAITLIST</h1><br />

                    <form onSubmit={(e) => { e.preventDefault() }} className="lg:w-4/5 w-11/12 flex flex-col justify-center items-center">
                        <input
                            type="text"
                            className="input focus:outline-none text-gray-700 font-nunito bg-white border-solid border-gray-400 rounded-sm w-full"
                            placeholder="Enter Your Name"
                            onChange={(e) => { setName(e.target.value) }}
                        /> <br />
                        <input
                            type="email"
                            className="input focus:outline-none text-gray-700 font-nunito bg-white border-solid border-gray-400 rounded-sm w-full"
                            placeholder="Enter Your Email"
                            onChange={(e) => { setEmail(e.target.value) }}
                        /> <br />
                        <h2 className="w-full font-nunito text-black text-lg">Select A Category</h2>
                        <select
                            className="input mt-2 focus:outline-none bg-white text-md text-gray-700 border-gray-400 rounded-sm w-full font-nunito font-bold"
                            onChange={(e) => { setCategory(e.target.value) }}
                        >
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
                        <label
                            htmlFor="my-modal"
                            className="btn bg-mainBlue hover:bg-mainBlue rounded w-4/5 font-lato font-bold text-white border-0"
                            onClick={() => { startOperation() }}
                        >
                            Join Now
                        </label>
                    </form>
                </div>
            </div>
        </>
    )
}

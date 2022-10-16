import AuthLayout from "../layouts/authlayout"

export default function Signup(){
    return (
        <AuthLayout page="signup">
            <h1 className="font-nunito text-3xl text-mainBlue font-bold">
                Register
            </h1> <br />
            <label className="font-lato text-sm text-gray-500 mr-2">
                Account Type
            </label> <br />
            <select className="input bg-white font-nunito focus:outline-none rounded-sm">
                <option value="Patients Account">Patients Account</option>
                <option value="Hospital/Government Bodies Account">Hospital/Government Bodies Account</option>
                <option value="Health Practitioner">Health Practitioner</option>
            </select> <br />
            <label className="font-lato text-sm text-gray-500 mr-2">
                Full Name
            </label> <br />
            <input 
            type="text"
            className="input bg-white mb-3 focus:outline-none shadow-md rounded-sm text-sm text-gray-800 font-nunito" 
            /> <br />
            <label className="font-lato text-sm text-gray-500 mr-2">
                Email
            </label> <br />
            <input 
            type="email"
            className="input bg-white mb-3 focus:outline-none shadow-md rounded-sm text-sm text-gray-800 font-nunito" 
            /> <br />
            <label className="font-lato text-sm text-gray-500 mr-2">
                Password
            </label> <br />
            <input 
            type="password"
            className="input bg-white mb-3 focus:outline-none shadow-md rounded-sm text-sm text-gray-800 font-nunito" 
            /> <br />
            <button type="submit" className="btn no-animation bg-secondColor text-white w-4/5 m-auto border-0 hover:bg-secondColor">
                Register
            </button>
        </AuthLayout>
    )
}
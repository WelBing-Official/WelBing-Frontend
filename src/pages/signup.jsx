import AuthLayout from "../layouts/authlayout"

export default function Signup(){
    return (
        <AuthLayout page="signup">
            <input type="text" className="input" placeholder="Enter your name" />
        </AuthLayout>   
    )
}
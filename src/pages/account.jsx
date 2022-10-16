import AccountLayout from "../layouts/accountlayout"

export default function Account(){
    return (
        <AccountLayout>
            <div className="bg-notwhite w-full h-viewHeight">
                <label htmlFor="my-drawer" className="btn btn-primary drawer-button lg:hidden">Open</label>
            </div>
        </AccountLayout>
    )
}
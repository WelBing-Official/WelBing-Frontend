import Header from "../components/header"
import Intro from "../components/intro"
import Expectations from "../components/expectations"
import Subscribe from "../components/subscribe"
import Socials from "../components/socials"
import Modal from "../components/modal"

export default function WaitList(){
    return (
        <div className="bg-white">
        <Header />
        <Intro />
        <Expectations />
        <Subscribe />
        <Socials />
        <Modal />
        </div>
    )
}
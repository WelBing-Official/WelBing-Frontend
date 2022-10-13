import Header from "../components/header"
import Intro from "../components/intro"
import Expectations from "../components/expectations"
import Subscribe from "../components/subscribe"
import Socials from "../components/socials"

export default function WaitList(){
    return (
        <div className="bg-white">
        <Header />
        <Intro />
        <Expectations />
        <Subscribe />
        <Socials />
        </div>
    )
}
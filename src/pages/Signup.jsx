import { Link } from "react-router-dom";
import Header from "../components/Header";
import Signup from "../components/Signup";

export default function SignupPage() {
    return (
        <>
            <Header
                heading="Signup to create an account"
                paragraph="Already have an account? "
                linkName="Login"
                linkUrl="/"
            />
            <Signup />
            <Link to='/'>
                <button>Home</button>
            </Link>
        </>
    )
}
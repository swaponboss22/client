import {useContext} from "react";
import {AuthContext} from "../providers/AuthProvider.jsx";
import UseAxiosPublic from "../hooks/useAxiosPublic.jsx";

import Swal from "sweetalert2";

function Login() {
    const {signInUser} = useContext(AuthContext)
    const handleSignIn = (event) => {
        event.preventDefault()
        const form = event.target
        const email = form.email.value
        const password = form.password.value
        signInUser(email, password).then((data) => {
            console.log(data.user)

            Swal.fire({
                title: "Good job!",
                text: "You clicked the button!",
                icon: "success"
            });
        }).catch((e) => {
            console.error(e)
        })
    }
    return (
        <form onSubmit={handleSignIn}>
            <input type="email" name="email" placeholder={'Email'}/>
            <input type="password" name="password" placeholder={'Password'}/>
            <input type="submit" value="Login"/>
        </form>
    )
}

export default Login

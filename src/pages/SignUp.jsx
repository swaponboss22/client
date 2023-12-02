import {useContext} from "react";
import {AuthContext} from "../providers/AuthProvider.jsx";
import Swal from "sweetalert2";
import useAxiosPublic from "../hooks/useAxiosPublic.jsx";

function SignUp() {
    const {createUser} = useContext(AuthContext);
    const axiosPublic = useAxiosPublic();

    const handleSignUp = async (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        try {
            const data = await createUser(email, password);
            console.log(data.user);

            const user = {
                email: email,
                type: 'user'
            };

            const response = await axiosPublic.post('users', user);
            if (response.data.insertedId) {
                Swal.fire({
                    title: "Good job!",
                    text: "You clicked the button!",
                    icon: "success"
                });
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <form onSubmit={handleSignUp}>
            <input type="email" name="email" placeholder={'Email'}/>
            <input type="password" name="password" placeholder={'Password'}/>
            <input type="submit" value="Submit"/>
        </form>
    );
}

export default SignUp;

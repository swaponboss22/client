import {Link} from "react-router-dom";

function Dashboard() {
    const userType = 'admin';
    return (
        <>
            <Link to={'/'}>Home</Link>
            {userType === 'admin' && <>
            <h1>Hello admin</h1>
            </>}
            {userType === 'user' && <>
            <h1>Hello user</h1>
            </>}
        </>
    )
}

export default Dashboard

import {createContext, useEffect, useState} from "react";
import {createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut} from "firebase/auth";
import auth from "../../firebase_init.js";


export const AuthContext = createContext(null);

function AuthProvider({children}) {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const signOutUser = () => {
        setLoading(true)
        return signOut(auth)
    }

    // firebase user state management
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            console.log("Observing current user: ", currentUser);
            setLoading(false);
        });
        // Cleanup function for avoid memory leaks
        return () => unSubscribe();
    }, []);


    const authCredential = {
        user, loading, signInUser, createUser, signOutUser
    }
    return <AuthContext.Provider value={authCredential}>{children}</AuthContext.Provider>;
}

export default AuthProvider;

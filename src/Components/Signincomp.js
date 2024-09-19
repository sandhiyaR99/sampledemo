import { createUserWithEmailAndPassword } from 'firebase/auth'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import auth from '../firebase'

const Signincomp = () => {

    const [user, setuser] = useState([])
    const [pass, setpass] = useState([])

    const navigate = useNavigate()

    useEffect(()=>{
        auth.onAuthStateChanged((user)=>{
            if(user){
                navigate('/')
            }
            else{
                console.log("failed");
                
            }
        })
    },[])

    const signupfunc = () => {
        createUserWithEmailAndPassword(auth, user, pass).
        then(() => {
            console.log("registered");
            navigate('/')
        })
    }
    return (
        <div className=' p-5'>
            <h1 className=' text-center'>Welcome to my Website <span class="badge text-bg-secondary">Blog</span></h1>
            <h3 className='mb-5'>Signup:</h3>
            <div>
                <label for="inputemail" className="form-label">Email id:</label>
                <input type="email" id="inputemail" className="form-control" aria-describedby="passwordHelpBlock" onChange={(e) => { setuser(e.target.value) }} />
            </div>
            <div>
                <label for="inputPassword5" className="form-label">Password:</label>
                <input type="password" id="inputPassword5" className="form-control" aria-describedby="passwordHelpBlock" onChange={(e) => { setpass(e.target.value) }} />
                <div id="passwordHelpBlock" className="form-text">
                    Your password must be more than 6 characters long.
                </div>
            </div>
            <p className='mt-5'>Already have an account please login here <Link to={'/'}>login</Link></p>
            <button type="button" className="btn btn-success" onClick={signupfunc}>Sign Up</button>
        </div>
    )
}

export default Signincomp
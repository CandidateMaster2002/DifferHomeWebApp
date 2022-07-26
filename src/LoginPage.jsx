import React, { useState,useEffect } from 'react';
import Alert from '@mui/material/Alert';
import { useNavigate } from 'react-router-dom';
import AdminPortal from './AdminPortal';

const LoginPage = props => {
    const [user, setUser] = useState({})
    const [loggedInUser, setLoggedInUser] = useState()

    const [flag,setFlag]=useState(0)
    const [showPassword,setShowPassword]=useState(0)
    const [rememberMe,setRememberMe]=useState(0)


    const navigate = useNavigate();

    useEffect(() => {
        setLoggedInUser(localStorage.getItem("user"));
        if (loggedInUser) {
            console.log(loggedInUser)
            navigate("/admin");
        }
      }, []);

    const handleChange = (event) =>{
        console.log(event);
                const name =  event.target.name;
                const value = event.target.value;
                setUser(values => ({...values,
                    [name]: value})
                )
    }

    const loginAdmin = (event) => {
        event.preventDefault();
         console.log (event)    ;
         console.log("user",user)   ;
         let headers = new Headers();

         headers.append('Content-Type', 'application/json');
         headers.append('Accept', 'application/json');
        //  headers.append('Authorization', 'Basic ' + base64.encode(emai + ":" +  password));
         headers.append('Origin','http://localhost:3000');
     
        fetch('http://localhost:5000/auth/login', {            
            method: "POST",
            headers: headers,
            body: JSON.stringify(user)
          })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                if(data.success){
                //    window.localStorage('loginData',data)
                    setFlag(0)
                    localStorage.setItem('user', data)
                    navigate("/admin");

                    // props.navigate.push("/admin");
                }
                else{
                  //  alert("incorrect inputs");
                    setFlag(1)
                }
                              
            })
            .catch((err) => {
              console.log(err);
            });
    }
    // if(user) {
    //     console.log(user)
    //     return <AdminPortal></AdminPortal>
    // }
    return (
        <>
            <div className='LoginPage'>
                {/* <img src='images/login_bg.jpg' /> */}
                <h1>Login Page</h1>

                <form  onSubmit={loginAdmin}>
                    <div className="AvtarImg">
                        <img src="images/avatarImg.png" alt="Avatar" className="avatar" />
                    </div>
                   { flag?<Alert severity="error">Wrong User Name or Password — Enter Again !</Alert>:""}
                       {/* <div className='Alert'> {flag&&}</div> */}
                    <div className="LoginBox">
                        <label for="uname"><b>User Name</b></label>
                        <input name = "email" value={user.email || ""} onChange ={handleChange} type="text" placeholder="Enter Username" required />

                        <label for="psw"><b>Password</b></label>
                        <input name= "password" type={showPassword?"text":"password"} placeholder="Enter Password" value={user.password} onChange ={handleChange}  required />

                        <button type="submit" >Login</button>
                        <label>
                            <input type="checkbox" checked={rememberMe} onChange={() => setRememberMe(!rememberMe)}name="rememberMe" /> Remember me
                        </label>
                        <label>
                            <input type="checkbox" checked={showPassword} onChange={() => setShowPassword(!showPassword)}name="remember" /> Show Password
                        </label>
                    </div>

                    <div className="LoginBottom">
                        <button type="button" className="cancelbtn"><a href="http://localhost:3000/">Cancel</a></button>
                        {/* <span className="forgetPsw">Forgot <a href="#">password?</a></span> */}
                    </div>
                </form>
            </div>
        </>
    );
};

export default LoginPage;
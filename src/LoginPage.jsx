import React from 'react';

const LoginPage = () => {
    return (
        <>
            <div className='LoginPage'>
                {/* <img src='images/login_bg.jpg' /> */}
                <h1>Login Page</h1>

                <form action="/action_page.php" method="post">
                    <div className="AvtarImg">
                        <img src="" alt="Avatar" className="avatar" />
                    </div>

                    <div className="LoginBox">
                        <label for="uname"><b>Username</b></label>
                        <input type="text" placeholder="Enter Username" name="uname" required />

                        <label for="psw"><b>Password</b></label>
                        <input type="password" placeholder="Enter Password" name="psw" required />

                        <button type="submit">Login</button>
                        <label>
                            <input type="checkbox" checked="checked" name="remember" /> Remember me
                        </label>
                    </div>

                    <div className="LoginBottom">
                        <button type="button" className="cancelbtn">Cancel</button>
                        <span className="psw">Forgot <a href="#">password?</a></span>
                    </div>
                </form>
            </div>
        </>
    );
};

export default LoginPage;
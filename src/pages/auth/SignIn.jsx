import TextField from "../../components/TextField";
import Title from "../../components/Title";

function SignIn(){
    return  <div className="auth-page">
            <div className='gray-box'>
                <div className='signup-form'>
                    <Title />
                    <h2>Login</h2>
                    <form>
                        {/* Email Field */}
                        <TextField type='email' placeholder='Enter Email' label='Email Address' errorText='Email is required' id='email' value=''/>
    
                        {/* Password Field */}
                        <TextField type='password' placeholder='Enter password' label='Password' errorText='Password is required' id='password'/>
    
                        <a href="">Forgot Password</a>
    
                        <button>Login</button>
    
                        <a href="">Don't have an account</a>
                    </form>
                </div>
            </div>
        </div>
}

export default SignIn;
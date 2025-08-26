import FilledButton from '../../components/FilledButton';
import TextField from '../../components/TextField';
import Title from '../../components/Title';
import './auth.css';

function SignUp() {
    return (
      <div className="auth-page">
        <div className="gray-box">
          <div className="signup-form">
            <Title />
            <h2>Register</h2>
            <form>
              <TextField
                type="text"
                placeholder="Enter Name"
                label="Full Name"
                errorText="Name is required"
                id="name"
                value=""
              />

              <TextField
                type="tel"
                placeholder="Enter Phone Number"
                label="Phone Number"
                errorText="Phone Number is required"
                id="phone"
              />

              <TextField
                type="email"
                placeholder="Enter Email"
                label="Email Address"
                errorText="Email is required"
                id="email"
                value=""
              />

              {/* Password Field */}
              <TextField
                type="password"
                placeholder="Enter password"
                label="Password"
                errorText="Password is required"
                id="password"
              />

              <a href="">Forgot Password</a>

              <FilledButton>Create Account</FilledButton>

              <a href="">Don't have an account</a>
            </form>
          </div>
        </div>
      </div>
    );
}

export default SignUp;
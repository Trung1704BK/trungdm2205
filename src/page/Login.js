import React from 'react';
import validator from 'validator';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Login.css';
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: 'eve.holt@reqres.in',
      password: 'cityslicka',
      typePassword: 'password',
      errors: {},
    };
  }

  //
  handleChangePassword = (e) => {
    this.setState({
      password: e.target.value,
    });
  };
  //
  handleChangeEmail = (e) => {
    this.setState({
      email: e.target.value,
    });
  };
  //
  validateForm() {
    const { email, password } = this.state;

    let isValid = true;
    const errors = {};
    if (!validator.isEmail(email)) {
      errors.email = 'Your email is not correct';
      isValid = false;
    }
    if (password.trim().length < 8) {
      errors.password = 'Your password is not correct';
      isValid = false;
    }
    this.setState({ errors });
    return isValid;
  }
  //
  showHide(e) {
    e.preventDefault();
    const typePassword =
      this.state.typePassword === 'password' ? 'text' : 'password';
    this.setState({ typePassword });
  }
  //
  handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = this.state;
    const isValid = this.validateForm();
    if (!isValid) {
      return;
    }
    axios
      .post('https://reqres.in/api/login', {
        email: email,
        password: password,
      })

      .then((res) => {
        console.log(res);
        localStorage.setItem('token', res.data.token);
        this.props.history.push('/');
        // return <Redirect to="/home" />;
      })

      .catch((err) => {
        console.log(err);
      });
  };
  //
  render() {
    const { email, errors, password, typePassword } = this.state;
    return (
      <div id='login'>
        <h1 className='text-center text-black heading pt-5'>Vietravel</h1>
        <div className='container'>
          <div
            id='login-row'
            className='row justify-content-center align-items-center'
          >
            <div id='login-column' className='col-md-6'>
              <div id='login-box' className='col-md-12'>
                <form id='login-form' className='form' action='' method='post'>
                  <h3 className='text-center text-info text-white'>Login</h3>
                  <div className='form-group'>
                    <input
                      type='text'
                      value={email}
                      className='form-control'
                      placeholder='Email'
                      onChange={(e) => this.handleChangeEmail(e)}
                    />
                    <p style={{ color: 'red' }}>{errors.email}</p>
                  </div>
                  <div className='form-group password-box'>
                    {this.state.password && (
                      <button
                        className='btn btn-outline-primary btn-eye'
                        type='button'
                        onClick={(e) => this.showHide(e)}
                      >
                        <i
                          className={`fa-solid fa-eye${
                            typePassword !== 'password' ? '-slash' : ''
                          }`}
                        />
                      </button>
                    )}

                    {/* 
                    {
                      <button
                        className='btn btn-outline-primary btn-eye'
                        type='button'
                        onClick={(e) => this.showHide(e)}
                      >
                        {this.state.password && typePassword === 'password' && (
                          <i className={`fa-solid fa-eye`} />
                        )}
                        {this.state.password && typePassword !== 'password' && (
                          <i className={`fa-solid fa-eye-slash`} />
                        )}
                      </button>
                    } */}

                    {}

                    <input
                      type={typePassword}
                      value={password}
                      onChange={(e) => this.handleChangePassword(e)}
                      name='password'
                      className='form-control'
                      placeholder='Password'
                      autoComplete='on'
                    />
                    <p style={{ color: 'red' }}>{errors.password}</p>
                  </div>

                  <div className='form-group'>
                    <br />
                    <button
                      type='button'
                      className='btn btn-light'
                      onClick={(e) => this.handleSubmit(e)}
                    >
                      Login
                    </button>
                  </div>
                  <span>
                    <Link to='/register' className='register'>
                      Register
                    </Link>
                  </span>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;

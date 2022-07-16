import axios from 'axios';
import React from 'react';
import validator from 'validator';

class Register extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      confirmPassword: '',
      errors: {},
      success: false,
      messages: '',
    };
  }

  handChangeEmail = (e) => {
    this.setState({
      email: e.target.value,
    });
  };

  handleChangePassword = (e) => {
    this.setState({
      password: e.target.value,
    });
  };

  handleConfirmPassword = (e) => {
    this.setState({
      confirmPassword: e.target.value,
    });
  };

  validateForm = () => {
    const { email, password, confirmPassword } = this.state;
    const errors = {};
    let isValid = true;

    if (!validator.isEmail(email)) {
      errors.email = 'email not valid';
      isValid = false;
    }

    if (password !== confirmPassword) {
      errors.confirmPassword = 'you must confirm password';
      isValid = false;
    }
    this.setState({
      errors,
    });
    return isValid;
  };

  handleRegister = () => {
    let { errors, messages } = this.state;
    this.setState({
      errors: [],
      messages: '',
    });
    let obj = {
      email: this.state.email,
      password: this.state.password,
      confirmPassword: this.state.confirmPassword,
    };
    const isValid = this.validateForm();
    if (!isValid) {
      return;
    }

    //Test
    // obj.email = '';
    // obj.password = '';
    axios
      .post('http://localhost/php-api/users/register.php', obj)
      .then((res) => {
        console.log('check', res);

        if (res.data.success) {
          this.props.history.push('/login');
        } else {
          if (res.data.errors && res.data.errors.length) {
            //check error email
            let isErrorEmail = res.data.errors.find(
              (item) => item.field === 'email'
            );
            if (isErrorEmail) {
              errors.email = isErrorEmail.message;
            }

            let isErrorPassword = res.data.errors.find(
              (item) => item.field === 'password'
            );
            if (isErrorPassword) {
              errors.password = isErrorPassword.message;
            }
            this.setState({ errors });
          } else {
            this.setState({ messages: 'register success' });
          }
        }
      })
      .catch((error) => {
        console.log('check', error.res);
        this.setState({ messages: '' });
      });

    //To clear text box values
  };

  render() {
    const { email, errors, password, confirmPassword, messages } = this.state;
    return (
      <div id='login'>
        <h1 className='text-center text-black heading pt-5'>Facebook</h1>
        <div className='container'>
          <div
            id='login-row'
            className='row justify-content-center align-items-center'
          >
            <div id='login-column' className='col-md-6'>
              <div id='login-box' className='col-md-12'>
                <form id='login-form' className='form' action='' method=''>
                  <div>{messages}</div>
                  <h3 className='text-center text-info text-white'>
                    Register account
                  </h3>

                  <div className='form-group'>
                    <div>
                      <input
                        type='email'
                        value={email}
                        className='form-control'
                        placeholder='Email'
                        onChange={(e) => this.handChangeEmail(e)}
                      />
                      <p>{errors.email} </p>
                    </div>
                  </div>
                  <br />
                  <div className='form-group password-box'>
                    <input
                      type='password'
                      value={password}
                      className='form-control'
                      placeholder='Password'
                      autoComplete='on'
                      onChange={(e) => this.handleChangePassword(e)}
                    />
                    {errors.password}
                  </div>
                  <br />
                  <div className='form-group password-box'>
                    <input
                      type='password'
                      value={confirmPassword}
                      className='form-control'
                      placeholder='Confirm password'
                      autoComplete='on'
                      onChange={(e) => this.handleConfirmPassword(e)}
                    />
                    {errors.confirmPassword}
                  </div>

                  <div className='form-group'>
                    <br />
                    <button
                      type='button'
                      className='btn btn-info btn-md '
                      onClick={(e) => this.handleRegister(e)}
                    >
                      <h1>Register</h1>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Register;

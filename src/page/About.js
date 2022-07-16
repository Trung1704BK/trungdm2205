import React from 'react';

import './About.css';

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const token = localStorage.getItem('token') || '';
    console.log('check', token);
    if (!token) {
      this.props.history.push('/login');
    }
  }
  onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      this.setState({
        image: URL.createObjectURL(img),
      });
    }
  };

  render() {
    return (
      <div>
        <div>
          <div>
            <div>
              <img src={this.state.image} alt='search' />
              <h1>Select Image</h1>
              <input type='file' name='myImage' onChange={this.onImageChange} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;

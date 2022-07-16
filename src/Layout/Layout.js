import React from 'react';
import Header from './Header';
import Footer from './Footer';

class Layout extends React.Component {
  render() {
    return (
      <div id='wrapper'>
        <Header {...this.props} />
        <div className='content'>{this.props.children}</div>
        <Footer />
      </div>
    );
  }
}

export default Layout;

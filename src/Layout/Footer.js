import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
class Footer extends React.Component {
  render() {
    return (
      <div className='container'>
        <div className='row'>
          <div className='col-12'>
            <h1>Branch & R.Office</h1>
          </div>
        </div>
        <hr />
        <div className='row' style={{ marginBottom: 20 }}>
          <div className='col-12'>
            <h4>HEAD OFFICE</h4>
            <p>
              190 Pasteur, Vo Thi Sau Ward, District 3, Ho Chi Minh City,
              Vietnam
              <br />
              Tel: <b>(84-28) 38 668 999 (20 lines)</b>
              <br />
              Fax: <b>(84-28) 38 29 9142</b>
              <br />
              Email: <a href='info@vietravel.com'>info@vietravel.com</a>
            </p>
          </div>
        </div>
        <div className='row' style={{ marginBottom: 30 }}>
          <div className='col-lg-6 col-md-12 col-sm-12 col-xs-12'>
            <h4>THANH HOA BRANCH</h4>
            <p>
              190 Pasteur, Vo Thi Sau Ward, District 3, Ho Chi Minh City,
              Vietnam
              <br />
              Tel: <b>(84-28) 38 668 999 (20 lines)</b>
              <br />
              Fax: <b>(84-28) 38 29 9142</b>
              <br />
              Email: <a href='info@vietravel.com'>info@vietravel.com</a>
            </p>
          </div>
          <div className='col-lg-6 col-md-12 col-sm-12 col-xs-12'>
            <h4>QUANG NINH BRANCH</h4>
            <p>
              190 Pasteur, Vo Thi Sau Ward, District 3, Ho Chi Minh City,
              Vietnam
              <br />
              Tel: <b>(84-28) 38 668 999 (20 lines)</b>
              <br />
              Fax: <b>(84-28) 38 29 9142</b>
              <br />
              Email: <a href='info@vietravel.com'>info@vietravel.com</a>
            </p>
          </div>
        </div>
        <div className='row'>
          <div className='col-lg-6 col-md-12 col-sm-12 col-xs-12'>
            <h4>HA NOI BRANCH</h4>
            <p>
              190 Pasteur, Vo Thi Sau Ward, District 3, Ho Chi Minh City,
              Vietnam
              <br />
              Tel: <b>(84-28) 38 668 999 (20 lines)</b>
              <br />
              Fax: <b>(84-28) 38 29 9142</b>
              <br />
              Email: <a href='info@vietravel.com'>info@vietravel.com</a>
            </p>
          </div>
          <div className='col-lg-6 col-md-64 col-sm-6 col-xs-12'>
            <h4>HAI PHONG BRANCH</h4>
            <p>
              190 Pasteur, Vo Thi Sau Ward, District 3, Ho Chi Minh City,
              Vietnam
              <br />
              Tel: <b>(84-28) 38 668 999 (20 lines)</b>
              <br />
              Fax: <b>(84-28) 38 29 9142</b>
              <br />
              Email: <a href='info@vietravel.com'>info@vietravel.com</a>
            </p>
          </div>
        </div>





























        
      </div>
    );
  }
}

export default Footer;

import React from 'react';
import axios from 'axios';
import './Users.css';

class Users extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      limit: 6,
      listData: [],
      total: 0,
      currentPage: 1,
      loading: true,
    };
  }
  //
  // componentDidMount() {
  //   const token = localStorage.getItem('token') || '';
  //   console.log('check', token);
  //   if (!token) {
  //     this.props.history.push('/login');
  //   }

  //   this.gotoPage(0);
  // }
  componentDidMount() {
    this.setState({ loading: false });

    const token = localStorage.getItem('token') || '';

    console.log('check', token);
    if (!token) {
      this.props.history.push('/login');
    }
    this.gotoPage(0);
  }

  getData = async (page) => {
    const { limit } = this.state;
    const url = `http://localhost/php-api/users/list.php/?page=${page}&limit=${limit}`;

    let result = await axios({
      method: 'get',
      url,
      data: {
        email: '',
        id: '',
        image: '',
      },
      headers: {
        Authorization: ``,
        'Content-Type': 'application/json',
      },
    });

    result = result.data;
    const { data } = result;

    console.log('checked', result);

    this.setState({
      listData: data,
      total: result.total,
      loading: true,
    });
  };

  //

  gotoPage = (page) => {
    this.setState({
      currentPage: page,
      loading: true,
    });
    this.getData(page);
  };

  //
  // nextPage = (maxPage) => {
  //   let { currentPage } = this.state;
  //   currentPage++;
  //   if (currentPage > maxPage) {
  //     return false;
  //   }
  //   this.setState({
  //     currentPage,
  //   });
  //   this.getData(currentPage);
  // };

  nextPage = (maxPage) => {
    let { currentPage } = this.state;
    currentPage++;
    if (currentPage > maxPage) {
      return false;
    }
    this.setState({
      currentPage,
      loading: true,
    });
    this.getData(currentPage);
  };

  //
  // prePage = () => {
  //   let { currentPage } = this.state;
  //   currentPage--;
  //   if (currentPage < 0) {
  //     return false;
  //   }
  //   this.setState({ currentPage });
  //   this.getData(currentPage);
  // };

  prePage = () => {
    let { currentPage } = this.state;
    currentPage--;
    if (currentPage < 0) {
      return false;
    }
    this.setState({ currentPage, loading: false });
    this.getData(currentPage);
  };

  renderPage = (maxPage) => {
    const { currentPage } = this.state;

    let startPage = 0;
    let endPage = 0;
    let start = 0;
    let end = 0;

    if (currentPage + 2 >= maxPage) {
      end = maxPage;
    } else {
      end = currentPage + 2;
    }
    if (currentPage - 2 <= 1) {
      start = 1;
    } else {
      start = currentPage - 2;
    }

    startPage = start;
    endPage = end;
    const extraStart = start - (currentPage - 2);
    if (extraStart > 0) {
      end = end + extraStart;
    }
    const extraEnd = currentPage + 2 - endPage;
    if (extraEnd > 0) {
      start = start - extraEnd;
    }
    if (start <= 1) {
      start = 1;
    }
    if (end >= maxPage) {
      end = maxPage;
    }

    console.log('startPage', startPage);
    console.log('endPage', endPage);

    let html = [];

    for (let i = start; i <= end; i++) {
      html.push(
        <button
          key={i}
          className={`${currentPage === i ? 'active' : ''}`}
          onClick={() => this.gotoPage(i)}
        >
          {i}
        </button>
      );
    }

    return html;
  };

  render() {
    const { listData, total, limit, currentPage } = this.state;
    console.log('total', total);
    console.log('limit', limit);
    const extraPage = total % limit > 0 ? 1 : 0;
    const maxPage = Math.floor(total / limit) + extraPage;
    console.log('maxPage', maxPage);

    return (
      <div className='container'>
        <div className='col-12' style={{ marginTop: 30 }}>
          <h1>360-degree tourism</h1>
          <hr />
        </div>
        <br />
        {listData.map((post, i) => {
          return (
            <div class='row' key={i}>
              <div
                className='col-xs-12 col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-8 '
                style={{ marginBottom: 30 }}
              >
                <h5>{post.title}</h5>
                <img
                  src={post.image1}
                  class='card-img-top'
                  alt='...'
                  style={{ marginBottom: 20 }}
                />

                <h6>{post.place}</h6>
                <p>{post.content}</p>
                <a href='#' class='btn btn-primary'>
                  Booking
                </a>
              </div>
              <div
                className='col-xs-12 col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-8'
                style={{ marginBottom: 30 }}
              >
                <h5>{post.title}</h5>
                <img
                  src={post.image1}
                  class='card-img-top'
                  alt='...'
                  style={{ marginBottom: 20 }}
                />

                <h6>{post.place}</h6>
                <p>{post.content}</p>
                <a href='#' class='btn btn-primary'>
                  Booking
                </a>
              </div>

              <div className='col-xs-12 col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-8'>
                <h5>{post.title}</h5>
                <img
                  src={post.image1}
                  class='card-img-top'
                  alt='...'
                  style={{ marginBottom: 20 }}
                />
                <h6>{post.place}</h6>
                <p>{post.content}</p>
                <a href='#' class='btn btn-primary'>
                  Booking
                </a>
              </div>
            </div>
          );
        })}
        <div style={{ marginTop: 80, marginBottom: 60 }}>
          <button
            onClick={() => this.prePage()}
            disabled={currentPage === 1 ? 'disabled' : ''}
          >
            pre
          </button>
          {this.renderPage(maxPage)}
          <button
            onClick={() => this.nextPage(maxPage)}
            disabled={currentPage === maxPage ? 'disabled' : ''}
          >
            next
          </button>
        </div>
      </div>
    );
  }
}
export default Users;

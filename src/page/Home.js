import React from 'react';
import axios from 'axios';
const queryString = require('query-string');

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listData: [],
      metaInfo: {
        hasMoreItems: false,
        cursor: '',
      },
    };
  }

  componentDidMount = () => {
    this.loadData();
    const parsed = queryString.parse(this.props.location.search);
    const keyword = parsed.query || '';
    if (!keyword) {
      this.props.history.push('/');
    }
    const token = localStorage.getItem('token') || '';
    console.log('check', token);

    if (!token) {
      this.props.history.push('/login');
    }
  };

  loadData = async () => {
    const { metaInfo } = this.state;

    const url = `https://d2irr0mp54galb.cloudfront.net/cms/read/en-AU`;

    let result = await axios({
      method: 'post',
      url,
      data: {
        operationName: 'ListBlogPosts',
        query: `query ListBlogPosts {
            listBlogPosts(
              limit: 2
              sort: postDate_DESC
              after: "${metaInfo.cursor || ''}="
            ) {
              data {
                content
                slug
                title
                thumbnail
                postDate
                description
       
      
               
              }
              meta {
                totalCount
                hasMoreItems
                cursor
              }
             }
            }`,
      },
      headers: {
        Authorization: `a67550392f105ba5ecb8765d866b06a2735f96269b96767c`,
        'Content-Type': 'application/json',
      },
    });

    result = result.data;
    const {
      data: {
        listBlogPosts: { data, meta },
      },
    } = result;

    const { listData } = this.state;
    this.setState({
      listData: !metaInfo.cursor ? data : [...[], ...listData].concat(data),
      metaInfo: meta,
    });
  };

  loadMore = () => {
    this.loadData();
  };

  render() {
    const { listData, metaInfo } = this.state;

    return (
      <div className='container' style={{ marginTop: 30, marginBottom: 50 }}>
        {listData.map((post, i) => {
          return (
            <div className='content' key={i}>
              <h4>{post.title}</h4>

              <span>
                <img src={post.thumbnail} style={{ maxWidth: 200 }} />
              </span>

              <br />

              <h4>{post.slug}</h4>
              <p>
                {post.description}
                <br />

                {post.postDate}
              </p>
            </div>
          );
        })}
        <br />

        {metaInfo.hasMoreItems && (
          <button className='btn btn-dark' onClick={() => this.loadMore()}>
            Load more
          </button>
        )}
      </div>
    );
  }
}

export default Home;

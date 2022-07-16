import React from 'react';
import axios from 'axios';
class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      count: 0,
    };
  }

  increment = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };
  async componentDidMount() {
    let res = await axios.get('https://jsonplaceholder.typicode.com/posts');
    console.log('check', this.setState);
    this.setState({
      posts: res.data,
    });
  }

  handleDelete = async (e, id) => {
    e.preventDefault();
    let res = await axios.delete(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );
    console.log(res.data);
    const posts = this.state.posts.filter((post) => post.id !== id);
    this.setState({
      posts,
    });
  };

  render() {
    const { posts } = this.state;
    return (
      <div className='container' style={{ maxWidth: 1200, marginTop: 40 }}>
        <table className='table table-bordered'>
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Body</th>
            </tr>
          </thead>
          <tbody>
            {posts.map((post) => (
              <tr key={post.id}>
                <td>{post.id}</td>
                <td>{post.title}</td>
                <td>{post.title}</td>
                <td>
                  <button
                    className='btn btn-danger'
                    onClick={(e) => this.handleDelete(e, post.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {/* <button onClick={(e) => this.increment(e)}>Count</button>
        {this.state.count} */}
      </div>
    );
  }
}
export default Product;

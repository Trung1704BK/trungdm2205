// import React from 'react';
// import axios from 'axios';
// class Api extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       posts: [],
//     };
//   }

//   async componentDidMount() {
//     let res = await axios.get('http://localhost/php_api/api/post/read.php');
//     console.log('check', this.setState);
//     this.setState({
//       posts: res.data.data,
//     });
//   }

//   render() {
//     const { posts } = this.state;
//     return (
//       <div>
//         <table className='table table-bordered'>
//           <thead>
//             <tr>
//               <th>ID</th>
//               <th>Title</th>
//               <th>Content</th>
//               <th>Author</th>
//             </tr>
//           </thead>
//           <tbody>
//             {posts.map((post) => (
//               <tr key={post.id}>
//                 <td>{post.id}</td>
//                 <td>{post.title}</td>
//                 <td>{post.body}</td>
//                 <td>{post.author}</td>
//                 <td></td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     );
//   }
// }
// export default Api;

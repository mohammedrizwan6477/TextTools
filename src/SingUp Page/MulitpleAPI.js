import axios from "axios";
// import "./styles.css";
import { Fragment, useEffect, useState } from "react";

const API = {
  post: "https://gorest.co.in/public/v2/posts",
  user: "https://gorest.co.in/public/v2/users",
  comments: "https://gorest.co.in/public/v2/comments"
};

export default function MultipleAPI() {
  // We want to develop a basic UI for a blog
  // We have APIS for posts, users, comments.
  // Each post has user_id that maps to an ID in the user response
  // Each comment has post_id which maps it to the post
  // 1. Show a list of posts with author's user_id first
  // 2. Show user name for each post if available which can be looked from the users api response, otherwise show 'Anonymous'
  // 3. Show comments for each post otherwise show 'No comments available'
  // No styling is required
  // Write below this line
  const [post, setPost] = useState([]);
  const [users, setUser] = useState([]);
  const [comments, setComment] = useState([]);

  const getData = async () => {
    const res = await axios.get(API.post);
    setPost(res.data);
    const userRes = await axios.get(API.user);
    // console.log(userRes);
    setUser(userRes.data);
    const commentRes = await axios.get(API.comments);
    setComment(commentRes.data);
  };

  const getUserName = (userId) => {
    const user = users.find((user) => user.id === userId);
    return user ? user.name : "Anonymous";
  };

  const getComments = (postId) => {
    const postComments = comments.filter(
      (comment) => comment.post_id === postId
    );
    return postComments.length > 0
      ? postComments.map((comment) => comment.body).join(", ")
      : "No comments available";
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <h3>Post</h3>
      <table >
        <tbody>
          <tr>
            <th>ID</th>
            <th>USerId</th>
            <th>name</th>
          </tr>
          {post.map((item, index) => {
            // debugger;

            // console.log(user[index]);
            return (
              <>
                <tr>
                  <td>{item.id}</td>
                  <td>{item.user_id}</td>
                  <td>{getUserName(item.user_id)}</td>
                  <td>{getComments(item.id)}</td>
                </tr>
              </>
            );
          })}
          {/* {user.map((item, index) => {
            return (
              <>
                <td>{item.id}</td>
                <td>{item.name}</td>
              </>
            );
          })} */}
        </tbody>
      </table>
      {/* <tbody>
          <tr>
            <th>ID</th>
            <th>Name</th>
          </tr>
          {user.map((item, index) => {
            return (
              <>
                <tr>
                  <th>{item.id}</th>
                  <th>{item.name}</th>
                </tr>
              </>
            );
          })}
        </tbody>
      </table> */}
    </>
  );
}

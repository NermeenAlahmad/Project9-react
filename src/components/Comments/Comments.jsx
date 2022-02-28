import React, { useState, useEffect } from "react";
import "./comments.css";
import faker from "@faker-js/faker";
import AddComment from "./AddComment";
function Comments(props) {
  const [post, setPost] = useState([]);
  const [comment, setComment] = useState([]);

  useEffect(() => {
    if (localStorage.getItem("comments")) {
      let arr = JSON.parse(localStorage.getItem("comments"));
      let commnets = arr.filter((comment) => {
        return comment.postID == props.postId;
      });
      console.log(commnets);
      setComment(commnets);
    }
  }, []);

  return (
    <div className="container">
      {comment.length === 0
        ? ""
        : comment.map((comments) => (
            <div class="ui comments" key={post.id}>
              <div class="comment">
                <a class="avatar">
                  <img src={comments.img} />
                </a>
                <div class="content">
                  <a class="author">{comments.name}</a>
                  <div class="metadata">
                    <div class="date">{comments.date}</div>
                  </div>
                  <div class="text">
                    <p> {comments.comment} </p>
                    <p></p>
                  </div>
                </div>
              </div>
            </div>
          ))}

      <AddComment
        postId={props.postId}
        // setPost={setPost}
        setComment={setComment}
      />
    </div>
  );
}

export default Comments;

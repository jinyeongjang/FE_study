"use client";

import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import "../../app/styles/post_create.css";

export default function PostDetail(props) {
  const router = useRouter();
  const [editing, setEditing] = useState(false);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    fetch(`http://localhost:3001/posts/${props.params.id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setTitle(data.title);
        setContent(data.content);
      });
  };

  const handleDelete = () => {
    fetch(`http://localhost:3001/posts/${props.params.id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((result) => {
        router.push("/posts");
        router.refresh();
      });
  };

  const handleEdit = () => {
    setEditing(true);
  };

  const handleSave = () => {
    fetch(`http://localhost:3001/posts/${props.params.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, content }),
    }).then(() => {
      setEditing(false);
    });
  };

  if (!editing) {
    return (
      <>
        <div>제목 : {title}</div>
        <div>내용 : {content}</div>
        <button onClick={handleEdit}>수정</button>
        <button onClick={handleDelete}>삭제</button>
      </>
    );
  } else {
    return (
      <>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
        <button onClick={handleSave}>저장</button>
      </>
    );
  }
}

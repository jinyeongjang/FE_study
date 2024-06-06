"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import "../../app/styles/post_create.css";

export default function CreatePost() {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {});

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      title: title,
      content: content,
    };
    const res = fetch("http://localhost:3001/posts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        router.push(`/posts`);
        router.refresh();
      });
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button type="submit">작성하기</button>
      </form>
    </>
  );
}

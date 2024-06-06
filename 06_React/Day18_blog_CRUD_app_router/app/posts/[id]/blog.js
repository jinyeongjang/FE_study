import React from "react";
import Link from "next/link";

export default async function PostLists() {
  const res = await fetch("http://localhost:3001/posts", { cache: "no-store" });
  const posts = await res.json();

  return (
    <>
      <div>
        {posts.map((post) => (
          <div key={post.id}>
            <Link href={`/posts/${post.id}`}>{post.title}</Link>
          </div>
        ))}
      </div>
    </>
  );
}

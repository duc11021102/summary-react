import { Suspense, useEffect, useState } from "react";
import PostList from "../components/PostList";
import MainHeader from "../components/MainHeader";
// import NewPost from "../components/NewPost";
import Modal from "../components/Modal";
import { useLoaderData, json, defer, Await } from "react-router-dom";
import { Outlet } from "react-router-dom";

const data = [
  { id: 1, author: "Max", body: "Let's get start" },
  { id: 2, author: "Tom", body: "Let's get end" },
  { id: 3, author: "Jack", body: "Let's get center" },
];

function Posts() {
  return (
    <>
    <Outlet/>
      <main>
        <PostList></PostList>
      </main>
    </>
  );
}

export default Posts;

// async function loadPosts() {
// }

export async function loader() {
    const response = await fetch("http://localhost:8080/posts");
    const resData = await response.json();
    return resData.posts;
}

import classes from "./NewPost.module.css";
import { useState } from "react";
import Modal from "../components/Modal";
import { Link, redirect } from "react-router-dom";
import { Form } from "react-router-dom";
function NewPost(props) {
  // const [author, setAuthor] = useState("");
  // const [body, setBody] = useState("");

  // const bodyChangeHandler = (event) => {
  //   setBody(event.target.value);
  // };
  // const authorChangeHandler = (event) => {
  //   setAuthor(event.target.value);
  // };

  // const submitHandler = (event) => {
  //   event.preventDefault();
  //   props.addNewPost(author, body);
  // };

  return (
    <Modal>
      <Form method="post" className={classes.form} >
      <p>
        <label htmlFor="body">Text</label>
        <textarea id="body" required rows={3} name="body" />
      </p>
      <p>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" required name="author"/>
      </p>
      <p className={classes.actions}>
        <Link to='..' type="button">
          Cancel
        </Link>
        <button type="submit">Submit</button>
      </p>
    </Form>
    </Modal>
  );
}

export default NewPost;

export async function action({request}) {
  const formData = await request.formData();
  const postData = Object.fromEntries(formData);
  const response = await fetch("http://localhost:8080/posts" , {
    method: 'POST',
    body: JSON.stringify(postData),
    headers: {'Content-Type': 'application/json'}
  });
  return redirect('/');
}

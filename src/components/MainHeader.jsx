import { MdPostAdd, MdMessage } from 'react-icons/md';
import { NavLink } from 'react-router-dom';
import classes from './MainHeader.module.css';

function MainHeader(props) {
  return (
    <header className={classes.header}>
      <h1 className={classes.logo}>
        <MdMessage />
        React Poster
      </h1>
      <p>
        <NavLink to='/create-post' className={classes.button} onClick={props.onCreate}>
          <MdPostAdd size={18} />
          New Post
        </NavLink>
      </p>
    </header>
  );
}

export default MainHeader;
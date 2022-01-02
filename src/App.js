//import logo from './logo.svg';
import './App.css';

import { Router } from "@gatsbyjs/reach-router";
import Posts from './components/posts'
import Post from './components/post'
import Submit from './components/submit'

function App() {
  return (
    <Router>
      <Posts path="/" />
      <Post path="/posts/:id" />
      <Submit path="/submit" />
    </Router>
  );
}

export default App;

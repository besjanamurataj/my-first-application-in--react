import logo from './logo.svg';
import './App.css';
import PostForm from './PostForm';
import LoginForm from './LoginPage';
import Home from './api/Home';

function App() {
  return (
    <div>
      <PostForm/>
      {/* <LoginForm/> */}
      <Home/>
    </div>
  );
}

export default App;

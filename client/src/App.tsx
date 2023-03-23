import './App.scss';
import axios from 'axios';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from 'components/Header';
import Main from 'pages/Main';
import NotFound from 'pages/NotFound';
import Login from 'pages/Login';
import Join from 'pages/Join';
import MyPage from 'pages/MyPage';
import Portfolio from 'pages/Portfolio';
import Profile from 'pages/Profile';
import Terms from 'pages/Terms';
import PostDetail from 'pages/PostDetail';


function App() {
  const URL:string = process.env.REACT_APP_BASE_URL!;
  axios.get(URL)
  .then(res => {
    console.log(res.data);
  })
  .catch(err => {
    console.log(err);
  })
  return (
    <div className="App">
      <BrowserRouter>
				<Header />
				<Routes>
					<Route path="/" element={<Main />}></Route>
					<Route path="/mypage" element={<MyPage />}></Route>
					<Route path="/profile" element={<Profile />}></Route>
					<Route path="/portfolio" element={<Portfolio />}></Route>
					<Route path="/post/:postId" element={<PostDetail />}></Route>
					<Route path="/login" element={<Login />}></Route>
          <Route path="/terms" element={<Terms />}></Route>
					<Route path="/join" element={<Join />}></Route>
					<Route path="*" element={<NotFound />}></Route>
				</Routes>
			</BrowserRouter>
    </div>
  );
}

export default App;

import "./App.css";
import { Footer } from "../components/Footer";
import Header from "../components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import SideBar from "../components/SideBar";
import CreatePost from "../components/CreatePost";
import Post from "../components/Post";
import { useState } from "react";
import PostListProvider from "../store/post-list-store";
import PostList from "../components/PostList";
import { Outlet } from "react-router-dom";

function App() {
  const [sidebarName, setSidebarName] = useState("Home");
  return (
    <PostListProvider>
      <div className="sidebar-container">
        <SideBar />
        <div className="main-container">
          <Header></Header>
          <Outlet />
          <Footer></Footer>
        </div>
      </div>
    </PostListProvider>
  );
}

export default App;

import "./App.css";
import { Footer } from "./components/Footer";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import SideBar from "./components/SideBar";
import CreatePost from "./components/CreatePost";
import Post from "./components/Post";
import { useState } from "react";
import PostListProvider from "./store/post-list-store";
import PostList from "./components/PostList";

function App() {
  const [sidebarName, setSidebarName] = useState("Home");
  return (
    <PostListProvider>
      <div className="sidebar-container">
        <SideBar
          sidebarName={sidebarName}
          setSidebarName={setSidebarName}
        ></SideBar>
        <div className="main-container">
          <Header></Header>
          {sidebarName === "Home" ? (
            <PostList></PostList>
          ) : (
            <CreatePost></CreatePost>
          )}

          <Footer></Footer>
        </div>
      </div>
    </PostListProvider>
  );
}

export default App;

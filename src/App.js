import { Routes, Route, Outlet, Link } from "react-router-dom";
import React from 'react';
import Home from './components/Home';
import Nav from './components/Nav';
import NewBlog from "./components/NewBlog";
import About from "./components/About";
import BlogDetails from "./components/BlogDetails";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route exact path="create" element={<NewBlog />} />
        <Route exact path="blogs/:id" element={<BlogDetails />} />
        <Route exact path="about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

function Layout() {
  return (
    <div className="App">
      <Nav />
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
}

function NotFound() {
  return (
    <div className="not-found">
      <h2>Sorry</h2>
      <p>That page cannot be found</p>
      <Link to={'/'}>Back to Home Page</Link>
    </div>
  );
}

function App() {
  return (
    <AppRoutes />
  );
}

export default App;



import { Link } from "react-router-dom"

const BlogPreview = ({ blogs, listTitle, handleDeleteBlog }) => {
  return (
    <div className="blog-list">
      <h2>{listTitle}</h2>
      {blogs.map(blog => (
        <div className="blog-preview" key={blog.id}>
          <Link to={`/blogs/${blog.id}`}>
            <h2>{blog.title}</h2>
            <p>Written by {blog.author}</p>
          </Link>
          {/* <button onClick={() => { handleDeleteBlog(blog.id) }}>Delete Blog</button> */}
        </div>
      ))}

    </div>
  )
}

export default BlogPreview
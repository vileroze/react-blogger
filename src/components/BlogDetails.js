import React from 'react'
import useFetchData from './useFetchData'
import { useNavigate, useParams } from 'react-router-dom';


const BlogDetails = () => {
    const navigate = useNavigate();
    const { id } = useParams(); 
    const { data: blog, loading, error } = useFetchData('http://localhost:8000/blogs/' + id);

    const handleDeleteBlog = async (id) => {
        await fetch('http://localhost:8000/blogs/'+id, {
            method: 'DELETE',
        });
        navigate('/');
    }

    return (
        <div className="blog-details">
            {loading && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {blog && <article>
                <h2>{blog.title}</h2>
                <p>Written by {blog.author}</p>
                <div>{blog.body}</div>
                <button onClick={() => { handleDeleteBlog(blog.id) }}>delete</button>
            </article>}
        </div>
    )
}

export default BlogDetails
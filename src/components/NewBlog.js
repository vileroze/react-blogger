import React, { useState } from 'react'


const NewBlog = () => {

  const [newBlogData, setNewBlogData] = useState({ title: '', body: '', author: 'mario' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewBlogData((prevBlogData) => ({ ...prevBlogData, [name]: value }));
  }

  const handleSubmit = async () => {
    setIsSubmitting(true);
    await fetch('http://localhost:8000/blogs', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newBlogData)
    });
    setIsSubmitting(false);
  }

  return (
    <div className="create">
      <h2>Add a New Blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog title:</label>
        <input
          name='title'
          type="text"
          required
          value={newBlogData.title}
          onChange={(e) => { handleChange(e) }}
        />
        <label>Blog body:</label>
        <textarea
          required
          name='body'
          value={newBlogData.body}
          onChange={(e) => { handleChange(e) }}
        ></textarea>
        <label>Blog author:</label>
        <select
          name='author'
          value={newBlogData.author}
          onChange={(e) => { handleChange(e) }}
        >
          <option value="mario">mario</option>
          <option value="yoshi">yoshi</option>
        </select>
        <button>{isSubmitting ? 'Submitting...' : 'Add Blog'}</button>
      </form>
    </div>
  )
}

export default NewBlog
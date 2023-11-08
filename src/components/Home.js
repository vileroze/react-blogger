import Bloglist from './BlogList';
import useFetchData from './useFetchData';

const Home = () => {
    
    const {data: blogs, loading, error, handleDeleteIndData: handleDeleteBlog} = useFetchData('http://localhost:8000/blogs');

    return (
        <div className="home">
            {error && <div>{error}</div>} {/* Display error message */}
            {loading ? <div>Loading...</div> : blogs && <Bloglist blogs={blogs} listTitle={'All Blogs'} handleDeleteBlog={handleDeleteBlog} />}
        </div>
    )
}

export default Home
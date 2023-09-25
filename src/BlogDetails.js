import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { useHistory } from "react-router-dom";


const BlogDetails = () => {

    const {idChanges} = useParams()
    const { data: blogs, isPending, MyError } = useFetch('http://localhost:8000/blogs' + idChanges);
    const myhomeHistory = useHistory();

    const handleDelete = () =>{
        fetch('http://localhost:8000/blogs' + blogs.id,{
            method: 'DELETE'
        })
        .then(() => {
            myhomeHistory.push('/');
        })
    }
    console.log(blogs);


    return (  
        <div className="blog-details">
            <h2> New Blog Details - {idChanges} </h2>
            {MyError && <p>{MyError}</p>}
            { isPending && <p> Loading ....</p>}
            {blogs && (
                <article>
                    <h2>{blogs.title}</h2>
                    <p>written by {blogs.author}</p>
                    <div>{blogs.body}</div>
                    <button onClick={handleDelete}> Delete Blog</button>
                </article>
            )}
        </div>
    );
}
 
export default BlogDetails;
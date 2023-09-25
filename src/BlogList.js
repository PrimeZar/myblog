import {Link} from 'react-router-dom';


const BlogList = ({blogs,title}) => {
    // out 4
// const BlogList = ({blogs,title,handleDelete}) => {
// const BlogList = (props) => {
    // const blogs = props.blogs;
    // const title = props.title;


    return ( 
        <div className="bloglist">
            <h1>{title}</h1>
             {blogs.map((singleBlog)=>(
                <div className="blog-preview" key={singleBlog.id}> 
                    <Link to = {`/myBlog/${singleBlog.id}`}>
                        <h2>{singleBlog.title}</h2>
                        
                        <p>witten by <span style={{color:'red'}}>{singleBlog.author }</span></p>
                        
                        
                        {/* <p>{singleBlog.body} <br></br>witten by <span style={{color:'red'}}>{singleBlog.author }</span></p> */}
                        <p> </p>
                    </Link>
                    {/* out 4 */}
                    {/* <button onClick={() => handleDelete(singleBlog.id)}> Delete </button> */}

                </div>
            ))}
{/* 
           {blogs.map((sblog)=>(
            <div className='home' key={sblog.id}>
                {sblog.title}
            </div>
           ))} */}
        </div>
     );
}
 
export default BlogList;
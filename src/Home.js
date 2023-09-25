// out 3 
// import {useState, useEffect} from 'react';
import BlogList from './BlogList';
import useFetch from './useFetch';

const Home = () => {
    const { data: blogs, isPending, MyError } = useFetch('http://localhost:8000/blogs');
    // out 3
    // const [blogs,setBlogs] = useState(null);
    // const [isPending, setisPending] = useState(true);
    // const [Myerror, setMyError] = useState(null);

    // const [blogs, setBlogs] = useState([
    //     {title:'My new website', body:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, deserunt', author:'Liquid-Money', id:1},
    //     {title:'Welcome Party', body:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, deserunt', author:'yoshi', id:2},
    //     {title:'Web dev top tips', body:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, deserunt', author:'mario', id:3},
    //     {title:'Coding Life Style', body:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, deserunt', author:'Liquid-Money', id:4}
    // ]);
    
    // out 3
    // const handleDelete = (id) => {
    //     const newblogs = blogs.filter(singleBlog => singleBlog.id !== id );
    //     setBlogs(newblogs);  
    // }

    // const changeName = () =>{
    //     const [name, setName] = useState('mario');   
    // }

    // const [name, setName] = useState('mario');

    // out 3
    // useEffect(() => { console.log('useEffect run') }, [name]);
    // useEffect(() => {
    //     const abortCount = new AbortController();
    //     setTimeout(() => {
    //         fetch('http://localhost:8000/blogs', {signal: abortCount.signal} )
    //         .then(res => {
    //             if (!res.ok){
    //                 throw Error (' bros, i could not fecth the data you requested for ')
    //             }
    //             return res.json();
    //         })
    //         .then(data => {
    //             setBlogs(data);
    //             setisPending(false);
    //             setMyError(null);
    //         })
            
    //         .catch(err => {
    //             if(err.name === 'AbortError'){
    //                 console.log('fetch aborted');
    //             }else{
    //                 setMyError(err.message);
    //                 setisPending(false);
    //             }  
    //         })

    //     }, 1000);

    //     return () => abortCount.abort();
    // }, [ ] );

    

    return ( 
        
        <div className="home">
            {MyError && <p>{MyError}</p>}
            { isPending && <p> Loading ....</p>}
            
            {blogs && <BlogList blogs={blogs}  title='All my Blogs !'/> }
            

            {/* out 3 */}
            {/* {blogs && <BlogList blogs={blogs} handleDelete={handleDelete}  title='All my Blogs !'/> } */}

            {/* <BlogList blogs={blogs.filter((blogs)=> blogs.author ==='Liquid-Money')} title='Liquid-Money Blogs only' handleDelete={handleDelete}/>
         */}
        </div>
    );
};
 
export default Home;
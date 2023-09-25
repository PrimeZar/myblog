import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
    const [ title, setTitle] = useState('');
    const [ body, setBody] = useState('');
    const [ author, setAuthor] = useState('Liquid Money');
    const [isPending, setIsPending] = useState(false);
    const myHistory = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const submitItems = { title, body,author};
        setIsPending(true);

        setTimeout(() => {
            fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify(submitItems)
        })
        .then(() => { setIsPending(false) })
            myHistory.push('/');
            // myHistory.go(-1);
        },2000 );

        
        
    }

    return (  
        <div className="create">
        <h2>My Create page</h2>
        <form onSubmit={handleSubmit}>
            <label> Blog Title:</label>

            <input type="text" onChange={(e)=> setTitle(e.target.value)} value={title} required />
            <label> Blog Body: </label>
            <textarea onChange={(e)=> setBody(e.target.value)} value={body} required></textarea>
            <label> Blog Author :</label>  
            <select onChange={(e) => setAuthor(e.target.value)}>
                <option value = 'Liquid'>Liquid Money</option>
                <option value = 'airplane'>Airplane</option>
                <option value='speed boat'>Speed Boat</option>
                
            </select> 
            {!isPending && <button> Add Blogs </button>}
            {isPending && <button>Adding Blog.... </button>}
            <p>{title}</p>
            <p>{body}</p>
            <p>{author}</p>
        </form>
        </div>
    );
}
 
export default Create;

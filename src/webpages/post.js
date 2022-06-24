import React, { useState, useEffect }  from 'react';
import { useParams } from "react-router-dom";
import Typography from '@mui/material/Typography';

const Post = props => {

    let { id } = useParams(); 

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [post, setPost] = useState([]);
    
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts/" + id)
            .then(res => res.json())
            .then(
                (data) => {
                    console.log(data);
                    setPost(data);
                    setIsLoaded(true);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [])    
    
    if (error) {
        return <div>Error: {error.message}</div>;
    }
    if (!isLoaded) {
        return <div>Loading...</div>;
    }  
    
    if (post) {
        return (
            	<div>
		        <h1 style={{ textTransform: 'uppercase', marginBottom: '35px', marginLeft: '40px' }}>{post.title}</h1>
		        
		        <div style={{ marginLeft: '40px' }}>
		            <Typography component="h2" color="primary">
				{post.body}
			    </Typography>
		        </div>
		</div>        
        );
    }
}

export default Post;

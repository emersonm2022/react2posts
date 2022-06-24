import React, { useState, useEffect }  from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import ArticleIcon from '@mui/icons-material/BackupTable';

const Home = () => {

const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [posts, setPosts] = useState([]);    
    
    useEffect(() => {
        fetch(" https://jsonplaceholder.typicode.com/posts/")
            .then(res => res.json())
            .then(
                (data) => {
                    setIsLoaded(true);
                    setPosts(data);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
      }, []);
    if (error) {
        return <div>Error: {error.message}</div>;
    } 
    else if (!isLoaded) {
        return <div>Loading...</div>;
    } 
    else {
        return (
   	    <div>
	   	    <h1 style={{ marginBottom: '35px', marginLeft: '40px' }}>NOTÍCIAS DO DIA</h1>

		    <ul class="sub-menu" type="none">
		        {posts.map(post => (
		        <li style={{ marginBottom: '15px' }}>
		            <ArticleIcon color="action" /><Link to={`post/${post.id}`}><Button>{post.title}</Button></Link>
		        </li>
		        ))}
		    </ul>
            </div>
        );
    }
}

export default Home;

import { useState, useEffect, useContext } from "react";
import axios from 'axios';
import { tokenContext } from "../shared/context/tokenContext";

export function usePostsData(){
    const [posts, setPosts] = useState([]);
    const token = useContext(tokenContext);
    
    useEffect( () => {
        axios.get('https://oauth.reddit.com/top.json?sr_detail=true', {
            headers: { Authorization: `bearer ${token}`}
        })
        .then((resp) => {
            const postsData = resp.data.data.children;
            setPosts(postsData);
        })
        .catch(console.log);
    }, [token])

    return [posts]
}
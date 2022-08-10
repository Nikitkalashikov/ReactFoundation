import { useState, useEffect, useContext } from "react";
import axios from 'axios';
import { postsContext } from '../shared/context/postsContext';
import { tokenContext } from "../shared/context/tokenContext";

// interface IPostsData {
//     postsData?: [] // Пробовал json/ Array
// }

export function usePostsData(){
    const [posts, setPosts] = useState([]);
    // const postsData = useContext(postsContext);
    const token = useContext(tokenContext);
    
    useEffect( () => {
        // axios.get('https://www.reddit.com/r/redditdev/best.json?limit=15&sr_detail=true')
        axios.get('https://oauth.reddit.com/best.json?sr_detail=true', {
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
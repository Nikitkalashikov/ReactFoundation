import { useState, useEffect, useContext } from "react";
import axios from 'axios';

interface IPostComments {
    id: string;
    subreddit: string;
}

export function usePostComments(props: IPostComments){
    const [comments, setComments] = useState([]);
    
    useEffect( () => {
        axios.get(`http://api.reddit.com/r/${props.subreddit}/comments/${props.id}`)
        .then((resp) => {
            const data = resp.data[1].data.children;
            setComments(data);
        })
        .catch(console.log);
    }, [])

    return [comments]
}
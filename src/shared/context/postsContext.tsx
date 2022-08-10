import React from "react";
import { usePostsData } from "../../hooks/usePostsData"; 

// export interface IPostsContextData {
//     postsData?: [] // Пробовал json/ Array
// }

export const postsContext = React.createContext([]);

export function PostsContext( {children} : { children: React.ReactNode }){
    const [posts] = usePostsData();

    return (
        <postsContext.Provider value={posts}>
            {children}
        </postsContext.Provider>
    );
}
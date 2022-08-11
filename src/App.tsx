import React, {useState} from 'react';
import './main.global.scss';
import { hot } from 'react-hot-loader/root';
import { Layout } from './shared/Layout/Layout';
import { Header } from './shared/Header/Header';
import { Content } from './shared/Content/Content';
import { CardsList } from './shared/CardsList/CardsList';
import { useToken } from './hooks/useToken';
import { tokenContext } from './shared/context/tokenContext';
import { UserContextProvider } from './shared/context/userContext';
import { PostsContext } from './shared/context/postsContext';
import { commentContext } from './shared/context/commentContext';

function AppComponent(){
    const [commentValue, setCommentValue] = useState('');

    const [token] = useToken();

    const CommentProvider = commentContext.Provider;

    return (
        <CommentProvider value={{
            value: commentValue,
            onChange: setCommentValue,
        }}>
            <tokenContext.Provider value={token}>
                <UserContextProvider>    
                    <Layout>
                        <Header />
                        <Content>
                            <PostsContext>
                                <CardsList />
                            </PostsContext>
                        </Content>
                    </Layout>
                </UserContextProvider>
            </tokenContext.Provider>
        </CommentProvider>    
    );
}

export const App = hot( () => <AppComponent/>);
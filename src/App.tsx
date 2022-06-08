import React from 'react';
import './main.global.scss';
import { hot } from 'react-hot-loader/root';
import { Layout } from './shared/Layout/Layout';
import { Header } from './shared/Header/Header';
import { Content } from './shared/Content/Content';
import { CardsList } from './shared/CardsList/CardsList';
import { useToken } from './hooks/useToken';
import { tokenContext } from './shared/context/tokenContext';
import { UserContextProvider } from './shared/context/userContext';

function AppComponent(){
    const [token] = useToken();

    return (
        <tokenContext.Provider value={token}>
            <UserContextProvider>    
                <Layout>
                    <Header />
                    <Content>
                        <CardsList />
                    </Content>
                </Layout>
            </UserContextProvider>
        </tokenContext.Provider>    
    );
}

export const App = hot( () => <AppComponent/>);
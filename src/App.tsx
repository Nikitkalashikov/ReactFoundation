import React from 'react';
import './main.global.scss';
import { hot } from 'react-hot-loader/root';
import { Layout } from './shared/Layout/Layout';
import { Header } from './shared/Header/Header';
import { Content } from './shared/Content/Content';
import { CardsList } from './shared/CardsList/CardsList';
import { Dropdown } from './shared/Dropdown/Dropdown';
import { EColor, Text } from './shared/Text/Text';

function AppComponent(){
    return (
        <Layout>
            <Header />
            <Content>
                <CardsList />
                <br/>
                <Text size={20} mobileSize={28} color={EColor.orange}>Label 1</Text>
                <Text size={20}>Label 2</Text>
                <Text size={10} mobileSize={14}>Label 3</Text>
            </Content>
        </Layout>
    );
}

export const App = hot(AppComponent);
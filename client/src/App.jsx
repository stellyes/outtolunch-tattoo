import React from 'react';
import Container from 'react-bootstrap/Container';
import { Outlet } from 'react-router-dom';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

import Footer from './components/Footer';

const client = new ApolloClient({
    cache: new InMemoryCache(),
});

const App = () => {
    return (
        <ApolloProvider client={client}>
            <Container>
                <Outlet />
                <Footer />
            </Container>
        </ApolloProvider>
    );
};

export default App;
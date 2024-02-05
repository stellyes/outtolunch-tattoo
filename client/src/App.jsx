import React from 'react';
import Container from 'react-bootstrap/Container';

const App = () => {
    return (
        <ApolloProvider client={client}>
            <Outlet />
        </ApolloProvider>
    );
};

export default App;
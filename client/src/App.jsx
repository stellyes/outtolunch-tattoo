import React from 'react';
import Container from 'react-bootstrap/Container';

const App = () => {
    return (
        <Container>
            <Outlet />
        </Container>
    );
};

export default App;
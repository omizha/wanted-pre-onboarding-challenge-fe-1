import React from 'react';
import styled from '@emotion/styled';
import { Container } from 'src/component';
import TodoDetail from './TodoDetail';
import TodoList from './TodoList';

const Home = () => {
  return (
    <Container>
      <Grid>
        <Row>
          <TodoList />
        </Row>
        <Row>
          <TodoDetail />
        </Row>
      </Grid>
    </Container>
  );
};

const Grid = styled.div({
  width: '100%',
  height: '100%',
  display: 'grid',
  gridTemplateRows: '1fr 1fr',
});

const Row = styled.div({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'stretch',
  width: '100%',
  height: '100%',
  overflow: 'hidden',
});

export default Home;

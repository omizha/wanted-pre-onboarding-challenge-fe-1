import styled from '@emotion/styled';

interface Props {
  children: React.ReactNode;
}

const TodoTable = ({ children }: Props) => {
  return <Wrap>{children}</Wrap>;
};

const Wrap = styled.div({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'stretch',
  width: '100%',
  height: '100%',
  background: 'gray',
  overflowX: 'hidden',
  overflowY: 'scroll',
  padding: '16px',
  borderRadius: '8px',
  boxSizing: 'border-box',
});

const Header = styled.div({
  backgroundColor: 'blueviolet',
  width: '100%',
  height: '50px',
});

export default TodoTable;

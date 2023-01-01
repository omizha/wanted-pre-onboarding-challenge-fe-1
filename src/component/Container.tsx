import styled from '@emotion/styled';

interface Props {
  children: React.ReactNode;
}

const Container = ({ children }: Props) => {
  return (
    <Root>
      <Wrap>{children}</Wrap>
    </Root>
  );
};

const Root = styled.div({
  width: '100vw',
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
});

const Wrap = styled.div({
  display: 'flex',
  width: '390px',
  justifyContent: 'center',
  flexDirection: 'column',
  padding: '16px',
  alignItems: 'center',
  boxSizing: 'border-box',
});

export default Container;

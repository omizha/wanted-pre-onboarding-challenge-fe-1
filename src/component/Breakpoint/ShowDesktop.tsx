import type { ReactNode } from 'react';
import MediaQuery from 'react-responsive';

const ShowDesktop = ({ children }: { children: ReactNode }): JSX.Element => {
  return (
    <MediaQuery minWidth={800}>
      {children}
      {null}
    </MediaQuery>
  );
};

export default ShowDesktop;

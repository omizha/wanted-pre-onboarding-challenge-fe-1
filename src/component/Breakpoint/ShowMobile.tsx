import type { ReactNode } from 'react'
import MediaQuery from 'react-responsive'

const ShowMobile = ({ children }: { children: ReactNode }): JSX.Element => {
  return (
    <MediaQuery maxWidth={799}>
      {children}
      {null}
    </MediaQuery>
  )
}

export default ShowMobile;
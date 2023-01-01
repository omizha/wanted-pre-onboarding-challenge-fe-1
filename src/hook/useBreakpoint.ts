import { useMediaQuery } from 'react-responsive';

const useBreakpoint = () => {
  const isDesktop = useMediaQuery({ query: `(min-width: 800px)` });

  return {
    /**
     * 800px ~
     */
    isDesktop,

    /**
     * 0px ~ 799px
     */
    isMobile: !isDesktop,
  };
};

export default useBreakpoint;

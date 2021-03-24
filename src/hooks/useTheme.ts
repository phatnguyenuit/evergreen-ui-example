import { useContext } from 'react';
import { ThemeContext } from 'evergreen-ui';

const useTheme = () => {
  return useContext(ThemeContext);
};

export default useTheme;

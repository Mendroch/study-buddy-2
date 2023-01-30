import { BrowserRouter as Router } from 'react-router-dom';
import { theme } from 'assets/styles/theme';
import { GlobalStyle } from 'assets/styles/GlobalStyle';
import { AuthProvider } from 'hooks/useAuth';
import { ThemeProvider } from 'styled-components';

const AppProviders = ({ children }) => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <AuthProvider>
          <GlobalStyle />
          {children}
        </AuthProvider>
      </ThemeProvider>
    </Router>
  );
};

export default AppProviders;

import React from 'react';

const ThemeContext = React.createContext();
const { Provider } = ThemeContext;

const ThemeProvider = ({children}) => {

  const [theme, setTheme] = React.useState('light');

  const toggleTheme = () => {
    if(theme === 'light') return setTheme('dark');
    if(theme === 'dark') return setTheme('light');    
  }

  return (
    <Provider
      value={{
        theme,
        toggleTheme
      }}
    >
      {children}
    </Provider>
  )

}

export {
  ThemeContext, 
  ThemeProvider
};
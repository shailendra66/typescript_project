import React, { createContext, useState, ReactNode } from 'react';

interface ThemeContextProps {
  theme: string;
  toggleTheme: () => void;
  value:number;
  incNum:()=>void;
  decNum:()=>void
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<string>('light');
  const [value,setValue]=useState<number>(0);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const incNum=()=>{
    setValue(value+1);
  }

  const decNum=()=>{
    setValue(value-1);
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme,value,incNum,decNum }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider };

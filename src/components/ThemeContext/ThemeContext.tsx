import React,{createContext,useState,useEffect,useContext} from "react";

type Theme = "light" | "dark";

interface ThemeContextProps{
    theme:Theme;
    toggleTheme:()=> void;
}

export const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export const ThemeProvider:React.FC<{children:React.ReactNode}> = ({children})=>{
     const [theme,setTheme] = useState<Theme>(()=>{
        return(localStorage.getItem("theme") as Theme) || "light";
     });

     useEffect(()=>{
         document.documentElement.className = theme;
         localStorage.setItem("theme",theme);
     },[theme]);

     const toggleTheme = ()=>{
        setTheme(theme === "light" ? "dark" : "light");
     };

     return(
         <ThemeContext value={{theme,toggleTheme}}>
             {children}
         </ThemeContext>
     )
};

export const useTheme = ()=>{
    const context = useContext(ThemeContext);
    if(!context) throw new Error('useColor debe usarse dentro de <ColorProvider>');
    return context;
}
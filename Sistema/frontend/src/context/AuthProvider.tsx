import {
    createContext,
    useContext,
    ReactNode,
    useEffect,
    useState,
    FC,
  } from "react";
  
  type User = {
    name: string;
    role: string;
    id: string;
    email: string;
  };
  
  interface AuthContextProps {
    token: string | null;
    user: User | null;
    setAuthToken: (newToken: string | null, newUser: User | null) => void;
  }
  
  interface AuthProviderProps {
    children: ReactNode;
  }
  
  const AuthContext = createContext<AuthContextProps | undefined>(undefined);
  
  export const AuthProvider: FC<AuthProviderProps> = ({ children }) => {
    const [token, setToken] = useState<string | null>(
      localStorage.getItem("token") || null
    );
  
    const [user, setUser] = useState<User | null>(() => {
      const storedUser = localStorage.getItem("user");
      return storedUser ? JSON.parse(storedUser) : "";
    });
  
    const setAuthToken = (newToken: string | null, newUser: User | null) => {
      setToken(newToken);
      setUser(newUser);
    };
  
    useEffect(() => {
      localStorage.setItem("token", token || "");
    }, [token]);
  
    useEffect(() => {
      if (user) {
        localStorage.setItem("user", JSON.stringify(user));
      }
    }, [user]);
  
    const contextValue: AuthContextProps = {
      token,
      user,
      setAuthToken,
    };
  
    return (
      <AuthContext.Provider value={contextValue}>
        {children}
      </AuthContext.Provider>
    );
  };
  
  export const useAuth = (): AuthContextProps => {
    const context = useContext(AuthContext);
  
    if (!context) {
      throw new Error("useAuth must be used within an AuthProvider");
    }
  
    return context;
  };
  
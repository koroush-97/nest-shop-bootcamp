import { UserType } from "@/types/api/Auth";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

interface Props {
  children: ReactNode;
}

interface AuthContextType {
  isLogin: boolean;
  Login: (jwt: string, user: UserType) => void;
}

const AuthContext = createContext<AuthContextType>({
  isLogin: false,
  Login: () => {},
});

export const useUser = () => useContext(AuthContext);

export function AuthContextProvider({ children }: Props) {
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    if (window.localStorage.getItem("token")) {
      setIsLogin(true);
    }
  }, []);

  const loginHandler = (jwt: string, user: UserType) => {
    window.localStorage.setItem("token", jwt);
    window.localStorage.setItem("user", JSON.stringify(user));
    setIsLogin(true);
  };

  return (
    <AuthContext.Provider value={{ isLogin: isLogin, Login: loginHandler }}>
      {children}
    </AuthContext.Provider>
  );
}

import { createContext, FC, ReactNode, useEffect, useMemo, useState } from "react";
import { IUser, TypeSetState } from "../../types";
import { Auth, onAuthStateChanged } from "firebase/auth";
import { auth } from '../../index';
import { users } from "../layout/sidebar/dataUsers";

interface IContext {
  user: IUser | null;
  setUser: TypeSetState<IUser | null>;
  auth: Auth
}

interface IAuthProviderProps {
  children: ReactNode;
}

export const AuthContext = createContext<IContext>({} as IContext);

export const AuthProvider: FC<IAuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<IUser | null>(null);

  useEffect(() => {
    const unListen = onAuthStateChanged(auth, (authUser) => {
      setUser( authUser ?{
		id: authUser?.uid,
		avatar: users[0].avatar,
		name: authUser?.displayName || ''
	  } :  null);
    });
    return () => {
      unListen();
    };
  }, []);

  const values = useMemo(() => ({
	user, setUser, auth
  }), [user])

  return (
    <AuthContext.Provider value={values}>
      {children}
    </AuthContext.Provider>
  );
};
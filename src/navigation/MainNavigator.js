import { NavigationContainer } from "@react-navigation/native";
import AuthStack from "./AuthStack";
import TabNavigator from "./TabNavigator";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { setUser } from "../features/auth/authSlice";
import { fetchSession } from "../db";

const MainNavigator = () => {
  const idToken = useSelector((state) => state.auth.idToken);
  const dispatch = useDispatch();
  useEffect(() => {
    (async () => {
      const sessions = await fetchSession();
      if (sessions) dispatch(setUser(sessions));
    })();
  }, []);

  return (
    <NavigationContainer>
      {idToken ? <TabNavigator /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default MainNavigator;

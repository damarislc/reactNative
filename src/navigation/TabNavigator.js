import { StyleSheet } from "react-native";
import ShopStack from "./ShopStack";
import CartStack from "./CartStack";
import OrdersStack from "./OrdersStack";
import { colors } from "../global/colors";
import TabBarIcon from "../components/TabBarIcon";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ProfileStack from "./ProfileStack";

const Tab = createBottomTabNavigator();
//createBottomTabNavigator

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBar,
      }}
    >
      <Tab.Screen
        name="HomeStack"
        component={ShopStack}
        options={{
          tabBarIcon: ({ focused }) => {
            return <TabBarIcon focused={focused} icon="home" text="Inicio" />;
          },
        }}
      />
      <Tab.Screen
        name="CartStack"
        component={CartStack}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <TabBarIcon
                focused={focused}
                icon="shopping-cart"
                text="Carrito"
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="OrdersStack"
        component={OrdersStack}
        options={{
          tabBarIcon: ({ focused }) => {
            return <TabBarIcon focused={focused} icon="list" text="Ordenes" />;
          },
        }}
      />
      <Tab.Screen
        name="ProfileStack"
        component={ProfileStack}
        options={{
          tabBarIcon: ({ focused }) => {
            return <TabBarIcon focused={focused} icon="user" text="Perfil" />;
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: colors.lightGray,
    padding: 5,
    height: 80,
    shadowColor: "black",
  },
});

import { StatusBar } from "expo-status-bar";
import { StyleSheet, useWindowDimensions } from "react-native";
import { useFonts } from "expo-font";
import { fonts } from "./src/global/fonts";
import { colors } from "./src/global/colors";
import { store } from "./src/app/store";
import { Provider } from "react-redux";
import MainNavigator from "./src/navigation/MainNavigator";
import MyProfile from "./src/screens/MyProfile";
import ImageSelector from "./src/screens/ImageSelector";
import LocationSelector from "./src/screens/LocationSelector";
import { init } from "./src/db";

export default function App() {
  init()
    .then()
    .catch((err) => console.error("Initialization DB failed", err));
  const [fontLoaded] = useFonts(fonts);
  if (!fontLoaded) return null;

  /*  const { width, height } = useWindowDimensions;
  const [isPortrait, setIsPortrait] = useState(true);

  useEffect(() => {
    if (width < height) {
      setIsPortrait(true);
    } else setIsPortrait(false);
  }, [width, height]); */

  return (
    <>
      <Provider store={store}>
        <MainNavigator />
      </Provider>
      <StatusBar style="dark" backgroundColor={colors.lightGray} />
    </>
  );
}

const styles = StyleSheet.create({});

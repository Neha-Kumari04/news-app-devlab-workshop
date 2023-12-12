import { StatusBar } from "expo-status-bar";
import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  TextComponent,
  TextInput,
  View,
  ViewComponent,
} from "react-native";
import Category from "./Components/Category";
import NewsCart from "./Components/NewsCart";

export default function App() {
  return (
    <>
      <StatusBar type="auto" />
      <SafeAreaView style={{ backgroundColor: "#003451", flex: 1 }}>
        <View style={styles.navbarConatiner}>
          <Text style={styles.goodMorgText}>Good Morning</Text>
          <Text style={styles.secondLIneText}>
            Explore the world by one Tap
          </Text>
        </View>

        <Category />
        {/* news cart */}
        <View style={styles.newsCart}>
          <NewsCart />
          <NewsCart />
          <NewsCart />
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  navbarConatiner: {
    marginTop: 25,
    marginLeft: 20,
  },
  goodMorgText: {
    fontSize: 35,
    fontWeight: "700",
    color: "#fff",
    paddingBottom: 5,
  },
  secondLIneText: {
    color: "#fff",
    fontSize: 15,
  },
  newsCart: {
    margin: 20,
    padding: 5,
  },
});

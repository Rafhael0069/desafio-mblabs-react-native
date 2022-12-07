
import React from "react";
import { StyleSheet, Text, View} from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import Courses from '../Courses'
import Parceiros from "../Parceiros"
import Confuguracoes from "../Configuracoes"

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Cursos">
        <Drawer.Screen name="Cursos" component={Courses} />
        <Drawer.Screen name="Parceiros" component={Parceiros} />
        <Drawer.Screen name="Configutrações" component={Confuguracoes} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

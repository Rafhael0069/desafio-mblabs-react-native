import React from 'react';
import { StyleSheet, Text, View} from "react-native";

export default function Configuracoes() {
  return (
    <View style={styles.container}>
      <Text>Pagina Configuracoes!</Text>
    </View>
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
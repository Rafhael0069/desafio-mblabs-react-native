import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";

export default function Actions() {
  return (
    <ScrollView
      style={styles.container}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
    >
      <TouchableOpacity style={styles.actionButton}>
        <View style={styles.areaButton}>
          <Text style={styles.labelButton}>Design</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.actionButton}>
        <View style={styles.areaButton}>
          <Text style={styles.labelButton}>Java</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.actionButton}>
        <View style={styles.areaButton}>
          <Text style={styles.labelButton}>Marketing</Text>
        </View>
      </TouchableOpacity>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    maxHeight: 84,
    marginBottom: 14,
    marginTop: 18,
    paddingEnd: 14,
    paddingStart: 14,
  },
  actionButton: {
    alignItems: "center",
    marginRight: 12,
  },
  areaButton: {
    backgroundColor: "#ecf0f1",
    height: 40,
    width: 130,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  labelButton: {
    textAlign: "center",
    fontWeight: "bold",
  },
});

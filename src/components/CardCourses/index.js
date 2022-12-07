import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { MotiView, AnimatePresence, MotiText } from "moti";

export default function CardCourses({ data }) {
  const [showDescripition, setShowDescripition] = useState(false);
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={styles.cardCourse}
      onPress={() => setShowDescripition(!showDescripition)}
    >
      <View style={styles.cardContent}>
        <Image
          style={styles.cardImage}
          source={{
            uri: data.image,
          }}
        />
        <View style={styles.cardTexts}>
          <Text style={styles.cardTitle}>{data.titulo}</Text>
          <Text style={styles.cardHig}>{data.plataforma}</Text>
          <Text style={styles.cardResume}>{data.resumo}</Text>
        </View>
      </View>
      {showDescripition ? (
        <AnimatePresence exitBeforeEnter>
          <MotiText
            style={styles.cardDescriotion}
            from={{
              translateY: -60,
              opacity: 0,
            }}
            animate={{
              translateY: 0,
              opacity: 1,
            }}
            transition={{
              type: "timing",
              duration: 200,
            }}
          >
            {data.descricao}
          </MotiText>
        </AnimatePresence>
      ) : null}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  cardCourse: {
    backgroundColor: "#dadada",
    width: "100%",
    margin: 10,
    padding: 5,
  },
  cardContent: {
    flexDirection: "row",
  },
  cardImage: {
    width: 60,
    height: 60,
  },
  cardTexts: {
    marginStart: 10,
  },
});

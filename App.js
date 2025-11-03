// App.js - DCIT 26 Laboratory 2 (Color-Enhanced Version)
import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

export default function App() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Student Profile</Text>

        <View style={styles.row}>
          <Text style={styles.label}>Name:</Text>
          <Text style={styles.value}>Reaven Miano</Text> {/* ← replace */}
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Age:</Text>
          <Text style={styles.value}>20</Text> {/* ← replace */}
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Course / Year / Section:</Text>
          <Text style={styles.value}>BSCS / 3rd Year / 3</Text> {/* ← replace */}
        </View>

        <View style={styles.section}>
          <Text style={styles.subTitle}>About Me</Text>
          <Text style={styles.paragraph}>
            I am a motivated student interested in Machine Learning and web
            development. I enjoy learning React Native and practicing
            algorithms.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.subTitle}>Achievements</Text>
          <Text style={styles.paragraph}>
            • Personal Project finished (2025){"\n"}• 1.# - GPA (2023–2025)
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.subTitle}>Skills</Text>
          <Text style={styles.paragraph}>
            • JavaScript / React Native / React{"\n"}• Java / Python / C++ / Data
            Structures{"\n"}• Git / GitHub{"\n"}• Firebase / MySQL
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 40,
    paddingHorizontal: 16,
    backgroundColor: "#E3F2FD", // soft blue background
    alignItems: "center",
  },
  card: {
    width: "100%",
    maxWidth: 760,
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    padding: 24,
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowRadius: 10,
    elevation: 8,
    borderWidth: 2,
    borderColor: "#90CAF9", // light blue border
  },
  title: {
    fontSize: 30,
    fontWeight: "800",
    color: "#1976D2", // dark blue title
    marginBottom: 18,
    textAlign: "center",
    textTransform: "uppercase",
  },
  row: {
    flexDirection: "row",
    marginBottom: 10,
    alignItems: "flex-start",
    flexWrap: "wrap",
  },
  label: {
    width: 160,
    fontWeight: "700",
    color: "#0D47A1", // deep blue labels
  },
  value: {
    flex: 1,
    color: "#424242", // dark gray text
  },
  section: {
    marginTop: 14,
    backgroundColor: "#E8EAF6", // light lavender section bg
    borderLeftWidth: 5,
    borderLeftColor: "#5C6BC0", // accent bar
    borderRadius: 10,
    padding: 12,
  },
  subTitle: {
    fontWeight: "700",
    color: "#283593",
    marginBottom: 6,
    fontSize: 16,
  },
  paragraph: {
    lineHeight: 20,
    color: "#1F2937",
  },
  footer: {
    marginTop: 20,
    alignItems: "center",
  },
  small: {
    fontSize: 12,
    color: "#6B7280",
  },
});
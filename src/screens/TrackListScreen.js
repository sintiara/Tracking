import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const TrackListScreen = ({ navigation }) => {
  return (
    <>
      <Text style={{ fontSize: 48 }}>Track List Screen</Text>
      <Button
        title="Go to track detail"
        onPress={() => navigation.navigate("TrackDetail")}
      />
    </>
  );
};

export default TrackListScreen;

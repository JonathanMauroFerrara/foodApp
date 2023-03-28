import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Image,
  Platform,
} from "react-native";
import { TMeal } from "../@types";

function MealItem({
  title,
  imageUrl,
  duration,
  complexity,
  affordability,
}: TMeal) {
  return (
    <View style={styles.container}>
      <Pressable
        onPress={() => {}}
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => [pressed && styles.buttonPressed]}
      >
        <View style={styles.contentContainer}>
          <Image style={styles.image} source={{ uri: imageUrl }} />
          <Text style={styles.title}>{title}</Text>
        </View>
        <View style={styles.contentDetails}>
          <Text style={styles.detailItem}>{duration}min</Text>
          <Text style={styles.detailItem}>{complexity.toUpperCase()}</Text>
          <Text style={styles.detailItem}>{affordability.toUpperCase()}</Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    elevation: 4,
    shadowColor: "black",
    backgroundColor: "white",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    overflow: Platform.OS === "ios" ? "visible" : "hidden",
    marginBottom: 20,
  },
  contentContainer: {
    flex: 1,
  },
  title: {
    fontSize: 24,
    lineHeight: 40,
    textAlign: "center",
    margin: 8,
  },
  image: {
    width: "100%",
    height: 200,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  contentDetails: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    padding: 16,
  },
  detailItem: {
    marginHorizontal: 4,
  },
  buttonPressed: {
    opacity: 0.75,
  },
});

export default MealItem;

import { View, Text, StyleSheet, Pressable, Image } from 'react-native';
import { TMealItem } from '../@types';

function MealItem({ title, imageUrl }: TMealItem) {
  return (
    <View style={styles.container}>
      <Pressable onPress={() => {}}>
        <View style={styles.contentContainer}>
          <Image style={styles.image} source={{ uri: imageUrl }} />
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
  },
  title: {
    fontSize: 32,
    lineHeight: 40,
    textAlign: 'center',
  },
  image: {
    width: '100%',
    height: 200,
  },
});

export default MealItem;

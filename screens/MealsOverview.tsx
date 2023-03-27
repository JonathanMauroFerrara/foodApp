import { FlatList, StyleSheet, Text, View } from 'react-native';
import { IStackScreenTypes } from '../@types/StackScreenTypes';
import { MEALS } from '../data/dummy-data';

export default function MealsOverview({ route }: IStackScreenTypes) {
  const { categoryId } = route.params;
  const displayedMeals = MEALS.filter(
    meal => meal.categoryIds.indexOf(categoryId as string) >= 0,
  );

  function _renderMealItem({ item }: any) {
    return (
      <View>
        <Text>{item.title}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={displayedMeals}
        keyExtractor={item => item.id}
        renderItem={_renderMealItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

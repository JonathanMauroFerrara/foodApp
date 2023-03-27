import { FlatList, StyleSheet, Text, View } from 'react-native';
import { IStackScreenTypes } from '../@types/StackScreenTypes';
import MealItem from '../components/MealItem';
import { MEALS } from '../data/dummy-data';

export default function MealsOverview({ route }: IStackScreenTypes) {
  const { categoryId } = route.params;
  //Filtro per l'id ricevuto
  const displayedMeals = MEALS.filter(
    meal => meal.categoryIds.indexOf(categoryId as string) >= 0,
  );

  //Funzione per rendirizzare
  function _renderMealItem({ item }: any) {
    return <MealItem title={item.title} imageUrl={item.imageUrl} />;
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
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

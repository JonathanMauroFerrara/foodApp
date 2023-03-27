import { ParamListBase, RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export interface IStackScreenTypes {
  navigation: NativeStackNavigationProp<any>;
  route: RouteProp<Record<string, object | undefined>, string> & {
    params: {
      categoryId: string;
    };
  };
}

import { View, StatusBar, SafeAreaView, } from 'react-native';
import { useFonts } from 'expo-font';
import Cesta from './src/pages/Cesta';
import { Montserrat_400Regular, Montserrat_700Bold } from '@expo-google-fonts/montserrat';



export default function App() {
  const [loaded] = useFonts({
    "MontserratRegular": Montserrat_400Regular,
    "MontserratBold": Montserrat_700Bold
  });

  if (!loaded) {
    return <View></View>;
  }

  return (
    <SafeAreaView>
      <StatusBar/>
      <Cesta/>
    </SafeAreaView>
  );
}

import { ActivityIndicator } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Tasks from './src/screens/Tasks';

import  { useFonts, Inter_400Regular,Inter_700Bold } from '@expo-google-fonts/inter';

export default function App() {
  const [fontsLoaded] = useFonts({ Inter_400Regular,Inter_700Bold });

  return (
    <>
      <StatusBar style="light" />
      { fontsLoaded ? <Tasks/> : <ActivityIndicator /> }
    </>
  );
}
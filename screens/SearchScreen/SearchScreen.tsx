import {View, Text, StatusBar} from 'react-native';
import React from 'react';
import {useColorScheme} from 'nativewind';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {SafeAreaView} from 'react-native-safe-area-context';
const SearchScreen = () => {
  const {colorScheme} = useColorScheme();
  const isDarkMode = colorScheme === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  return (
    <SafeAreaView style={backgroundStyle} className="flex-1">
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <Text className="text-black-600 dark:text-white">Tra cứu</Text>
    </SafeAreaView>
  );
};

export default SearchScreen;

import {View, Text, StatusBar, TextInput, Button} from 'react-native';
import React from 'react';
import {useColorScheme} from 'nativewind';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {SafeAreaView} from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient';
import {Input} from 'react-native-elements';
const HomeScreen = () => {
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

      <LinearGradient
        className="flex-1"
        colors={isDarkMode ? ['#6360DC', 'black'] : ['#6360DC', 'white']}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}>
        <View className="h-1/3 bg-slate-50  dark:bg-black m-4 shadow-md dark:shadow-neutral-700 rounded-2xl">
          <View className="p-2 flex flex-row space-x-2">
            <View className=" bg-red-100 flex-1">
              <Input className="h-12 w-1/2"></Input>
            </View>
            <View className="flex justify-center items-center">
              <Text>Nhập biển số</Text>
            </View>
          </View>
        </View>
        <View className="h-1/3 bg-slate-50 dark:bg-black m-4 shadow-md dark:shadow-neutral-700  rounded-2xl"></View>
      </LinearGradient>
    </SafeAreaView>
  );
};

export default HomeScreen;

import {
  View,
  Text,
  StatusBar,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import {useColorScheme} from 'nativewind';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {SafeAreaView} from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient';
const cheerio = require('cheerio');
import {
  Button,
  CheckCircleIcon,
  CloseIcon,
  FavouriteIcon,
  Icon,
  InfoIcon,
  Input,
  SearchIcon,
  Select,
} from 'native-base';
import RenderHTML from 'react-native-render-html';
const HomeScreen = () => {
  const {colorScheme} = useColorScheme();
  const isDarkMode = colorScheme === 'dark';
  const [selectCar, setSelectCar] = useState({});
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  const handleString = ($: any) => {
    $('center').each((index: number, element: any) => {
      $(element).replaceWith(`<div >${$(element).html()}</div>`);
    });
    $('[style*="font-size: 18px"]').css('font-size', '14px');
    $('img').remove();
    $('button').remove();
    $('i').remove();
    $('a').remove();
    $('hr').remove();
    $('div').css('color', 'white');
    // Tìm tất cả các thẻ <br>
    const brTags = $('br');

    // Duyệt qua danh sách các thẻ <br>
    brTags.each((index: number, element: any) => {
      const nextElement = brTags.get(index + 1);

      // Nếu có hai thẻ liên tiếp
      if (nextElement && nextElement.tagName === 'br') {
        // Xoá thẻ <br> thứ hai
        $(nextElement).remove();
      }
    });
    const html = $.html();
    const trimmedHTML = html.replace(/^\s*\n/gm, '');
    console.log('t', trimmedHTML);
    return trimmedHTML;
  };
  const $ = cheerio.load(`<center style='font-size: 18px; line-height: 25px;'>
  <img src='/template/Default/images/done.png' style='height: 60px; margin-bottom: 10px;'/>
</br>Biển số <b>34C25040</b>
<br/>Không tìm thấy vi phạm!
</center>
<center style='font-size: 18px; line-height: 25px;'>
  <br/>
  <button class="css-tt submit" type="button" id="submit2" style="border-color: red; color: red;padding:5px 10px;">🔂 Kiểm Tra Lại 1 Lần Nữa</button>
</br></br>⏰Khoảng thời gian tra cứu tốt và chính xác nhất từ 18h tối đến 6h sáng<br/>
<hr/>
<p>
  <i style="font-size:16px;line-height: 18px!important;">Cảm ơn quý vị đã sử dụng ứng dụng, Xin quý vị hãy dành chút thời gian để ủng hộ Tác giả bằng cách nhấn nút Chia sẻ Ứng dụng lên Facebook, Zalo...để mọi người cùng biết đến.</i>
<p>
  <a class="css-tt" href="https://www.facebook.com/sharer/sharer.php?u=https://phatnguoixe.com" type="button" style="border-color: green; color: green;padding:5px 10px;">↑ CHIA SẺ FACEBOOK</a>
  <br/>
  <hr/>
  Nguồn <b style="font-weight:550; text-color: white">'Cổng thông tin điện tử Cục Cảnh sát giao thông'</b>

  Phần mềm tra cứu phạt nguội <br/>Phiên bản 2023
</center></br>
  `);

  const source = {
    html: handleString($),
  };
  return (
    <View style={backgroundStyle} className="flex-1 ">
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />

      <LinearGradient
        className="flex-1 py-10"
        colors={isDarkMode ? ['#6360DC', 'black'] : ['white', '#6360DC']}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}>
        <View className="h-1/4 p-2 bg-slate-50  dark:bg-black m-4 shadow-md dark:shadow-neutral-700 rounded-2xl">
          <View className=" flex flex-row space-x-2">
            <View className="flex-1">
              <Input
                autoCapitalize="characters"
                className="h-10"
                placeholder="30B259944"
                variant="outline"></Input>
            </View>
            <View className="h-10 w-28">
              <Select
                minWidth="20"
                className="h-10"
                _selectedItem={{
                  bg: 'teal.600',
                }}
                defaultValue="1"
                onValueChange={i => setSelectCar(i)}>
                <Select.Item label="Ô tô" value="1" />
                <Select.Item label="Xe máy" value="2" />
                <Select.Item label="Khác" value="3" />
              </Select>
            </View>

            <View className="flex justify-center items-center">
              <Button leftIcon={<SearchIcon />}>Tra Cứu</Button>
            </View>
          </View>
          <View className="mt-2">
            <View className="flex flex-row space-x-2">
              <FavouriteIcon color="primary.400" />
              <Text className="text-xs dark:text-gray-50">Đang theo dõi</Text>
            </View>
          </View>
          <View className="flex-1 mt-2 flex-row flex-wrap ">
            <TouchableOpacity className="h-10 w-1/2 p-1">
              <LinearGradient
                className="flex-1 first-letter:rounded-2xl  items-center justify-between flex flex-row"
                colors={
                  isDarkMode ? ['#6360DC', 'black'] : ['#6360DC', 'white']
                }
                start={{x: 0, y: 0}}
                end={{x: 1, y: 1}}>
                <View className="flex-1 ml-2">
                  <Text className="dark: dark:text-gray-50">17B2-599.25</Text>
                </View>
                <TouchableOpacity className="w-1/4  h-8 rounded-2xl justify-center  flex items-center bg-slate-100">
                  <CloseIcon color="primary.400" />
                </TouchableOpacity>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </View>
        <View className="h-1/2">
          <ScrollView className=" after:p-2 bg-slate-50 dark:bg-black m-4 shadow-md dark:shadow-neutral-700 rounded-md ">
            <View className="h-12 flex flex-row space-x-2">
              <InfoIcon color="primary.400" />
              <Text className="dark:text-gray-50">Kết quả</Text>
            </View>
            <View className=" flex flex-1 flex-row space-x-2 scroll-m-0 mb-6">
              <RenderHTML source={source} />
            </View>
          </ScrollView>
        </View>
      </LinearGradient>
    </View>
  );
};

export default HomeScreen;

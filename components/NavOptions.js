import { View, Text } from "react-native";
import React from "react";
import { FlatList, Image, TouchableOpacity } from "react-native";
import tw from "twrnc";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { selectOrigin } from "../slices/navSlice";

const data = [
  {
    id: "123",
    title: "Get a ride",
    image: "https://links.papareact.com/3pn",
    screen: "MapScreen",
  },
  {
    id: "456",
    title: "Order food",
    image: "https://links.papareact.com/28w",
    screen: "EatsScreen",
  },
];

const NavOptions = () => {
  const origin = useSelector(selectOrigin);
  const navigation = useNavigation();
  return (
    <FlatList
      data={data}
      horizontal
      showsHorizontalScrollIndicator={false}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity
          onPress={() => navigation.navigate(item.screen)}
          disabled={!origin}
          style={tw`p-2 pl-6 pb-8 pt-4 w-40 m-2 bg-gray-200`}
        >
          <View style={tw`${!origin && item.id == "123" && "opacity-20"}`}>
            <Image
              style={{ width: 120, height: 120, resizeMode: "contain" }}
              source={{
                uri: item.image,
              }}
            />
            <Text style={tw`text-lg font-semibold mt-2`}>{item.title}</Text>
            <AntDesign
              style={tw`p-2 bg-black rounded-full w-10 mt-4`}
              name="arrowright"
              size={24}
              color="white"
            />
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

export default NavOptions;

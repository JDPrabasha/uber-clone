import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native";
import tw from "twrnc";
import { TouchableOpacity } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { FlatList } from "react-native";
import { Image } from "react-native";
import { useSelector } from "react-redux";
import { selectTravelTimeInformation } from "../slices/navSlice";

const data = [
  {
    id: "123",
    title: "UberX",
    multiplier: 1,
    image: "https://links.papareact.com/3pn",
  },
  {
    id: "456",
    title: "Uber XL",
    multiplier: 1.2,
    image: "https://links.papareact.com/5w8",
  },
  {
    id: "789",
    title: "Uber LUX",
    multiplier: 1.75,
    image: "https://links.papareact.com/7pf",
  },
];

const SURGE_RATE = 1.5;

const RideOptionsCard = () => {
  const navigation = useNavigation();
  const [selected, setSelected] = useState(null);
  const travelTimeInformation = useSelector(selectTravelTimeInformation);

  return (
    <SafeAreaView style={tw`bg-white flex-grow`}>
      <View>
        <TouchableOpacity
          style={tw`absolute top-1 left-5 rounded-full p-3 z-50`}
          onPress={() => {
            navigation.goBack();
          }}
        >
          <FontAwesome5 name="chevron-left" size={16} color="black" />
        </TouchableOpacity>
        <Text style={tw`text-xl pt-3 pb-2 text-center`}>
          Select a Ride - {travelTimeInformation?.distance.text}
        </Text>
      </View>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={tw`flex flex-row justify-between px-7 items-center ${
              item.id === selected?.id && "bg-gray-200"
            }`}
            onPress={() => {
              setSelected(item);
            }}
          >
            <Image
              style={{ width: 100, height: 100, resizeMode: "contain" }}
              source={{
                uri: item.image,
              }}
            />
            <View style={tw`-ml-6`}>
              <Text style={tw`text-xl font-semibold`}>{item.title}</Text>
              <Text style={tw`text-xs`}>
                {travelTimeInformation?.duration.text} Travel Time
              </Text>
            </View>
            <Text style={tw`text-xl`}>
              {new Intl.NumberFormat("en-gb", {
                style: "currency",
                currency: "GBP",
              }).format(
                (item.multiplier *
                  SURGE_RATE *
                  travelTimeInformation?.distance.value) /
                  100
              )}
            </Text>
          </TouchableOpacity>
        )}
      />
      <View>
        <TouchableOpacity disabled={!selected}>
          <Text
            style={tw`text-xl text-center bg-black text-white p-3 ${
              !selected && "bg-gray-300"
            }`}
          >
            Choose {selected?.title}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default RideOptionsCard;

const styles = StyleSheet.create({});

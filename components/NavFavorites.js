import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { FlatList, TouchableOpacity } from "react-native";
import tw from "twrnc";
import { FontAwesome } from "@expo/vector-icons";

const data = [
  {
    id: "123",
    icon: "home",
    location: "Home",
    destination: "Code Street, London, UK",
  },
  {
    id: "456",
    icon: "briefcase",
    location: "Work",
    destination: "London Eye, London, UK",
  },
];

const NavFavorites = () => {
  return (
    <FlatList
      data={data}
      showsHorizontalScrollIndicator={false}
      ItemSeparatorComponent={() => (
        <View style={[tw`h-1 bg-gray-200`, { height: 0.5 }]} />
      )}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity style={tw`flex-row items-center p-5`}>
          <FontAwesome
            style={tw`p-3 bg-gray-300 rounded-full mr-4`}
            name={item.icon}
            size={18}
            color="white"
          />
          <View>
            <Text style={tw`font-semibold text-lg`}>{item.location}</Text>
            <Text style={tw`text-gray-500`}>{item.destination}</Text>
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

export default NavFavorites;

const styles = StyleSheet.create({});

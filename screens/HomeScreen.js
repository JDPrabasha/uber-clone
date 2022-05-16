import { View, Text, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native";
import tw from "twrnc";
import NavOptions from "../components/NavOptions";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGLE_MAPS_APIKEY } from "@env";
import { useDispatch } from "react-redux";
import { setOrigin, setDestination } from "../slices/navSlice";

const HomeScreen = () => {
  const dispatch = useDispatch();
  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      <View style={tw`p-5`}>
        <Image
          style={{ width: 100, height: 100, resizeMode: "contain" }}
          source={{
            uri: "https://links.papareact.com/gzs",
          }}
        />
        <GooglePlacesAutocomplete
          styles={{
            container: { flex: 0 },
            textInput: { fontSize: 18 },
          }}
          query={{
            key: GOOGLE_MAPS_APIKEY,
            language: "en",
          }}
          minLength={2}
          onPress={(data, details = null) => {
            dispatch(
              setOrigin({
                location: details.geometry.location,
                description: data.description,
              })
            );
            dispatch(setDestination(null));
          }}
          fetchDetails={true}
          returnKeyType="search"
          enablePoweredByContainer={false}
          placeholder="Where From?"
          debounce={400}
          nearbyPlacesAPI="GooglePlacesSearch"
        />
        <NavOptions />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

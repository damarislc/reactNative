import { StyleSheet, Text, View } from "react-native";
import { useEffect, useState } from "react";
import * as Location from "expo-location";
import MapPreview from "../components/MapPreview";
import { mapsStaticApi } from "../firebase/googleApi";
import SubmitButton from "../components/SubmitButton";
import { usePostUserLocationMutation } from "../services/users";
import { useSelector } from "react-redux";
import { colors } from "../global/colors";
import LoadingSpinner from "../components/LoadingSpinner";

const LocationSelector = ({ navigation }) => {
  const [location, setLocation] = useState({
    latitude: "",
    longitude: "",
    address: "",
  });
  const [isLoading, setIsLoading] = useState(true);
  const [triggerPostUserLocation] = usePostUserLocationMutation();
  const localId = useSelector((state) => state.auth.localId);

  useEffect(() => {
    (async () => {
      try {
        const { status } = await Location.requestForegroundPermissionsAsync();

        if (status !== "granted") return;
        const newLocation = await Location.getCurrentPositionAsync();

        setLocation({
          ...location,
          latitude: newLocation.coords.latitude,
          longitude: newLocation.coords.longitude,
        });
      } catch (error) {
        getLastKnownPosition();
      }
    })();
  }, []);

  const getLastKnownPosition = async () => {
    try {
      const position = await Location.getLastKnownPositionAsync();

      setLocation({
        ...location,
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      });
    } catch (error) {
      //TODO notificación de error
      console.log(
        "No se pudo obtener la ubicación, asegurese de que el servicio de localización está activado"
      );
      navigation.navigate("MyProfile");
    }
  };

  useEffect(() => {
    (async () => {
      if (location.latitude) {
        const urlReverseGeocoding = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${location.latitude},${location.longitude}&key=${mapsStaticApi}`;
        const response = await fetch(urlReverseGeocoding);
        const data = await response.json();
        setLocation({
          ...location,
          address: data.results[0].formatted_address,
        });
        setIsLoading(false);
      }
    })();
  }, [location.latitude, location.longitude]);

  const handleConfirmLocation = () => {
    triggerPostUserLocation({ localId, location });
    navigation.navigate("MyProfile");
  };

  return (
    <>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <View style={styles.container}>
          <View style={styles.loadingContainer}></View>
          <Text style={styles.address}>Direccion: {location.address}</Text>
          <View style={styles.mapContainer}>
            <MapPreview styles={styles.map} location={location} />
            <SubmitButton
              title="Confirmar Ubicacion"
              onPress={handleConfirmLocation}
            />
          </View>
        </View>
      )}
    </>
  );
};

export default LocationSelector;

const styles = StyleSheet.create({
  container: {
    margin: 20,
    width: "90%",
    marginHorizontal: "5%",
    gap: 15,
  },
  loadingContainer: {
    position: "absolute",
    top: 50,
    left: 50,
  },
  address: {
    width: "80%",
    marginHorizontal: "10%",
    fontSize: 18,
  },
  mapContainer: {
    alignItems: "center",
    gap: 15,
  },
  map: {
    borderRadius: 3,
  },
});

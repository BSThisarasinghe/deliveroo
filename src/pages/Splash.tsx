import React, { useEffect } from 'react';
import { View, Image, StyleSheet } from 'react-native';

interface SplashScreenProps {
  navigation: any; // Define your navigation prop type
}

const Splash: React.FC<SplashScreenProps> = ({ navigation }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('home'); // Navigate to the Login screen after 2 seconds
    }, 2000);

    return () => clearTimeout(timer); // Clear the timeout if the component is unmounted
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/images/logo-teal.png')} // Replace this with the path to your splash screen image
        style={styles.image}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 200, // Set the width of your splash screen image
    height: 200, // Set the height of your splash screen image
    resizeMode: 'contain', // Adjust the image content mode as needed
  },
});

export default Splash;

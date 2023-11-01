import React, { useEffect } from 'react';
import { View, Image, StyleSheet } from 'react-native';

interface SplashScreenProps {
  navigation: any;
}

const Splash: React.FC<SplashScreenProps> = ({ navigation }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('home');
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/images/logo-teal.png')}
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
    width: 200, 
    height: 200, 
    resizeMode: 'contain',
  },
});

export default Splash;

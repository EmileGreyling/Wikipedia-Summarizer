import { View, Image, Text, TouchableOpacity } from "react-native";

import styles from "./copybutton.style";

const CopyButton = ({ iconUrl, dimension, handlePress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={handlePress}>
      <View style={styles.btnContainer}>
        <Image
          source={iconUrl}
          resizeMode='cover'
          style={styles.btnImg(dimension)}
        />
      </View>
      <View style={{ justifyContent: 'center' }}>
        <Text style={{ color: 'white', fontWeight: 'bold'}}>Copy</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CopyButton;
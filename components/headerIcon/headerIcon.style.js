import { StyleSheet } from "react-native";

import { SIZES } from "../../constants";

const styles = StyleSheet.create({
  btnContainer: {
    width: 45,
    height: 45,
    marginRight: SIZES.xSmall,
  },
  btnImg: (dimension) => ({
    width: dimension,
    height: dimension,
    borderRadius: SIZES.small / 1.25,
  }),
});

export default styles;
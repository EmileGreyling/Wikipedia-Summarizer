import { StyleSheet } from "react-native";

import { COLORS, SIZES } from "../../constants";

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  btnContainer: {
    width: 30,
    height: 40,
    backgroundColor: COLORS.tertiary,
    borderRadius: SIZES.small / 1.25,
    flexDirection: 'row',
    justifyContent: "center",
    alignItems: "center",
  },
  btnImg: (dimension) => ({
    width: dimension,
    height: dimension,
    borderRadius: SIZES.small / 1.25,
  }),
});

export default styles;
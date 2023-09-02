import { StyleSheet } from 'react-native';
import { COLORS,  SIZES } from '../../constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary,
    alignItems: 'center',
    padding: SIZES.medium,
  },
  title: {
    fontSize: SIZES.xLarge,
    fontWeight: 'bold',
    marginBottom: SIZES.xxLarge,
    color: COLORS.white,
  },
  input: {
    width: '100%',
    height: 48,
    backgroundColor: COLORS.gray,
    borderRadius: 8,
    paddingHorizontal: SIZES.medium,
    marginBottom: SIZES.medium,
    color: COLORS.white,
  },
  button: {
    width: '100%',
    height: 48,
    backgroundColor: COLORS.secondary,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: SIZES.medium,
  },
  disabledButton: {
    width: '100%',
    height: 48,
    borderRadius: SIZES.xSmall,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: SIZES.medium,
    backgroundColor: '#8B8B8B',
  },
  buttonText: {
    fontSize: SIZES.medium,
    fontWeight: 'bold',
    color: COLORS.white,
  },
  topOptions: {
    borderTopLeftRadius: SIZES.xSmall,
    borderTopRightRadius: SIZES.xSmall,
    backgroundColor: COLORS.tertiary,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingRight: SIZES.small,
  },
  summaryContainer: {
    width: '100%',
    backgroundColor: COLORS.gray2,
    borderBottomLeftRadius: SIZES.xSmall,
    borderBottomRightRadius: SIZES.xSmall,
    padding: SIZES.medium,
  },
  summaryTitle: {
    fontSize: SIZES.xLarge,
    fontWeight: 'bold',
    color: COLORS.white,
    marginBottom: SIZES.small,
  },
  summaryText: {
    color: COLORS.white,
    fontSize: SIZES.large,
    lineHeight: SIZES.xLarge,
    fontWeight: 'bold',
  },
});

export default styles;

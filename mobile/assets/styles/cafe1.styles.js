import { StyleSheet, Dimensions } from "react-native";
import COLORS from "../../constants/colors";

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  imageContainer: {
    position: 'relative',
  },
  image: {
    width: width,
    height: 250,
    resizeMode: 'cover',
  },
  goBackButton: {
    position: 'absolute',
    top: 40,
    left: 20,
    width: 36,
    height: 36,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: COLORS.white,
    backgroundColor: COLORS.white,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 3,
    zIndex: 10,
  },
  contentContainer: {
    backgroundColor: COLORS.white,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginTop: -30, 
    padding: 20,
    width: '87%',             
    alignSelf: 'center', 
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: COLORS.textDark,
    marginBottom: 10,
    marginTop: 50,
  },
  description: {
    fontSize: 16,
    color: COLORS.textSecondary,
    marginBottom: 20,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 5,
  },
  restaurantName: {
    fontSize: 20,
    fontWeight: '600',
    color: COLORS.textDark,
  },
  rating: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingText: {
    marginLeft: 4,
    color: COLORS.textPrimary,
    fontWeight: '600',
    fontSize: 16,
  },
  detailsContainer: {
  flexDirection: 'row',
  flexWrap: 'wrap',
  gap: 10, 
  marginBottom: 20,
},

detailBadge: {
  backgroundColor: COLORS.textSecondary, 
  color: COLORS.white,
  paddingHorizontal: 12,
  paddingVertical: 6,
  borderRadius: 20,
  fontSize: 14,
  marginRight: 10,
  marginBottom: 10,
},
});

export default styles;

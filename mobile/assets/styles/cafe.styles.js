import { StyleSheet, Dimensions } from "react-native";
import COLORS from "../../constants/colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 13,
    backgroundColor: COLORS.white,
    paddingTop: 90,
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
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.25,
  shadowRadius: 3.84,
  zIndex: 100, 
},
  title: {
  fontSize: 16,        // plus petit
  fontWeight: '700',
  color: COLORS.textDark,
  marginBottom: 4,     // moins d’espace sous le titre
},
  buttonsContainer: {
    flex: 1,
    justifyContent: 'space-around',
  },
  navButton: {
    backgroundColor: COLORS.primary,
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
  },
  navButtonText: {
    color: COLORS.white,
    fontSize: 18,
    fontWeight: '600',
  },
  cardGrid: {
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
},

card: {
  width: '48%',
  backgroundColor: COLORS.white,
  borderRadius: 8,
  padding: 10,
  marginBottom: 20,
  height: 240,
  elevation: 2,
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 1 },
  shadowOpacity: 0.2,
  shadowRadius: 1.41,
},
image: {
    width: '100%',
    height: 100,
    borderRadius: 10,
    marginBottom: 12,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  rating: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingText: {
  marginLeft: 4,
  color: COLORS.textPrimary,
  fontWeight: '600',
  fontSize: 12,        // plus petit
},
category: {
  color: '#00B8D2',            // texte bleu
  backgroundColor: '#ECF8FF',  // fond bleu ciel
  paddingHorizontal: 8,        // espace horizontal à l'intérieur
  paddingVertical: 4,          // espace vertical à l'intérieur
  borderRadius: 12,            // coins arrondis
  alignSelf: 'flex-start',     // taille ajustée au contenu
  fontSize: 12,
  marginTop: 4,
  fontWeight: '500',
   marginBottom: 5,
},

priceNote: {
  marginTop: 4,
  color: '#333333',
  fontSize: 11,        // plus petit
  fontStyle: 'italic',
   marginBottom: 5,
 
},
  winRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 6,
    marginLeft: 10,
  },
winText: {
  marginLeft: 99,
  color: '#333333',
  fontWeight: 'bold',
  fontSize: 12,        // plus petit
},
});

export default styles;
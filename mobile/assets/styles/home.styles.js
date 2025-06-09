import { StyleSheet,  Dimensions} from "react-native";
import COLORS from "../../constants/colors";


const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#fff', 
    paddingTop: 48, 
    paddingHorizontal: 18 
  },
  header: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center', 
    marginBottom: 12 
  },
  headerRight: { 
    flexDirection: 'row', 
    alignItems: 'center' 
  },
  avatarCircle: {
    width: 32, 
    height: 32, 
    borderRadius: 16, 
    backgroundColor: '#38BDF8',
    alignItems: 'center', 
    justifyContent: 'center'
  },
  welcome: { 
    fontSize: 22, 
    color: '#222', 
    fontWeight: '400' ,
    marginTop: 15
  },
  username: { 
    fontSize: 22, 
    color: '#222', 
    fontWeight: '700', 
    marginTop: 5,
    marginBottom: 18 
  },
  rankCard: {
    backgroundColor: '#16B8E7', 
    borderRadius: 20, 
    padding:  20, 
    marginBottom: 22,
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'space-between',
    
  },
  rankNumber: { 
    fontSize: 32, 
    color: '#fff', 
    fontWeight: '700',
    marginBottom: 70,
    marginLeft: 20
  },
  coinContainer: {
    flexDirection: 'row', 
    alignItems: 'center', 
    backgroundColor: '#fff',
    borderRadius: 18, 
    paddingHorizontal: 10, 
    paddingVertical: 4, 
    marginLeft: 16,
    marginBottom: 70,
    marginRight: 20

  },
  coinText: { 
    color: '#222', 
    fontWeight: 'bold', 
    marginLeft: 4 
  },
  rankLabel: {
    position: 'absolute', 
    left: 18, 
    bottom: 10, 
    color: '#fff', 
    fontSize: 13, 
    fontWeight: '400',
    marginLeft: 40,
    marginBottom: 30
  },
  sectionTitle: { 
    fontSize: 16, 
    color: '#222', 
    marginBottom: 10 ,
    marginTop: 6,
    marginLeft: 20
  },
  cardsScroll: { 
    marginBottom: 18 
  
  },
  partnerCard: {
    backgroundColor: '#fff', 
    borderRadius: 16,
     marginRight: 14, 
     width: 210, 
     shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 }, 
    shadowOpacity: 0.07, 
    shadowRadius: 5, 
    elevation: 2
  },
  partnerImage: { width: '100%', height: 90, borderTopLeftRadius: 16, borderTopRightRadius: 16 },
  partnerTitleRow: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  partnerName: { fontSize: 17, fontWeight: '700', color: '#222' },
  ratingRow: { flexDirection: 'row', alignItems: 'center' },
  partnerRating: { fontSize: 13, color: '#222', marginRight: 3 },
  partnerTagsRow: { flexDirection: 'row', marginVertical: 6 },
  partnerTag: {
    backgroundColor: '#F1F5F9', borderRadius: 8, paddingHorizontal: 8, paddingVertical: 2, marginRight: 6
  },
  partnerTagText: { color: '#38BDF8', fontSize: 12, fontWeight: '500' },
  partnerInfo: { color: '#64748B', fontSize: 12, marginBottom: 4 },
  partnerWinRow: { flexDirection: 'row', alignItems: 'center', marginTop: 2 },
  partnerWinText: { color: '#222', fontWeight: '600', fontSize: 14 },
  helpText: { 
    textAlign: 'center', 
    color: '#94A3B8',
     marginTop: 30, 
     fontSize: 13 
    },
  bottomNav: {
    flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',
    backgroundColor: '#fff', borderTopWidth: 1, borderTopColor: '#E5E7EB', paddingVertical: 8, marginTop: 8
  },
  navItem: { alignItems: 'center', flex: 1 },
  navText: { color: '#64748B', fontSize: 11, marginTop: 2 },
  navItemActive: { alignItems: 'center', flex: 1 },
  navTextActive: { color: '#38BDF8', fontSize: 11, marginTop: 2, fontWeight: '700' },


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
logoutButton: {
  backgroundColor: '#16B8E7',
  paddingVertical: 10,
  paddingHorizontal: 20,
  borderRadius: 25,
  alignItems: 'center',
  marginTop: 15,
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.25,
  shadowRadius: 3.84,
  elevation: 5,
},
logoutButtonText: {
  color: '#fff',
  fontWeight: 'bold',
  fontSize: 16,
},

});

export default styles;
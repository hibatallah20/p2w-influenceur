import { StyleSheet } from "react-native";

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
    fontWeight: '400' 
  },
  username: { 
    fontSize: 22, 
    color: '#222', 
    fontWeight: '700', 
    marginBottom: 18 
  },
  rankCard: {
    backgroundColor: '#16B8E7', 
    borderRadius: 16, 
    padding: 18, 
    marginBottom: 22,
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'space-between'
  },
  rankNumber: { 
    fontSize: 32, 
    color: '#fff', 
    fontWeight: '700' 
  },
  coinContainer: {
    flexDirection: 'row', 
    alignItems: 'center', 
    backgroundColor: '#fff',
    borderRadius: 18, 
    paddingHorizontal: 10, 
    paddingVertical: 4, 
    marginLeft: 16
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
    fontWeight: '400'
  },
  sectionTitle: { 
    fontSize: 16, 
    color: '#222', 
    marginBottom: 10 
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
  helpText: { textAlign: 'center', color: '#94A3B8', marginTop: 12, fontSize: 13 },
  bottomNav: {
    flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',
    backgroundColor: '#fff', borderTopWidth: 1, borderTopColor: '#E5E7EB', paddingVertical: 8, marginTop: 8
  },
  navItem: { alignItems: 'center', flex: 1 },
  navText: { color: '#64748B', fontSize: 11, marginTop: 2 },
  navItemActive: { alignItems: 'center', flex: 1 },
  navTextActive: { color: '#38BDF8', fontSize: 11, marginTop: 2, fontWeight: '700' },
});

export default styles;
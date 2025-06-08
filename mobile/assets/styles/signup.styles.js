import { StyleSheet } from "react-native";
import COLORS from "../../constants/colors";

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
   backgroundColor: "#ffffff",
    padding: 20,
    justifyContent: "center",
  },
  card: {
    backgroundColor: COLORS.cardBackground,
    borderRadius: 16,
    padding: 24,
    shadowColor: COLORS.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
    borderWidth: 2,
    borderColor: COLORS.border,
  },
  header: {
    alignItems: "center",
    marginBottom: 32,
  },
  title: {
    fontSize: 32,
    fontWeight: "700",
    fontFamily: "JetBrainsMono-Medium",
    color: COLORS.primary,
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: COLORS.textSecondary,
    textAlign: "center",
  },
  formContainer: { marginBottom: 16 },
  inputGroup: { marginBottom: 20 },
  label: {
    fontSize: 14,
    marginBottom: 8,
    color: COLORS.textPrimary,
    fontWeight: "500",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: COLORS.inputBackground,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: COLORS.border,
    paddingHorizontal: 12,
  },
  inputIcon: { marginRight: 10 },
  input: {
    flex: 1,
    height: 48,
    color: COLORS.textDark,
  },
  eyeIcon: { padding: 8 },
  button: {
    backgroundColor: COLORS.primary,
    borderRadius: 12,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 16,
    shadowColor: COLORS.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  buttonText: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: "600",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 24,
  },
  footerText: {
    color: COLORS.textSecondary,
    marginRight: 5,
  },
  link: {
    color: COLORS.primary,
    fontWeight: "600",
  },


choiceTitle: {
  fontSize: 18,
  fontWeight: '600',
  marginBottom: 150,
  textAlign: 'center',
},

optionsWrapper: {
  flexDirection: 'row',
  justifyContent: 'center', // centrer horizontalement
  alignItems: 'center',     // centrer verticalement si besoin
  marginBottom: 100,
},
influencerBox: {
  backgroundColor: '#003344',
  borderTopLeftRadius: 90,
  borderBottomRightRadius: 90,
  borderTopRightRadius: 0,
  borderBottomLeftRadius: 0,
  width: 190,
  height: 190,
  justifyContent: 'center',
  marginRight:80, 
  marginBottom: 40,
  position: 'relative', 
   top: 0,               
  left: 0,              
  zIndex: 10,  
 
},

commercantBox: {
  backgroundColor: '#00CFE8',
  borderTopRightRadius: 90,
  borderBottomLeftRadius: 90,
  borderTopLeftRadius: 0,
  borderBottomRightRadius: 0,
  width: 190,
  height: 190,
  justifyContent: 'center',
  
  marginTop: 190, 
  marginLeft: 130,
  position: 'absolute',
 

},

optionText: {
  color: 'white',
  fontWeight: 'bold',
  fontSize: 14,
  textAlign: 'center',
},

infoBox: {
  backgroundColor: 'white',
  padding: 15,
  borderRadius: 10,
  shadowColor: '#000',
  shadowOpacity: 0.1,
  shadowOffset: { width: 0, height: 2 },
  shadowRadius: 4,
  elevation: 3,
  marginBottom: 150,
},

infoText: {
  color: '#555',
  fontSize: 12,
  textAlign: 'center',
},

loginText: {
  fontSize: 12,
  color: '#333',
   textAlign: 'center',
},

loginLink: {
  color: '#00CFE8',
  textDecorationLine: 'underline',
},

});

export default styles;
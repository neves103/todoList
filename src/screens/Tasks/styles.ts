import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#1A1A1A'
      //alignItems: 'center',
      //justifyContent: 'center'
    },
    header:{
      width: "100%",
      height: 172,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#0D0D0D"
    }, 
    logo: {
      width: 110,
      height: 32
    },
    logoClipboard: {
      width: 56,
      height: 56
    },
    viewListEmptyText: {
      height:80
    },
    viewListEmpty:{
      alignItems: "center",
    },
    input: {
      height: 54,
      width: 271,
      backgroundColor: "#333333",
     // borderWidth: 1,
      borderColor:"#0D0D0D",
      borderRadius: 5,
      color: "#FDFCFE",
      fontSize: 20,
      fontFamily:"Inter_400Regular",
      textAlign:"center",
      marginTop: 10,
      marginRight: 4
    },
    inputFocused: {
      borderColor: '#5E60CE',
      borderWidth: 1
    },
    form: {
      width: "100%",
      flexDirection: "row",
      marginTop:-38,
      marginBottom: 2,
      justifyContent: "center"
      
    },
    form2: {
      width: "100%",
      flexDirection: "row",
      marginBottom:2,
      justifyContent: "space-between"
    },
    form3: {
      marginHorizontal:20
    },
    button: {
      width: 56,
      height: 56,
      fontSize:16,
      borderRadius: 5,
      backgroundColor: "#1E6F9F",
      alignItems: "center",
      justifyContent: "center",
      marginTop: 10,
      marginBottom: 10
    },
    subTitle: {
      fontSize: 14,
      color: "#4EA8DE",
      marginRight:3
    },
    subTitle2: {
      fontSize: 14,
      color: "#8284FA",
      marginRight:3
    },
    radiusNumber: {
      backgroundColor: '#333',
      padding:1,
      color: "#D9D9D9", 
      borderRadius: 20, 
    },
    group: {
      flexDirection: 'row',
      margin:30
    },
    listEmptyText: {
      fontFamily:"Inter_700Bold",
      marginTop:20,
      color:"#808080",
      fontSize: 16,
      textAlign: "center"
    },
    listEmptyText2: {
      fontFamily:"Inter_400Regular",
      color:"#808080",
      fontSize: 14,
      textAlign: "center"

    }
});
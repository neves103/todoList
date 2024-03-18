import { StyleSheet} from "react-native";

export const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        width:"100%",
        alignItems: "center",
        borderRadius:8,
        backgroundColor: '#333333',
        alignContent: "center",
        marginBottom: 10,
        padding: 5
    },
    descriptionTask: {
        width:"100%",
        flex: 1,
        fontSize: 16,
        color:"#FFFFFF",
        padding: 10,
        paddingLeft: 16,
        borderRadius: 5
    },
    button: {
        width: 56,
        height: 56,
        fontSize:16,
        borderRadius: 5,
        backgroundColor: "#333333",
        alignItems: "center",
        justifyContent: "center"
    },
    button2: {
        width: 56,
        height:56,
        borderRadius: 5,
        backgroundColor: "#333333",
        justifyContent: "center",
        alignItems: "center"
    },
    checktext: {
        backgroundColor: '#5E60CE',
        width:20,
        height:20,
        padding:3,
        color: "#D9D9D9", 
        borderRadius: 20, 
        borderColor: "#4EA8DE",
        borderWidth:2,
    },
    checktext2 :{
        backgroundColor: '#333333',
        width:20,
        height:20,
        padding:3,
        color: "#D9D9D9", 
        borderRadius: 20, 
        borderColor: "#4EA8DE",
        borderWidth:2,
    },
    underline:{
        textDecorationLine: 'line-through',
      },

});
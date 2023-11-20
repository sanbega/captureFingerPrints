import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
const myImage = require("../../assets/wiffe.png");
//este es mi componente llamado Auth que es el que guarda la  imagen boton y los textos 
export default function Auth({onAuthenticate}) {
return(
    <View>
        <Image source={myImage} style={styles.image}></Image>
        <Text style={styles.title}>C.F.P</Text>
        <Text style= {styles.description}>capture finger print</Text>
        <TouchableOpacity
            onPress={onAuthenticate}
            style={styles.btn}>
            <Text style={styles.text}>capture</Text>    
        </TouchableOpacity> 
    </View>
)
}
const styles = StyleSheet.create({
    btn: {
        width: 200,
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "center",
        backgroundColor: '#8893FC',
        padding: 10,
        borderRadius: 5
    },
    image: {
        width: 489,
        height: 461
    },
    text: {
        color: '#fff',
        fontSize: 20,
        fontWeight: '500'
    },
    title: {
        fontSize: 50,
        fontWeight: '400',
        marginVertical : 30,
        textAlign: 'center'
    },
    description: {
        fontSize: 18,
        color: 'gray',
        textAlign: 'center',
        marginHorizontal: 20,
        marginBottom: 50
    }
})

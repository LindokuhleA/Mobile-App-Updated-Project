import React from "react";
import { StyleSheet, Text, View, SafeAreaView, Image, ScrollView, Pressable } from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
//import ScanningApp from "../../ScanningApp";


export default window.Profile = () => {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>

                <View style={styles.infoContainer}>
                    <Text style={[styles.text, { fontWeight: "200", fontSize: 36, color: '#DD0004' }]}>KLARIS DE SUISSE</Text>
                    <Text style={[styles.text, { color: "#AEB5BC", fontSize: 14, color: 'black' }]}>The best skin care products you can ever need.</Text>
                </View>
                
                <View style={{ alignSelf: "center" }}>
                    <View style={styles.profileImage}>
                        {/* <Image source={require("../database/images/accessories/scan.jpeg")} style={styles.image} resizeMode="center"></Image> */}

                            <Image 
                                source={require("../../components/Lindo/database/images/accessories/headerHome.jpeg")} 
                                style={styles.image} 
                                resizeMode="center">
                            </Image>
                        
                    </View>
                </View>


                <View style={{ marginTop: 32 }}>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                        <View style={styles.mediaImageContainer}>
                            <Image source={require("../../components/Lindo/database/images/accessories/karen.jpeg")} style={styles.image} resizeMode="cover"></Image>
                        </View>
                            
                        <View style={styles.mediaImageContainer}>
                            <Image source={require("../../components/Lindo/database/images/accessories/mode.jpg")} style={styles.image} resizeMode="cover"></Image>
                        </View>

                        <View style={styles.mediaImageContainer}>
                            <Image source={require("../../components/Lindo/database/images/accessories/mod.jpg")} style={styles.image} resizeMode="cover"></Image>
                        </View>

                        <View style={styles.mediaImageContainer}>
                            <Image source={require("../../components/Lindo/database/images/accessories/kli.jpeg")} style={styles.image} resizeMode="cover"></Image>
                        </View>

                        <View style={styles.mediaImageContainer}>
                            <Image source={require("../../components/Lindo/database/images/accessories/mode.jpg")} style={styles.image} resizeMode="cover"></Image>
                        </View>

                        <View style={styles.mediaImageContainer}>
                            <Image source={require("../../components/Lindo/database/images/accessories/mod.jpg")} style={styles.image} resizeMode="cover"></Image>
                        </View>

                        <View style={styles.mediaImageContainer}>
                            <Image source={require("../../components/Lindo/database/images/accessories/kli.jpeg")} style={styles.image} resizeMode="cover"></Image>
                        </View>
                                            
                    </ScrollView>
                </View>

                <Text style={[styles.subText, styles.recent, ]}>About SWISS BEAUTY COSMETICS</Text>

                <View style={{ alignItems: "center" }}>

                    <View style={styles.recentItem}>
                        <View style={styles.activityIndicator}> 
                        </View>
                            <View style={{ width: 250 }}>
                                <Text style={[styles.text, { color: "#41444B", fontWeight: "300" }]}>
                                    Swiss Beauty
                                </Text>

                                <Text style={{ fontWeight: "400" }}>Cosmetics products</Text>
                                <Text style={{ fontWeight: "400" }}>are totally in accordance with Swiss</Text> 
                                <Text style={{ fontWeight: "400" }}>and European regulations.</Text>
                            </View>
                    </View>

                    <View style={styles.recentItem}>
                        <View style={styles.activityIndicator}></View>
                        <View 
                            style={{ 
                                width: 250 
                            }}
                        >
                            <Text style={[styles.text, { color: "#41444B", fontWeight: "300" }]}>A</Text>
                                 
                            <Text style={{ fontWeight: "400" }}>uniform skin, without pigmentary</Text>
                            <Text style={{ fontWeight: "400" }}>imperfections</Text> 
                            <Text style={{ fontWeight: "400" }}>Klaris</Text>
                        </View>
                    </View>

                    <View style={styles.recentItem}>
                        <View style={styles.activityIndicator}></View>
                        <View style={{ width: 250 }}>
                            <Text style={[styles.text, { color: "#41444B", fontWeight: "300" }]}>The</Text>   
                            <Text style={{ fontWeight: "400" }}>prevention of the ageing process and inflammation of the skin, inducted by the U.V.</Text>
                        </View>
                    </View>

                    <View style={styles.recentItem}>
                        <View style={styles.activityIndicator}></View>
                        <View style={{ width: 250 }}>
                            <Text style={[styles.text, { color: "#41444B", fontWeight: "300" }]}>Protecting</Text> 
                            <Text style={{ fontWeight: "400" }}>the function of the epidermis barrier and the integrity of the skin.</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fadadd",
        paddingTop: 90
    },
    text: {
        fontFamily: "HelveticaNeue",
        color: "#52575D"
    },
    image: {
        flex: 1,
        height: undefined,
        width: undefined
    },
    titleBar: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 24,
        marginHorizontal: 16
    },
    subText: {
        fontSize: 12,
        color: "#AEB5BC",
        textTransform: "uppercase",
        fontWeight: "500"
    },
    profileImage: {
        width: 380,
        height: 200,
        borderRadius: 5,
        marginTop: 1,
        overflow: "hidden"
    },
    dm: {
        backgroundColor: "#41444B",
        position: "absolute",
        top: 20,
        width: 40,
        height: 40,
        borderRadius: 20,
        alignItems: "center",
        justifyContent: "center"
    },
    active: {
        backgroundColor: "#34FFB9",
        position: "absolute",
        bottom: 28,
        left: 10,
        padding: 4,
        height: 20,
        width: 20,
        borderRadius: 10
    },
    add: {
        backgroundColor: "#41444B",
        position: "absolute",
        bottom: 0,
        right: 0,
        width: 60,
        height: 60,
        borderRadius: 30,
        alignItems: "center",
        justifyContent: "center"
    },
    infoContainer: {
        alignSelf: "center",
        alignItems: "center",
        marginTop: 16
    },
    statsContainer: {
        flexDirection: "row",
        alignSelf: "center",
        marginTop: 32
    },
    statsBox: {
        alignItems: "center",
        flex: 1
    },
    mediaImageContainer: {
        width: 180,
        height: 200,
        borderRadius: 12,
        overflow: "hidden",
        marginHorizontal: 10
    },
    mediaCount: {
        backgroundColor: "#41444B",
        position: "absolute",
        top: "50%",
        marginTop: -50,
        marginLeft: 30,
        width: 100,
        height: 100,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 12,
        shadowColor: "rgba(0, 0, 0, 0.38)",
        shadowOffset: { width: 0, height: 10 },
        shadowRadius: 20,
        shadowOpacity: 1
    },
    recent: {
        marginLeft: 78,
        marginTop: 32,
        marginBottom: 6,
        fontSize: 10
    },
    recentItem: {
        flexDirection: "row",
        alignItems: "flex-start",
        marginBottom: 16
    },
    activityIndicator: {
        backgroundColor: "#CABFAB",
        padding: 4,
        height: 12,
        width: 12,
        borderRadius: 6,
        marginTop: 3,
        marginRight: 20
    }
});

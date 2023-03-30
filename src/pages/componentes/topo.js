import React from "react";
import TopoImage from "../../../assets/topo.png";
import { Image, StyleSheet, Dimensions } from "react-native";

import Texto from "../../components/texto";

const width = Dimensions.get('screen').width


function Topo({titulo}) {
    return (<>
    <Image style={styles.topo} source={TopoImage}/>
    <Texto style={styles.titulo}>{titulo}</Texto>
    </>)
}

const styles = StyleSheet.create({
    topo:{
        width:"100%",
        height: 578/768*width
    },
    titulo:{
        color:"white",
        position: "absolute",
        textAlign: "center",
        fontSize:18,
        lineHeight:40,
        fontWeight:"bold",
        width:"100%",
    },
})

export default Topo
import React from "react"
import { StyleSheet, View } from "react-native"

//componentes
import Texto from "../components/texto"
import Detalhes from "./componentes/descricao"
import Topo from "./componentes/topo"


export default function Cesta ({topo, detalhes}){
    return <>
    <Topo {...topo}/>
    <View style={styles.containerCesta}>
        <Detalhes {...detalhes}/>
    </View>
    </>
}

const styles = StyleSheet.create({
    containerCesta:{
        paddingHorizontal: 16,
        paddingVertical:8
    }
})
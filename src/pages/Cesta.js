import React from "react"


import { Image, Text, StyleSheet, Dimensions, View } from "react-native"
import Topo from "../../assets/topo.png"
import Fazenda from "../../assets/logo.png"

const width = Dimensions.get('screen').width

export default function Cesta (){
    return <>
    <Image style={styles.topo} source={Topo}/>
    <Text style={styles.titulo}>Detalhes da Cesta</Text>
    <View style={styles.containerCesta}>
        <Text style={styles.nomeProduto}>Cesta de Verduras</Text>
        <View style={styles.fazenda}>
            <Image style={styles.imagemFazenda} source={Fazenda}/>
            <Text style={styles.nomeFazenda}>Jenny Jack Farm</Text>
        </View>
        <Text style={styles.descricaoProduto}>Uma cesta de verduras com produtos cuidadosamente selecionados da fazenda para a sua cozinha</Text>
        <Text style={styles.precoProduto}>R$ 40,00</Text>
    </View>
    </>
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
    containerCesta:{
        paddingHorizontal: 16,
        paddingVertical:8
    },
    fazenda:{
        flexDirection:"row",
        paddingHorizontal:12
    }, 
    imagemFazenda:{
        width:32,
        height:32
    },
    nomeFazenda:{
        marginLeft:12,
        fontSize: 16,
    },
    nomeProduto:{
        color:"#464646",
        fontWeight:"bold",
        lineHeight:46,
        fontSize:26
    },
    descricaoProduto:{
        color: "#a3a3a3",
        fontSize: 18,
        lineHeight: 25,
        fontFamily:"MontserratRegular"
    },
    precoProduto:{
        fontSize: 30,
        color: "#2a9f85",
        fontWeight: "bold",
        marginTop: 8
    }
})
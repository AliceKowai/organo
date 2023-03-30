import React from "react";

import Texto from "../../components/texto";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";

function Detalhes({nomeDoProduto, nomeFazenda, logoFazenda, descricao, preco, botao}) {
    return (
        <>
            <Texto style={styles.nomeProduto}>{nomeDoProduto}</Texto>
            <View style={styles.fazenda}>
                <Image style={styles.imagemFazenda} source={logoFazenda} />
                <Texto style={styles.nomeFazenda}>{nomeFazenda}</Texto>
            </View>
            <Texto style={styles.descricaoProduto}>{descricao}</Texto>
            <Texto style={styles.precoProduto}>{preco}</Texto>
            <TouchableOpacity style={styles.botao} onPress={()=>{}}>
                <Texto style={styles.textoBotao}>{botao}</Texto>
            </TouchableOpacity>
        </>
    )
}

const styles = StyleSheet.create({
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
    },
    botao:{
        marginTop: 16,
        backgroundColor: "#2A9F85",
        paddingVertical: 16,
        borderRadius: 6,
    },
    textoBotao:{
        textAlign:"center",
        color:"#ffffff",
        fontSize:16,
        lineHeight:26,
        fontWeight:"bold"

    }
})

export default Detalhes
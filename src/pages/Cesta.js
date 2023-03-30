import React from "react"
import { ScrollView, StyleSheet, View, FlatList } from "react-native"

//componentes
import Texto from "../components/texto"
import Detalhes from "./componentes/descricao"
import Topo from "./componentes/topo"
import Item from "./componentes/lista"

export default function Cesta({ topo, detalhes, itens }) {
    return <>
        <FlatList
            data={itens.lista}
            renderItem={Item}
            keyExtractor={({ nome }) => nome }
            ListHeaderComponent={() => {
                return <>
                    <Topo {...topo} />
                    <View style={styles.cesta}>
                        <Detalhes {...detalhes} />
                        <Texto style={styles.titulo}>{itens.titulo}</Texto>
                    </View>
                </>
            }}
        />
    </>
}

const styles = StyleSheet.create({
    containerCesta: {
        paddingHorizontal: 16,
        paddingVertical: 8
    },
    titulo: {
        color: "#464646",
        fontWeight: "bold",
        marginTop: 32,
        marginBottom: 8,
        fontSize: 20,
        lineHeight: 32,
    },
    cesta: {
        paddingVertical: 8,
        paddingHorizontal: 16,
    },
})
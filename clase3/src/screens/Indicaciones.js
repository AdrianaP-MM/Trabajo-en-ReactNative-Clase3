import React from 'react';
import { View, StyleSheet, Text, FlatList, StatusBar } from 'react-native';
import Boton from '../components/Boton';
import dataColorAquosos from '../data/ColoresAquosos';
import dataColorNatural from '../data/ColoresNatural';
import dataColorOtros from '../data/ColoresOtros';
import Card from '../components/Card';

const Indicaciones = ({ navigation }) => {
    const informacionAquosa = dataColorAquosos;
    const informacionNatural = dataColorNatural;
    const informacionOtros = dataColorOtros;

    const irPantalla1 = () => {
        navigation.navigate('Pantalla1');
    };

    const sections = [
        { title: 'Colores Aquosos', data: informacionAquosa },
        { title: 'Natural Colors', data: informacionNatural },
        { title: 'Other Colors', data: informacionOtros }
    ];

    return (
        <FlatList
            ListHeaderComponent={
                <View style={styles.card}>
                    <View style={styles.textContainer}>
                        <Text style={styles.title}>Trabajo en clase:</Text>
                        <Text style={styles.title}>Indicaciones: </Text>
                        <Text style={styles.description}>
                            Agregar una pantalla y replicar la siguiente pantalla, las imagenes pueden ser otras:
                        </Text>
                    </View>
                    <Boton
                        textoBoton='Regresar a Inicio'
                        accionBoton={irPantalla1}
                    />
                </View>
            }
            data={sections}
            renderItem={({ item }) => (
                <>
                    <Text style={styles.Split}>{item.title}</Text>
                    <FlatList
                        data={item.data}
                        renderItem={({ item }) => (
                            <Card
                                src={item.src}
                                name={item.name}
                                hexa={item.hexa}
                            />
                        )}
                        keyExtractor={(item) => item.id}
                        numColumns={3}
                        contentContainerStyle={styles.flatListContainer}
                    />
                </>
            )}
            keyExtractor={(item, index) => index.toString()}
            contentContainerStyle={styles.container}
        />
    );
};

export default Indicaciones;

const styles = StyleSheet.create({
    Split: {
        backgroundColor: 'gray',
        color: 'white',
        width: '100%',
        paddingVertical: 15,
        fontSize: 17,
        marginVertical: 8,
        textAlign: 'center'
    },
    container: {
        paddingHorizontal: 10,
        paddingVertical: 20,
    },
    card: {
        backgroundColor: '#fff',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        marginBottom: 20,
        marginTop: 25,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        alignItems: 'center',
    },
    textContainer: {
        alignItems: 'center',
    },
    description: {
        fontSize: 16,
        marginBottom: 20,
        textAlign: 'center'
    },
    flatListContainer: {
        alignItems: 'center',
    }
});

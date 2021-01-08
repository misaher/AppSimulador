import React,{useContext,useState} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import  CuestionarioContext   from '../../Context/CuestionarioContex';
const Calificar = () => {
    const {califinal}  = useContext(CuestionarioContext);
    return (
        <View style={styles.contenedor}>
              { califinal &&(
            <View>
                   <Text>
                Ok examen Calificado...
                
            </Text>
              <Text>Puntos.. {califinal}</Text>
            </View>
              )}
        </View>
    )
}

export default Calificar

const styles = StyleSheet.create({
     contenedor:{
        flex: 1,
        flexDirection: "column",
         alignItems: "center",
          justifyContent: "center"
     }

})

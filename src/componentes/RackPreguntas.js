import React,{useEffect,useContext} from 'react'
import { StyleSheet, Text, View,ScrollView,TouchableOpacity } from 'react-native'
import { Button} from 'react-native-paper';
import Pregun  from  './Pregun';
import {Rack}  from './preguntas/Preg';
import  firebase from  '../firebase/Firebase';
import PreguntasAl from './modulosAleatorio/PreguntasAl';
import  CuestionarioContext from  '../Context/CuestionarioContex';
import Calificar from './Califi/Calificar';
const RackPreguntas = ({navigation}) => {
      const {examenes,calificar,setCalificar,examAct,exam2Act,ExamObtener} =  useContext(CuestionarioContext);
                     
       const ActualizarEx = ()=>{
        ExamObtener();
       }
      return (
        <>
        { exam2Act ?
            
            <ScrollView>
            { examenes &&(
               <View style={styles.contenedor}>
             {  examenes.map( (exam,index)=>(
                <TouchableOpacity key={index} style={styles.boton}
                onPress={()=> navigation.navigate('Evaluacion',{
                    itemId: exam._id
               })}
                >
                    <Text style={styles.tectC}>{exam.nombre_eval}</Text>
                </TouchableOpacity>
               ))}
              </View>
            )}
        </ScrollView>
        :
          <View style={styles.sinExamen}>
            <Text style={styles.textoEx}>
                 Sin Examenes  :( 
            </Text>
          </View>
           }
            <View style={styles.send}>
           <Button  mode="text" onPress={ActualizarEx}>
         Actualizar
  </Button>
  </View>
        </>
    )
}

export default RackPreguntas

const styles = StyleSheet.create({
    vp: {
        marginTop: 20
    },
    boton:{
        backgroundColor: "#143752",
       width: "90%",
       height: 70,
       borderRadius: 10,
        paddingVertical: 20,
       marginHorizontal: 20,
       marginBottom: 10
    },
    tectC:{
        color: "#ffff",
       textAlign: "center",
       fontSize: 16,
       
   },
   contenedor:{
    marginTop: 50
},
sinExamen:{
          marginTop: 20,
          paddingHorizontal: 10
},
  textoEx:{
          fontSize: 20,
           fontWeight: "bold",
           textAlign: "center"
  },
  send:{
    marginBottom: 20
}
})

import React,{useState,useEffect,useContext} from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import Preguntas from './modulos/Preguntas';
import firebase  from '../firebase/Firebase';
import   CuestionarioContext from '../Context/CuestionarioContex';
import  PreguntasContext from  '../Context/preguntas/PreguntasContext';
import { ScrollView } from 'react-native-gesture-handler';
const Cuestionario = ({navigation}) => {
    const {usuario} =  useContext(CuestionarioContext);
    const {tiposP,cargaTipos} = useContext(PreguntasContext)
  
    //const  [validarTipos,setTipos] = useState(); cargaTipos
      const [tipos,setTipos]= useState();
       useEffect(()=>{
        cargaTipos();
      },[])  

    ////
    return (
        <ScrollView>
         <View style={styles.conteUser}><Text style={styles.usuarioText}>Hola : { usuario.nombre}</Text></View>
        
           { tiposP && (
           
        <View style={styles.contenedor}>
            
              {tiposP.map( (tp,index)=>(
          <TouchableOpacity key={index} style={styles.boton}
          onPress={()=> navigation.navigate('Preguntas',{
               itemId: tp.tipo
          })}
          >
        <Text style={styles.tectC}>{tp.tipo}</Text>
           
        </TouchableOpacity>
           ))  }
        </View>
           
        )}
        </ScrollView>
    )
}

export default Cuestionario

const styles = StyleSheet.create({
    tectC:{
         color: "#ffff",
        textAlign: "center",
        fontSize: 16,
        
    },
    contenedor:{
             marginTop: 50

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
    usuarioText :{
         textAlign: "center",
         fontSize: 15,
         color: "#ffff",
         fontWeight:"bold"
    },
    conteUser:{
        backgroundColor: "#143752",
        marginTop: 0,
         height: 30,
         borderBottomLeftRadius: 25,
         borderBottomRightRadius:25
    }

})

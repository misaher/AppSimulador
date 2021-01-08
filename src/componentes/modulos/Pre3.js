import React,{useState,useEffect}from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {RadioButton}  from 'react-native-paper';
import   firebase from '../../firebase/Firebase';
import  Pre4 from  './Pre4';
const Pre3 = ({hola,respuestas,respuestav}) => {
    const [respuesta,setRespuetas] = useState();  
    const [validar,setValidar] = useState(); 
    const respuestasFinal = JSON.parse(respuestas);
    const  {tama} = respuestasFinal;
     
  
    
    return (
        <>
        <View>{ respuestasFinal &&(
              <Pre4 
              respuesta= {respuestasFinal} 
              respuestav ={respuestav}
              tama= {tama}
            />        
         ) }
            
        </View>
                
               
        </>
    )
}

export default Pre3 

/*

      <Pre4 
             respuesta= {respuesta} 
             respuestav ={respuestasFinal}
             tama= {tama}
           />  
*/

const styles = StyleSheet.create({
    bt:{
         marginBottom: 10
    },
    vali:{
        backgroundColor: "#143752",
        marginVertical: 20,
        height: 40,
        borderRadius: 5
    },
    text:{
          color: "#fff",
          fontSize: 20,
          textAlign: "center",
          
    },
    rc:{
        paddingLeft: 30,
      fontSize: 15,
       fontWeight: "bold"
    }
})

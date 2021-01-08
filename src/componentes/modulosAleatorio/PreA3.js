import React,{useState,useEffect}from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {RadioButton}  from 'react-native-paper';
//import   firebase from '../../firebase/Firebase';
import firebase from '../../firebase/Firebase';
import  PreA4 from  './PreA4';
const PreA3 = ({idPr,respuestas,respuestav}) => {
    //console.log("Numero-->>>>>>>>>>>>>>>>>>>",numero);
    const [respuesta,setRespuetas] = useState();  
    const [validar,setValidar] = useState(); 
    const respuestasFinal = JSON.parse(respuestas);
    const  {tama} = respuestasFinal;
    return (
        <>
        <View>{ respuestas &&(
           <PreA4 
             respuesta={respuestasFinal} 
             idPr={idPr}
             respuestav ={respuestav}
             tama= {tama}
           />       
         ) }
            
        </View>
                
               
        </>
    )
}

export default PreA3

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

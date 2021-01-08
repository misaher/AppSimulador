import React, {useState,useContext}from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {RadioButton}  from 'react-native-paper';
import  CuestionarioContext from '../../Context/CuestionarioContex';
import Preguntas from '../modulos/Preguntas';
const PreA4 = ({respuesta,idPr,respuestav,tama,respuestas,setRespuestas}) => {
        let arreGloRespuestas=[];
        let  respuestaPr={
               
        }
         const {setPuntos,puntos,almacenarRespuestasMe} = useContext(CuestionarioContext);
        //console.log('set Validador--->',validadorCarga);
    const [valida, setValida] = useState(false);
     const  [valor,setValor] = useState();
     const  [controlRadio,setControlRadio]  =useState(false);
        /////
        let arr = [] 
        let  v="v";
        let  r="r";
           for (let i=1; i<=tama+1; i++){
                r= `${r}${i}`;
                arr.push(r)
                r="r";
           }
           //setValidador(false)
     

        /////


       const Validar =(newValue,id) =>{
               //console.log('La respuesta es -->>>',respuestav);
                 if(newValue){
                    setValor(newValue)
                 }
                if(newValue== respuestav){
                   setValida(true)
                    let punt= puntos;
                        punt=punt+1;
                           //console.log('puntos-->',punt);
                           setControlRadio(true)
                          setPuntos(punt);  
                    
                              respuestaPr.idE=id
                              respuestaPr.reco=respuestav;
                              respuestaPr.reselc=newValue;
                         
                          let dat = respuestas;
                            //dat.push(respuestaPr)
                            almacenarRespuestasMe(respuestaPr)
                        respuestaPr={
               
                        }

                }else{
                    respuestaPr.idE=id
                    respuestaPr.reco=respuestav;
                    respuestaPr.reselc=newValue;
                    let dat = respuestas;
                    almacenarRespuestasMe(respuestaPr)
                   
                     
                      setValida(false)
                      setControlRadio(true)
                      respuestaPr={
               
                    }
                }
       }
    return (
        <View>
             { respuesta &&(
                  <View>
                    { arr.map((dat,index)=> 
                     <View key={index}>
                      <RadioButton.Group onValueChange={newValue => Validar(newValue,idPr)} value={valor}>
                    <View style={styles.p1} >
                    <Text>{index+1}.- {respuesta[arr[index]]}</Text>
                        <RadioButton value={index+1} 
                            disabled={controlRadio}
                        />
                       
                    </View>

               </RadioButton.Group>
   
                      </View>
                    )}
                   { valor ?
                    <View style={styles.vali}>
                        { valida ? <Text style={styles.text}>Ok espuesta selecionada ->: {valor}</Text>: <Text style={styles.text}>Respuesta selecionada<Text style={styles.rc} > -> : {valor}</Text> </Text>}  
                    </View>: null}
                  </View>  

                  )} 
        </View>
    )
}

export default PreA4

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

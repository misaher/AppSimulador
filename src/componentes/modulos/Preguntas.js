import React,{useState,useEffect,useContext} from 'react'
import { StyleSheet, Text, View,ScrollView, ActivityIndicator} from 'react-native'
import {RadioButton } from 'react-native-paper';
import   firebase from '../../firebase/Firebase';
import  CuestionarioContext from '../../Context/CuestionarioContex';
import PreguntasContext from  '../../Context/preguntas/PreguntasContext';
import Pre2 from './Pre2';
const Preguntas = ({route}) => { //cargaPreguntasTipos
    const {setValidador,validadorCarga} = useContext(CuestionarioContext);
    const {cargaPreguntasTipos,preguntasTipos} =useContext(PreguntasContext)
    const [value, setValue] = useState();
    const [preguntas,setPreguntas] = useState([]);
          const {itemId} = route.params;
       
            useEffect(()=>{
              cargaPreguntasTipos(itemId)
            },[])
         
      

    return (
        <>
        <ScrollView>
            {preguntasTipos &&(
                   <>
                    <View style={styles.cont}>
                    
               <Pre2 
                 preguntas={preguntasTipos}
               /> 
               
               </View> 
             </> 
            )}
        </ScrollView>
        </>
    )
}

export default Preguntas
/*
 <ActivityIndicator animating={validadorCarga} size="large" color="#00ff00" />
*/

const styles = StyleSheet.create({
    p1:{
        flexDirection: "row",
        alignItems: "center",
        alignContent:"space-between"
        
    },
    cont :{
         marginTop: 20
    }
})

import React, {useState,useContext}from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {RadioButton}  from 'react-native-paper';
import  CuestionarioContext from '../../Context/CuestionarioContex';
const Pre4 = ({respuesta,respuestav,tama}) => {
        const {setValidador,validadorCarga} = useContext(CuestionarioContext);
        //console.log('set Validador--->',validadorCarga);
    const [valida, setValida] = useState(false);
     const  [valor,setValor] = useState();
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


       const Validar =(newValue) =>{
            
               //console.log('La respuesta es -->>>',respuestav);
                 if(newValue){
                    setValor(newValue)
                 }
                if(newValue== respuestav){
                   ///console.log('respuesta Correcta');
                   setValida(true)
                }else{
                      // console.log('Respuesta INcorrecta');
                      setValida(false)
                }
           
       }
    return (
        <View>
             { respuesta &&(
                  <View>
                    { arr.map((dat,index)=> 
                     <View key={index}>
                      <RadioButton.Group onValueChange={newValue => Validar(newValue)} value={valor}>
                    <View style={styles.p1} >
                    <Text>{index+1}.- {respuesta[arr[index]]}</Text>
                        <RadioButton value={index+1} 
                        
                        />
                    </View>

               </RadioButton.Group>
   
                      </View>
                    )}
                   { valor ?
                    <View style={styles.vali}>
                        { valida ? <Text style={styles.text} onPress={()=>setValor(null)}>Respuesta correcta</Text>: <Text style={styles.text}onPress={()=>setValor(null)}>Respuesta Incorrecta<Text style={styles.rc} > ->Rc : {respuestav}</Text> </Text>}  
                    </View>: null}
                  </View>  

                  )} 
        </View>
    )
}

export default Pre4

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

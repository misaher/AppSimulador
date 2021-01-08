import React,{useState }from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {RadioButton}  from 'react-native-paper';
import  {Res } from  './preguntas/Pres';
const PreR = ({valor,resp}) => {
    const {n,v1,e, v2,t,v3,y,v4}=Res.get(valor);
    
     const [valida1, setValue] = useState();
     const [valida, setValida] = useState(false);
        const Validar =(newValue) =>{
              console.log("Ok cambiar Valores  --> ",newValue);
              setValue(newValue);
              if (newValue === resp){
                    setValida(true);
              }else{
                setValida(false)
              }
        }
    return (
        <>
        <View>
            
                <RadioButton.Group onValueChange={newValue => Validar(newValue)} value={valida1}>
                    <View style={styles.p1}>
                         <Text>{`${v1}- `} { n}</Text>
                        <RadioButton value={v1} />
                    </View>
                    <View>
                         <Text>{`${v2}- `}{e}</Text>
                        <RadioButton value={v2} />
                    </View>

                    <View>
                         <Text>{`${v3}- `}{t}</Text>
                        <RadioButton value={v3} />
                    </View>

                    <View style={styles.bt}>
                         <Text>{`${v4}- `}{y}</Text>
                        <RadioButton value={v4} />
                    </View>
                     { valida1 ?
                    <View style={styles.vali}>
                        { valida ? <Text style={styles.text} onPress={()=>setValue(null)}>Respuesta correcta</Text>: <Text style={styles.text}onPress={()=>setValue(null)}>Respuesta Incorrecta<Text style={styles.rc} > ->Rc : {resp}</Text> </Text>}  
                    </View>: null}
               </RadioButton.Group>
            
        </View>
                
               
        </>
    )
}

export default PreR

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

import React,{useState,useEffect,useContext} from 'react'
import { StyleSheet, Text, View,ScrollView, ActivityIndicator} from 'react-native'
import {RadioButton } from 'react-native-paper';
//import   firebase from '../../firebase/Firebase';
 import  CuestionarioContext from '../../Context/CuestionarioContex';
  import PreA2 from  './PreA2';
  import { Button,Modal,Portal,Provider} from 'react-native-paper';
import { isValidElement } from 'react';
const PreguntasAl = ({navigation,route}) => {
  const {aleatorio,setCalificar,puntos,total,setCalifinal, idExam,setIdExam,Evaluaciones,setexam2Act,setPuntos,setarregloResp,errorCalifi,setErrorCalifi} = useContext(CuestionarioContext); 
    const {itemId} =route.params;
    const [visible, setVisible] = useState(false);
    const showModal = () => setVisible(true);
    const hideModal = () => setVisible(false);
  
     useEffect(()=>{
               if(itemId){
                setIdExam(itemId)
               }
     },[])

  useEffect(()=>{
      console.log('seteando a Cero puntos');  
    setPuntos(0)
    setarregloResp([])    
   },[])
  
  const Calif= () =>{
        /*
          primero se califica el examen , despues se envia al inserta, depues se pone en false la variable setexam2Act
          despues se redu¿ireciona a Rack pregutas
        */
       // console.log('Ok Califff_______------>');
        setCalificar(true);
       //console.log("Total");
        let  calcular = 0;
          calcular =  puntos*100
            //console.log('----------------->',calcular);
            calcular = calcular/total;
            setCalifinal(calcular);
            // console.log("Calif--->>>");
             // console.log(calcular);
              //console.log("-IdExam------------------>>>",idExam);
              // Update(idExam,calcular);
              Evaluaciones(calcular);
              setexam2Act(false);
             if(!errorCalifi){              
            navigation.navigate('RackPreguntas');
             }
       
       

     }

    return (
        <>
        <ScrollView>
          
          {aleatorio &&(
            <View style={styles.cont}>
          <PreA2 
           aleatorio={aleatorio}
        />
        </View>
          )}
             </ScrollView>
             <Provider>
          <Portal>
           <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={styles.modalSend}>
          <Text style={{textAlign:"center", fontWeight: "bold"}}>Presione Ok para enviar</Text>
            <View style={{marginTop: 40}}> 
           <Button  mode="outlined" onPress={Calif}>
              Enviar
        </Button>
         {errorCalifi &&(<View style={styles.validarLog}><Text style={styles.textValida}>Error al guadar respuestas :( , intente de nuevo</Text></View>) }
       </View>
        </Modal>
          </Portal>
          </Provider>
          <View style={styles.send}>
           <Button  mode="text" onPress={showModal}>
         Finalizar
  </Button>
  </View>
       
        </>
    )
}

export default PreguntasAl

const styles = StyleSheet.create({
    p1:{
        flexDirection: "row",
        alignItems: "center",
        alignContent:"space-between"
        
    },
    cont :{
         marginTop: 20
    }
    ,
    send:{
        marginBottom: 20
    }
    ,
    modalSend :{
      backgroundColor: '#fff', 
      padding: 20,
      marginHorizontal: 20,
       height: 200,
       
    },
    validarLog:{
      marginTop: 10,
      marginBottom: 10,
      backgroundColor: "#BB3E57",
      height: 53,
     },
     textValida:{
      padding:10,
      textAlign: "center",
      color: "#ffff",
      fontWeight: "bold"
}

})
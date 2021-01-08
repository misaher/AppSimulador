import { firestore } from 'firebase';
import React,{useState,useContext,useEffect}from 'react'
import { StyleSheet, View,ActivityIndicator} from 'react-native'
import firebase  from  '../../firebase/Firebase';
import { TextInput,Button,Text  } from 'react-native-paper';
import Registro   from  './Registro';
import { color } from 'react-native-reanimated';
import CuestionarioContext from '../../Context/CuestionarioContex';
const Loging = ({setvalidarLog}) => {
       const {login,usuario,errorLog,logeo,setLogeo} = useContext(CuestionarioContext);
     const  [email,setEmail] = useState();
     const  [activa,setActiva] = useState(true);
     const  [password, setPassword] = useState();
     const [anima,setAnima] = useState(false);
     const  [mensajeRegis, setMense]  = useState(false);
     const [validar,setValidar] = useState(false);
       ////logs
         //console.log('El valor de holi-->',hi);
       ////// uSEeFECT
           useEffect(()=>{
                if(usuario){
                  setvalidarLog(true);  
                }
           },[usuario]) 
            useEffect(()=>{
                   if(logeo){ 
                    setAnima(true);
                   setMense(true);
                   }else{
                    setAnima(false);
                    setMense(false);
                   }
            }),[logeo]

      //// Login
        const  Login =()=>{
           
                if(email&&password){
                  setLogeo(true)
                 const res=   login(email,password);
                   
                   console.log('res--->',res);
                    setValidar(false)
                   

                 
                     
                }else{
                    setValidar(true);     
                }
        }
        

    return (
          <>
           { activa ? 
        <View  style={styles.contenedor}>
             < View  style={styles.ancho}>
             {mensajeRegis && ( <View><Text style={{textAlign:"center"}}>Ingresando...</Text></View> ) }
                 <View  style={styles.text}>
                 <TextInput
            label="Email"
            value={email}
            onChangeText={email => setEmail(email)}
              />
          </View >
          <View   style={styles.activi} >
                     <ActivityIndicator  animating={anima} size="large" color="#0000ff"  />
                     </View>
          <View style={styles.text}>
         <TextInput
         secureTextEntry={true}
            label="Password"
            type="password"
            value={password}
            onChangeText={password => setPassword(password)}
        />
        </View>
         { validar  && (<View style={styles.validar}><Text style={styles.textValida}>Por Favor ingresa la información</Text></View>)}
           { errorLog  && (<View style={styles.validarLog}><Text style={styles.textValida}>{errorLog}</Text></View>)}
         
        <View style={styles.btn}>
          <Button mode="contained" onPress={() => Login()}>
           Ingresar
          
      </Button>
      </View>
      <View style={styles.btn}>
      <Button mode="text" onPress={() => setActiva(false)}>
        Resetear Password
      </Button>
      </View>
      </View>
        </View>
        : <Registro  
        setActiva ={setActiva}
        /> }
      </>
    )
}

export default Loging

const styles = StyleSheet.create({
    contenedor:{
            flex: 1,
            flexDirection: "column",
             alignItems: "center",
              justifyContent: "center"
                       
    },
    ancho : {
          width: "80%",
          position: "absolute",
          zIndex: 2
    },
    text :{
        marginBottom: 10
    },
    btn:{
        marginTop: 10,
        marginBottom: 10
    },
    activi:{
        position: "absolute",
         left: 130,
         top: 50,
         zIndex: 3
         
        
  } ,
  validar:{
         marginTop: 10,
         marginBottom: 10,
         backgroundColor: "#BB3E57",
         height: 40,
         
  },
   textValida:{
         padding:10,
         textAlign: "center",
         color: "#ffff",
         fontWeight: "bold"
   },
   validarLog:{
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: "#BB3E57",
    height: 60,
   }


})

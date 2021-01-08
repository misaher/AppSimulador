import React,{useState,useContext,useEffect}from 'react'
import { StyleSheet, View,ActivityIndicator } from 'react-native'
import firebase  from  '../../firebase/Firebase';
import { TextInput,Button,Text  } from 'react-native-paper';
import CuestionarioContext from '../../Context/CuestionarioContex';
const Registro = ({setActiva}) => {
     const { resetearPassword,errorRegis,revisarRegis,exito,setExito, regis,setRegis,setErrorRegis}=  useContext(CuestionarioContext);
     const  [email,setEmail] = useState();
     const  [password, setPassword] = useState();
     const   [anima,setAnima] = useState(false);
     const  [mensajeRegis, setMense]  = useState(false);
     const [validar,setValidar] = useState(false);
     const [validarPas,setValidarPas] = useState(false)
     const [validaPant,setvalidaPant]=  useState(false)
     const [password2,setpassword2]= useState();
     const [mensaje,setMensaje] = useState(false);
      
       const Logeo  = async() =>{
             const resultado =  await  firebase.aut.signInWithEmailAndPassword()
       }
       useEffect(()=>{
        setErrorRegis(null)
       },[])
       /*useEffect(()=>{
                if(exito){
                    setActiva(true);
                    setExito(false)
                }
       },[exito])*/
       useEffect(()=>{
         
               if(regis){
                setvalidaPant(true)
                setAnima(true);
                setMense(true);
               }else{
                setAnima(false);
                setMense(false);
               
               }
                 if(exito){
                    setExito(false)
                    setMensaje(true)
                    setMense(false)
               if(validaPant){
                     setTimeout(() => {
                        setActiva(true);
                        setvalidaPant(false)
                        setErrorRegis(null);
                        setMensaje(false)
                     
                    }, 2000);
                  
               }
            }
       },[regis])
         const registrar =() =>{
              console.log('Pass 1-->>',password)
              console.log('Pass 2-->>',password2)
               
                     
                
                if(email&&password&&password2){
                    setValidar(false)
                    if(password === password2){
                        setValidarPas(false);
                         setRegis(true)
                    console.log('Ok registrado');
                     resetearPassword(email,password);
                   //  setValidar(false)
                    console.log('Ok reseteado :)');
                        }else{
                            setValidarPas(true);
                        } 

                    }else{
                        setValidar(true)
                   
                    }
                
           
          
            
            }

    return (
        <View  style={styles.contenedor}>
             < View  style={styles.ancho}>
              {mensajeRegis && ( <View><Text style={{textAlign:"center"}}>Resgistrando...</Text></View> ) }
              {mensaje && ( <View><Text style={{textAlign:"center",fontSize:16 , fontWeight: "bold"}}>PASSWORD RESETEADO CON EXITO...</Text></View> ) }
                 <View  style={styles.text}>
                     <View   style={styles.activi} >
                     <ActivityIndicator  animating={anima} size="large" color="#0000ff"  />
                     </View>
                 <TextInput
            label="Email"
            value={email}
            onChangeText={email => setEmail(email)}
              />
          </View >
          <View style={styles.text}>
        </View>

          <View style={styles.text}>
         <TextInput
          secureTextEntry={true}
            label="Password"
            value={password}
            onChangeText={password => setPassword(password)}
        />
        </View>
        <View style={styles.text}>
        <TextInput
          secureTextEntry={true}
            label="Repita Password"
            value={password2}
            onChangeText={password2 => setpassword2(password2)}
        />
         
        </View>
        { validar  && (<View style={styles.validar}><Text style={styles.textValida}>Por Favor ingrese los datos requeridos</Text></View>)}
        {validarPas  && (<View style={styles.validar}><Text style={styles.textValida}>El passwor debe ser igual</Text></View>)}
    { errorRegis  && (<View style={styles.validarLog}><Text style={styles.textValida}>{errorRegis}</Text></View>)}
      <View style={styles.btn}>
      <Button mode="text" onPress={() => registrar()}>
      Resetaear Password
      </Button>
      </View>
      <View style={styles.btn}>
      <Button mode="text" onPress={() => setActiva(true)}>
        Regresar
      </Button>
      </View>
      </View>
        </View>
    )
}

export default Registro

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
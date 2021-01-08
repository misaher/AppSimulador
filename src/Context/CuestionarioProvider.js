import React, {useState,useEffect}from 'react';
import CuestionarioContext  from './CuestionarioContex';
import firebase  from '../firebase/Firebase';
//import axios from 'axios';
const  CuestionarioProvider = (props)=>{
       const [validadorCarga,setValidador] = useState(true);
       const [usuario,setUsuario] = useState();   
       const [errorLog,setErrorLog] = useState();
       const [logeo,setLogeo]= useState(false);
       const [regis,setRegis] = useState(false);
       const [errorRegis,setErrorRegis] = useState();
       ///para cambio
       const [exito, setExito] = useState(false);  
       const  [revisarRegis,setrevisarRegis] = useState(false);
       const  hi= "hola :)";
       const  [validarUsu,setValidarUsr] = useState(false);
       const [datosUser,setDatosUser] = useState();
       const  [examenes,Setexam] = useState();
       const  [evaluaciones,setevaluaciones] = useState()
       const [aleatorio,setAlerio] = useState();
       const [preguntas,setPreguntas] = useState();
       const  [puntos,setPuntos] = useState(0);
       const [calificar,setCalificar] = useState(false);
       const [total,setTotal] = useState();
       const [califinal,setCalifinal] = useState(0);
       const [idExam,setIdExam] = useState();
         ////variables que evaluaran las condicines  del  si los examenes están activos 
       const  [examAct,setexamAct]  = useState(false);
       const  [exam2Act,setexam2Act] = useState(false);
         ////SalvandoRespuestas
          const [ respuestas,setRespuestas] = useState([]);
          let arreGloResp=[]
          const  [arregloResp ,setarregloResp] = useState([])
          ////States para errores de envio de calificacion 
           const [errorCalifi,setErrorCalifi] =useState(false);

       let url= "https://tranquil-stream-66526.herokuapp.com"
 

       //////********** */ Encargado de  validar si hay examenes y cargarlos si estos estan
          useEffect(()=>{
            const Exam= async()=>{
              try{
                         
                let Status;
                let   {email}= usuario
                  //console.log('Ok usuario----->>>',_id);
                let params={
                    email: email
                }
                let respon = await fetch(`${url}/api/validaexam/obtenerexem`, {
                 method: 'POST', // or 'PUT'
                 body: JSON.stringify(params), // data can be `string` or {object}!
                 headers:{
                   'Content-Type': 'application/json'
                 }
                 })
                 let status= respon.status ;
                    let mensa= await respon.json()
                  if(status==200){
                   //  console.log("OK tiene Evaluciones-->");
                  //console.log('estatus-->>>',mensa.examen);
                 Setexam([mensa.examen])
                  }else if(status==400){
           
                 //   console.log('estatus-->>>',mensa);
                  }
                  
                 }catch (e){
                   //       console.log("Fallo la consulta de Examnes");    
                 }
             } 
              if(usuario){
                ExamObtener();
              }          
          },[usuario])
          ///
          const ExamObtener= async()=>{
            try{
                       
              let Status;
              let   {email}= usuario
                //console.log('Ok usuario----->>>',_id);
              let params={
                  email: email
              }
              let respon = await fetch(`${url}/api/validaexam/obtenerexem`, {
               method: 'POST', // or 'PUT'
               body: JSON.stringify(params), // data can be `string` or {object}!
               headers:{
                 'Content-Type': 'application/json'
               }
               })
               let status= respon.status ;
                  let mensa= await respon.json()
                if(status==200){
                 //  console.log("OK tiene Evaluciones-->");
                //console.log('estatus-->>>',mensa.examen);
               Setexam([mensa.examen])
                }else if(status==400){
         
               //   console.log('estatus-->>>',mensa);
                }
                
               }catch (e){
                 //       console.log("Fallo la consulta de Examnes");    
               }
           } 
    
         /////   Manejador de Login
       const login  = async(email,password)=>{
          const valor=false;
          let params = { 
            email: email,
            password: password
           }
           let Status;
           try{
          let respon = await fetch(`${url}/api/auth`, {
           method: 'POST', // or 'PUT'
           body: JSON.stringify(params), 
           headers:{
             'Content-Type': 'application/json'
           }
           })
           let status= respon.status ;
           let mensa= await respon.json()
              if(status==400){
                 // console.log("Error 400 :(");
                  setLogeo(false); 
                  setErrorLog(mensa.msg)
              }else if(status==200){
                 // console.log("Ok usuario -->> :) ");
                setLogeo(false); 
                setUsuario(mensa.usuario)  
              }   
          
          } catch(e){
             // console.log("Error :(",e);
              setErrorLog(e)
          }
              // setUsuario
              // setErrorLog
       }
       ///Manejador de registro
      const  resetearPassword = async(email,password)=>{
              // console.log("Regsutrando");
              let params = {  
                email: email,
                 password: password
               }
               /////

               /////
               let Status;
                  try{
               let respon = await fetch(`${url}/api/usuarios/resetPassword`, {
               method: 'PUT', // or 'PUT'
                body: JSON.stringify(params), // data can be `string` or {object}!
                headers:{
                  'Content-Type': 'application/json'
                }
                })
                     //console.log(respon);
                let status= respon.status ;
                let mensa= await respon.json()
                    if(status==200){
                       // console.log("Registro Insertado con exito"); 
                        setExito(true)
                          setRegis(false)
                    }else 
                    if(status==400){
                      setErrorRegis(mensa.msg)
                      setExito(false)
                      setRegis(false)
                    }
                   
              } catch(e){
                setErrorLog(e);  
              }
                   
       }
       ///************************************************  Effect Para Generar las preguntas aleatorias  */
       useEffect(()=>{
             
              if(examenes){
              
                      // console.log('Ok Tines un avaluacion por hacer ..... CARGANDO .....');
                      setexam2Act(true);
            ///    console.log("-------------------------------------");
              // console.log("examenes------>",examenes);
               //console.log("examenes------>",examenes[0].numeroPregunt);
              // console.log("-------------------------------------");
            let tama= examenes.numero_pre-1;
            let gene= new Map();
           let i= 0;
           let aleat =[];
           let tam = examenes[0].numero_pre;
          let  max=preguntas.length-1;
          // console.log('Tam--->>>',tam);
           // console.log('Max-------->>>',max);
           setTotal(tam);
           while(i<tam){

            let val= Math.floor(Math.random() * (max - 0)) + 0;
               if(gene.get(val)){  
             }else{
                 gene.set(val,val)
                let  dato=preguntas[val]
                   aleat.push(dato);
                  i++;
             }
            
                 }
                 
                 setAlerio(aleat)
                }else{
             ///       console.log('********************************NO TINES EVALUACIONES :)   ********');
                }
              
        
    
},[examenes])  
       //////  *********************************************UseEffect para traer preguntas de collection
       useEffect( ()=>{
        obtenerPreguntas()
      
},[])



 // let dato=preguntas[0]
            // setPreguntas(preguntas)
            const  obtenerPreguntas = async () =>{
                console.log("Consutando Preguntas..............");
              try{
                let respon= await fetch(`${url}/api/preguntas`,{
                    method: 'GET',
                      headers:{
                        'Content-Type':'application/json'
                      }
                })
                  let status = respon.status;
                  let mensa= await respon.json()
              if(status==200){
                  console.log("Ok preguntas Consultadas..................");
                setPreguntas(mensa.preguntas)
              }else 
              if(status==400){
                  console.log('hubo un error en la consulta ');
              }

                  
              }catch(e){

              }

            }

 
       //***********Metodo de  utilizado para subir calificaciones  en collection evaluaciones *******/
              const  Evaluaciones = async (calificacion)=>{
                               //    console.log('ok datos.....');
                               let hoy = new Date();
                               let dia= hoy.getDate() + '-' + ( hoy.getMonth() + 1 ) + '-' + hoy.getFullYear();
                               let hora = hoy.getHours() + ':' + hoy.getMinutes() + ':' + hoy.getSeconds();
                               let fecha= dia + " "+ hora 
                               
                                     let   idExamen= examenes[0]._id;
                                     let  res= JSON.stringify(arregloResp);
                                   // let res = JSON.stringify( [{'idE': '5ff6a53615181c0017d5b23c', 'reco': 1, 'reselc': 2}, {'idE': '5ff69b6b15181c0017d5b184', 'reco': 1, 'reselc': 1}])
                                  
                                     let params={
                                      idExamen:idExamen,
                                        respuestas: res
                                     }
                                     
                                     let params2 ={      
                                      id: idExamen,
                                    califica: calificacion,
                                    envioExamen: fecha
                                  }
                                  

                                let respon = await fetch(`${url}/api/revision`, {
                                   method: 'PUT', // or 'PUT'
                                   body: JSON.stringify(params2), // data can be `string` or {object}!
                                   headers:{
                                     'Content-Type': 'application/json'
                                   }
                                   })
                                   let status= respon.status ;
                                    console.log('estatus-->>>>>>>>>>>>>>>',status);
                                      let mensa= await respon.json()
                                    if(status==200){
                                                                          
                                        let respon2 = await fetch(`${url}/api/respuestas`, {
                                        method: 'POST', // or 'PUT'
                                        body: JSON.stringify(params), // data can be `string` or {object}!
                                        headers:{
                                          'Content-Type': 'application/json'
                                        }
                                        }) 
                                        let status2= respon2.status ;
                                        console.log('estatus-->>>>>>>>>>>>>>>',status);
                                          let mensa2= await respon2.json()
                                          if(status==200){
                                               console.log('Calificación registrada :) con exito');
                                           setarregloResp( [])
                                           setErrorCalifi(false)
                                          }else if(status==400){
                                                  console.log('Error al registrar :) la calificación ')
                                                setErrorCalifi(true);
                                                }
                                    }else if(status==400){
                                         setErrorCalifi(true)
                                      console.log('Error en Update :('); 
                                        //console.log(mensa.msg);
                                    }   

                          }
                               
                      
       ////**    Fin de metodo Evaluaciones  ****** */
         const almacenarRespuestasMe =(dt)=>{
          
            let datos2=[] ;
            setarregloResp( [...arregloResp,
                                 [dt]]
            )

           
        }

       return(
      <CuestionarioContext.Provider
        value={{
              hi,
            validadorCarga,
            setValidador,
            usuario,
            login,
            resetearPassword,
            errorRegis,
            errorLog,
            revisarRegis,
            examenes,
            aleatorio,
            puntos,
            setPuntos,
            calificar,
            setCalificar,
            total,
            setTotal,
            califinal,
            setCalifinal,
            idExam,
            setIdExam,
            Evaluaciones,
            examAct,
            setexamAct,
            exam2Act,
            setexam2Act,
            exito,
            setExito,
            logeo,
            setLogeo,
            regis,
            setRegis,
            setErrorRegis,
            respuestas,
            setRespuestas,
            almacenarRespuestasMe,
            setarregloResp,
            arregloResp,
            ExamObtener,
            errorCalifi,
            setErrorCalifi
            
        }}
      >
         {props.children}
      </CuestionarioContext.Provider>

    
    )
}

export default CuestionarioProvider;
 
import React, {useState,useEffect}from 'react';
import PreguntasContext  from './PreguntasContext';
const PreguntasProvider = (props) => {
   
        let url= "https://tranquil-stream-66526.herokuapp.com";
         const [tiposP,setTipos] = useState([])
         const [preguntasTipos,setPreguntasTipos] =useState([])
           useEffect(()=>{

           },[])
        
         const cargaTipos =async() =>{
            try{
                let  respon=  await  fetch(`${url}/api/tipos`,{
                        method: 'GET',
                        headers:{
                          'Content-Type': 'application/Json'
                        }
                    })
                     let status = respon.status;
                     let mensa= await respon.json()
                     if(status==200){
                           console.log('Consulta realizada con extito ------>>>> :) ')

                            setTipos(mensa.tipos)
                            
   
                     }else 
                     if(status==400){
                         console.log('hubo un error en la consulta ');
                     }
                    ///CONSULTAR_TIPO
               }catch(e){
   
               }
             
        }
        //preguntas/tipos/
        const cargaPreguntasTipos =async(tipo) =>{
             console.log("Ok tipo--------------->>>",tipo);
            try{
                let  respon=  await  fetch(`${url}/api/preguntas/tipos/${tipo}`,{
                        method: 'GET',
                        headers:{
                          'Content-Type': 'application/Json'
                        }
                    })
                     let status = respon.status;
                     let mensa= await respon.json()
                     if(status==200){
                           console.log('Tipso consulatdos con exito ------>>>> :) ')
                           //console.log(mensa.preguntas);
                           setPreguntasTipos(mensa.preguntas)
                           
                            
   
                     }else 
                     if(status==400){
                         console.log('hubo un error en la consulta ');
                     }
                    ///CONSULTAR_TIPO
               }catch(e){
   
               }
             
        }
   

    return (
        <PreguntasContext.Provider
          value={{
            tiposP,
            preguntasTipos,
            cargaTipos,
            cargaPreguntasTipos
          }}
        >
      {props.children}
        </PreguntasContext.Provider>
      );
}
 
export default PreguntasProvider;
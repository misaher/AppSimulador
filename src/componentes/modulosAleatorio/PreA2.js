import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Avatar, Button, Card, Title, Paragraph,Text } from 'react-native-paper';
import PreA3 from './PreA3';
const PreA2 = ({aleatorio}) => {                  
    return (
        <View >
            <View>
                 {aleatorio.map( (pr,index)=> (
                     
                     <View  style={styles.pr} key={index}>
            <Title  style={styles.tit}>{index+1}- { pr.pregunta}</Title>
           
              <View style={styles.pres}>
                  <PreA3 
                        idPr={pr._id}
                        respuestav = {pr.respuesta}
                        respuestas={pr.respuestas}
                    />
              </View>
              </View>
               ))}
            </View>
        </View>
    )
}

export default PreA2

const styles = StyleSheet.create({
    pr:{
     
       marginHorizontal: 10,
       paddingHorizontal: 20,
        borderColor: "#143752",
        borderRadius: 5,
        borderWidth: 2,
       marginBottom: 10,
      
    },
    tit:{
        fontSize: 15,
    },
    pres :{
         marginTop: 5
    },
    vexam:{
          textAlign: "center"
    }
})

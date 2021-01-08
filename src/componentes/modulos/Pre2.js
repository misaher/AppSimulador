import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Avatar, Button, Card, Title, Paragraph,Text } from 'react-native-paper';
import Pre3 from './Pre3';
const Pre2 = ({index,preguntas}) => {
        
         
            
                  
    return (
        <View >
            <View>
                 {preguntas.map( (pr,index)=> (
                     
                     <View  style={styles.pr} key={index}>
            <Title  style={styles.tit}>{index+1}- { pr.pregunta}</Title>
              <View style={styles.pres}>
                     <Pre3 
                         respuestas={pr.respuestas}
                        respuestav = {pr.respuesta}
                    />
              </View>
              </View>
               ))}
            </View>
        </View>
    )
}

export default Pre2
/*


*/

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

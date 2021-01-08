import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Avatar, Button, Card, Title, Paragraph,Text } from 'react-native-paper';
import PreR from  './PreR';
const Pregun = ({pre,index}) => {
        
            const valor=pre[0].val;
            const  resp= pre[0].r;
            const  exam = pre[0].ex;
            
                  
    return (
        <View style={styles.pr}>
            <View>
                {exam  && ( <Text style={styles.vexam}>Pregunta de examen</Text>)}
            <Title style={styles.tit}>{`${index}- `}{ pre[0].pr}</Title>
              <View style={styles.pres}>
                    <PreR 
                     valor ={valor}
                     index={index}
                     resp={resp}
                     exam={exam}
                    />
              </View>
            </View>
        </View>
    )
}

export default Pregun

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

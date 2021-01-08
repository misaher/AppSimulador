import React from 'react';
 import Preguntas from  '../modulos/Preguntas';
 import { createStackNavigator } from '@react-navigation/stack';
 import Cuestionario   from '../Cuestionario';
 import PreguntasAl from '../modulosAleatorio/PreguntasAl';
 import RackPreguntas from  '../RackPreguntas';
const  Navegacion2 =({navigation}) =>{
 const Stack = createStackNavigator();
 /*
   

 */
    return(
        <Stack.Navigator>
               <Stack.Screen 
                 name="RackPreguntas"
                 component={RackPreguntas}
               />
               <Stack.Screen 
            
                 name="Evaluacion"
                 component={PreguntasAl}
               />
            

    


        </Stack.Navigator>
    )
}

 export default  Navegacion2;
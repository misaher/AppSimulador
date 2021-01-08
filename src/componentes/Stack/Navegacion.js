import React from 'react';
 import Preguntas from  '../modulos/Preguntas';
 import { createStackNavigator } from '@react-navigation/stack';
 import Cuestionario   from '../Cuestionario';
const  Navegacion =({navigation}) =>{
 const Stack = createStackNavigator();
    return(
        <Stack.Navigator>
               <Stack.Screen 
                 name="Cuestionario"
                 component={Cuestionario}
               />
               <Stack.Screen 
                  name="Preguntas"
                  component={Preguntas}  
                  
               />


        </Stack.Navigator>
    )
}

 export default  Navegacion;
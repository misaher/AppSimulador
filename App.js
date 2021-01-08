
import React,{useState,useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  StatusBar,
  //LogBox,
} from 'react-native';
import { Button,Text} from 'react-native-paper';
import Cuestionario from './src/componentes/Cuestionario';
import RackPreguntas  from './src/componentes/RackPreguntas';
import { DefaultTheme,Provider as PaperProvider } from 'react-native-paper';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import  Navegacion from  './src/componentes/Stack/Navegacion';
import  Navegacion2 from   './src/componentes/Stack/Navegacionn2';

import CuestionarioProvider  from './src/Context/CuestionarioProvider';
import PreguntasProvider  from './src/Context/preguntas/PreguntasProvider';

import Loging  from './src/componentes/Aut/Loging';
const App =()=> {
  const Tab = createBottomTabNavigator();
   const [valida,setValida] = useState(false);
   const [validarLog, setvalidarLog] = useState(false);
   useEffect(()=>{
          if(validarLog){
            setValida(true)
          }
   },[validarLog])
    //LogBox.ignoreAllLogs();
  return (
    <>    
       
        <NavigationContainer>
          <CuestionarioProvider>
             <PreguntasProvider>
                    { valida ?  
                  <Tab.Navigator
                  initialRouteName="App"
                  tabBarOptions={{
                    activeTintColor: '#e91e63',
                  }}
                >
                  <Tab.Screen
                    name="Guias"
                    component={Navegacion}
                    options={{
                      tabBarLabel: 'Guias',
                      tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="grid" color={color} size={size} />
                      ),
                    }}
                  />
                  <Tab.Screen
                    name="Examenes"
                    component={Navegacion2}
                    options={{
                      tabBarLabel: 'Examenes',
                      tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="layers" color={color} size={size} />
                      ),
                    
                    }}
                  />
                    
                </Tab.Navigator>  

                :  <Loging
                setvalidarLog={setvalidarLog}
                /> }
             </PreguntasProvider>   
         </CuestionarioProvider>
     </NavigationContainer>
    
    </>
  );
};

const styles = StyleSheet.create({
  contenedor:{
          paddingHorizontal: 25,
          marginTop: 10  ,
          width: "85%"
  }
});

export default App;
import  app from  'firebase/app';
import 'firebase/auth';
import    'firebase/firestore';

import   Config from './Config';


 class   Firebase {
     constructor (){
           if(!app.apps.length){
                app.initializeApp(Config);
           }
           this.aut = app.auth();
            this.db= app.firestore();
            app.firestore().settings({ experimentalForceLongPolling: true });
     }

          

 }

 const firebase = new Firebase();
 export default firebase;
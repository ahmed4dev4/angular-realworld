// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.

export const environment = {
  
  production: true,
  api_url: 'https://conduit.productionready.io/api',
   firebaseConfig : {
    apiKey: 'AIzaSyDaRtpcy0c9WFm-Z2-ychZgG0jllxuhlWU',
    authDomain: 'angular-realworld-9dbf2.firebaseapp.com',
    databaseURL: 'https://angular-realworld-9dbf2.firebaseio.com',
    projectId: 'angular-realworld-9dbf2',
    storageBucket: 'angular-realworld-9dbf2.appspot.com',
    messagingSenderId: '858291159623',
    appId: '1:858291159623:web:18f568fd7dd93cefa92762'
  }
 
};

// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyCjUxIJq70vBNw4ZE7YUv0iE4qQIN8s01I',
    authDomain: 'tour-of-heroes-b186f.firebaseapp.com',
    databaseURL: 'https://tour-of-heroes-b186f.firebaseio.com',
    projectId: 'tour-of-heroes-b186f',
    storageBucket: '',
    messagingSenderId: '259610824952'
  }
};

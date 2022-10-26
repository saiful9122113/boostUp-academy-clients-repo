import './App.css';
import { RouterProvider } from 'react-router-dom';
import { routes } from './Routes/Routes';


function App() {
  return (
    <div className="App">
      <RouterProvider router={routes}></RouterProvider>
    </div>
  );
}

export default App;


// import './App.css';
// import { RouterProvider } from 'react-router-dom';
// import { routes } from './Routes/Routes';
// import {getAuth, GoogleAuthProvider, signInWithPopup} from 'firebase/auth'
// import app from './firebase/firebase.config';

// const auth=getAuth(app);

// function App() {
//   const provider=new GoogleAuthProvider();

//   const handleGoogleSignIn=()=>{
//     signInWithPopup(auth, provider)
//     .then(result=>{
//       const user=result.user;
//       console.log(user);
//     })
//     .catch(error=>{
//       console.log('Error: ',error);
//     })
//   }

//   return (
//     <div className="App">
//       <button onClick={handleGoogleSignIn}>Google Sign In</button>
//       <button>Github Sign In</button>
//       <RouterProvider router={routes}></RouterProvider>
//     </div>
//   );
// }

// export default App;

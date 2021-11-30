import { useState } from "react";
import { Link } from 'react-router-dom'
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilLockLocked, cilUser } from '@coreui/icons'
import Register from '../register/Register';
import useAuth from '../../hooks/useAuth';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import initialization from '../LoginAuth/Login/Firebase/firebase.init';
import { useHistory, useLocation } from 'react-router';
const Login = () => {
    const [newUser,setNewUser] = useState(false);
    const showRegisterPage = () =>{
          setNewUser(true);
    }

    //login case

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLogin, setIsLogin] = useState(false);
    const location = useLocation();
      const history = useHistory();
  
    const auth = getAuth();
    //  const { signInGoogle } = useAuth();
    
      
      // const handleGoogle=()=>{
      //     signInGoogle()
      //     .then(result => {
     
      //        history.push(location.state?.from ||"/home"); 
      //       })
      //       .finally(() =>{
      //         refreshPage();
      //       }
      //       )
           
      // }
    
  
    const toggleLogin = e => {
      setIsLogin(e.target.checked)
    }
  
    const handleNameChange = e => {
      setName(e.target.value);
    }
    const handleEmailChange = e => {
      setEmail(e.target.value);
    }
  
    const handlePasswordChange = e => {
      setPassword(e.target.value)
    }
  
    const handleRegistration = e => {
      e.preventDefault();
      console.log(email, password);
      // if (password.length) {
      //   setError('Password Must be at least 6 characters long.')
      //   return;
      // }
      // if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
      //   setError('')
      //   setError('Password Must contain 2 upper case');
      //   return;
      // }
  
      if (isLogin) {
        processLogin(email, password);
  
      }
      else {
        registerNewUser(email, password);
      }
    
    }
  
    const refreshPage = ()=>{
      history.push(location.state?.from || "/home"); 
  
      window.location.reload();
            
   }
  
    const processLogin = (email, password) => {
      signInWithEmailAndPassword(auth, email, password)
        .then(result => {
          const user = result.user;
          console.log(user);
          setError('');
        refreshPage();
  
        })
        .catch(error => {
          setError('you are not Registred. please Registration!!');
        })
    }
  
    const registerNewUser = (email, password) => {
      createUserWithEmailAndPassword(auth, email, password)
        .then(result => {
          const user = result.user;
          console.log(user);
          setError('');
          
          setUserName();
        refreshPage();
  
        })
        .catch(error => {
          setError('you are allready Registred. please login!!');
        })
    }
  
    const setUserName = () => {
      updateProfile(auth.currentUser, { displayName: name })
        .then(result => { })
    }
  


  return (
      <>
 <div className="mx-5 w-lg-50 w-75 mx-auto">

<div className="custom-form ">
<form onSubmit={handleRegistration} className='p-3 '>
  <h3 className="text-secondary">Please {isLogin ? 'Login' : 'Register'}</h3>
  {!isLogin && <div className="row mb-3">
    <label htmlFor="inputName" className="col-sm-2 col-form-label">
    <i className="fas fa-file-signature fa-2x"></i>
      </label>
    <div className="col-sm-10">
      <input type="text" onBlur={handleNameChange} className="form-control" id="inputName" placeholder="Your Name" />
    </div>
  </div>}
  <div className="row mb-3">
    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
    <i className="fas fa-envelope fa-2x"></i>
      </label>
    <div className="col-sm-10">
      <input onBlur={handleEmailChange} type="email" className="form-control" id="inputEmail3" placeholder="Inter Your Email" required />
    </div>
  </div>
  <div className="row mb-3">
    <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">
    <i className="fas fa-unlock-alt fa-2x"></i>
      </label>
    <div className="col-sm-10">
      <input type="password" onBlur={handlePasswordChange} className="form-control" id="inputPassword3" placeholder="Inter Your Password" required />
    </div>
  </div>
  <div className="row mb-3">
    <div className="col-sm-10 offset-sm-2">
      <div>
        <label className="form-check-label" htmlFor="gridCheck1">
          {
            isLogin?'If you not registerd?':'Already you Registered?'
          }
           <input  className="form-check-input" onChange={toggleLogin} type="checkbox" id="gridCheck1" />
          
        </label>
      </div>
    </div>
  </div>
  <div className=" text-danger text-center fw-bold my-2">{error}</div>
  <button type="submit" className="btn btn-info">
    {isLogin ? 'Login' : 'Register'}
  </button>
</form>
</div>
<p className="mt-3 text-danger fw-bold">Or you can Register with : </p>
<div className="m-3">
{/* <button className="bg-info" onClick={handleGoogle}>  <i className="fab fa-google-plus fa-2x"></i>Google Sign In</button> */}
</div>

</div>

    {!newUser?<div className="bg-light d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={8}>
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody>
                  <CForm>
                    <h1>Login</h1>
                    <p className="text-medium-emphasis">Sign In to your account</p>
                    <CInputGroup className="mb-3">
                      <CInputGroupText>
                        <CIcon icon={cilUser} />
                      </CInputGroupText>
                      <CFormInput placeholder="Username" autoComplete="username" />
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CInputGroupText>
                        <CIcon icon={cilLockLocked} />
                      </CInputGroupText>
                      <CFormInput
                        type="password"
                        placeholder="Password"
                        autoComplete="current-password"
                      />
                    </CInputGroup>
                    <CRow>
                      <CCol xs={6}>
                        <CButton color="primary" className="px-4">
                          Login
                        </CButton>
                      </CCol>
                      <CCol xs={6} className="text-right">
                        <CButton color="link" className="px-0">
                          Forgot password?
                        </CButton>
                      </CCol>
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>
              <CCard className="text-white bg-primary py-5" style={{ width: '44%' }}>
                <CCardBody className="text-center">
                  <div>
                    <h2>Sign up</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                      tempor incididunt ut labore et dolore magna aliqua.
                    </p>  
                      <CButton onClick={() => setNewUser(true)} color="primary" className="mt-3" active tabIndex={-1}>
                        Register Now!
                      </CButton>
                  </div>
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>:<Register/>}
    </>
  )
}

export default Login
import {BrowserRouter, Routes,Route,Link} from 'react-router-dom'
import {Landing,Error,Register,Protectedroute} from './pages'
import { AllJobs,AddJob,Profile,Stats,SharedLayout } 
from './pages/dashboard';
function App() {
  return (
  <BrowserRouter>
  <Routes>

    <Route path ='/' element={
    
    <Protectedroute>
      <SharedLayout/>
    </Protectedroute>
    }>
    <Route index element ={<Stats/>}/>
     <Route path ='all-jobs' element ={<AllJobs/>}/>
     <Route path ='add-job' element ={<AddJob/>}/>
     <Route path ='profile' element ={<Profile/>}/>
    </Route>
    <Route path='/register' element={<Register/>}/> 
    <Route path='/landing' element={<Landing />}/> 
    <Route path='*' element={<h1><Error/></h1>}/> 
  </Routes>

  </BrowserRouter>
    
  )
  
}

export default App;

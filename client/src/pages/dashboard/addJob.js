import {FormRow,FormRowSelect,Alert} from '../../components'
import { useAppContext } from '../../context/appContext'
import Wrapper from '../../assets/wrappers/DashboardForm.js'
import { SET_EDIT_JOB } from '../../context/actions';
const AddJob=()=>{
const {
  isLoading,
  isEditing,
  showAlert,
  displayAlert,
  position,
  company,
  jobLocation,
  jobType,
  jobTypeOptions,
  status,
  clearValues,
  statusOptions,
  handleChange,
  createJob,
  editJob,
}=useAppContext();

const handleSubmit=(e)=>{
  e.preventDefault()
  if(!position || !company || !jobLocation){
    displayAlert()
    return
  }
  if(isEditing){
    editJob()
    return

  }
  createJob()
}
const handleJobInput=(e)=>{
  const name=e.target.name
  const value=e.target.value 
  handleChange({name,value})

}

return (
  <Wrapper>
    <form className="form" onSubmit={handleSubmit}>
      <h3>{isEditing ? ' edit job' :'add job'}</h3>
      {showAlert && <Alert />}

      <div className="form-center">

        <FormRow 
        type='text'
        name='position'
        value={position} 
        handleChange={handleJobInput} 
         />
      
         <FormRow 
        type='text'
        name='company'
        value={company} 
        handleChange={handleJobInput}
        />
        
        <FormRow 
        type='text'
        name='job Location'
        value={jobLocation} 
        handleChange={handleJobInput}
         />

         <FormRowSelect
         name='status'
         value={status}
         handleChange={handleJobInput}
         list={statusOptions}
         />

         <FormRowSelect
         name='jobType'
         labelText='job Type'
         value={jobType}
         handleChange={handleJobInput}
         list={jobTypeOptions}
         />



         <div className="btn-container">
         <button 
         type='submit' className='btn btn-block submit-block' 
         onClick={handleSubmit}
         disabled={isLoading}>
        submit
       </button>
       <button
              className='btn btn-block clear-btn'
              onClick={(e) => {
                e.preventDefault()
                clearValues()
              }}
            >
              clear
            </button>
      
      </div>
      </div>



  </form>



  </Wrapper>

)
}







export default AddJob
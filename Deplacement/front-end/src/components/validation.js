
const validation = (values)=>{
    let errors = {};

    if(!values.email){
errors.email = "Email Required"

    }
    if(!values.password){
        errors.password = "password Required"
        
            }
            return errors;
 }   
  

 
     export default validation ;     
            


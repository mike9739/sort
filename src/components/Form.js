import React , {useState} from 'react';
import axios from 'axios';

 const Form = () =>{
     const [numbers, setNumbers] = useState();
     const handleSubmit = (e)=>{
        e.preventDefault();
            if(/^[1-8](,[1-8])*$ $/.test(numbers)){
                axios.post('http://localhost:3001',numbers)
            }
            else{
                alert('numeros no validos');
            }

            
     }

     return(
         <form onSubmit={handleSubmit}>
            <label> First name
            <input type='text' value={numbers} onChange={e => setNumbers(e.target.value)}></input>
            </label>
            <input type="submit" value="Submit" />
         </form>
     );

}

export default Form;
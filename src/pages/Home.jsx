import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {

    const navigate=useNavigate();
    const [data,setData]= useState({
        name:"",
        username:"",
        email:"",
        mobile:"",
        checkbox:false,
    });

    const [errors,setErrors]= useState({
        name:"",
        username:"",
        email:"",
        mobile:"",
        checkbox:"",
    })
    const handleInput=(e)=>{
        setData({
            ...data,
            [e.target.name]: e.target.type==="checkbox"? e.target.checked:e.target.value,
        })
    }

    const handleSubmit=(e)=>{

        e.preventDefault();
        let errors={};
        //Validation logic
        if (!data.name || data.name.trim()===""){
            errors.name="Field is required!";
        }
        if (!data.username || data.username.trim()===""){
            errors.username="Field is required!";
        }
        if (!data.mobile || data.mobile.trim()===""){
            errors.mobile="Field is required!";
        }
        if (!data.email || data.email.trim()===""){
            errors.email="Field is required!";
        }
        if(!data.checkbox){
            errors.checkbox="Check this box if you want to proceed";
        }   

        setErrors(errors);

        if(Object.keys(errors).length>0){
            return;
        }else{
			//alert user and save to local storage
            alert("Form submitted successfully");
            localStorage.setItem("user", JSON.stringify(data));
			//clear data
            setData({
                name:"",
                username:"",
                email:"",
                mobile:"",
                checkbox:false,
            });
			//navigate to selection
            navigate("/selection");
        }
    }

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<input 
				type='text' 
				name='name' 
				placeholder='Name' 
				value={data.name} 
				onChange={handleInput}/>
				<span>{errors.name}</span>
				<input 
					type='text' 
					name='username' 
					placeholder='UserName' 
					value={data.usernamename} 
					onChange={handleInput}/>
				<span>{errors.username}</span>
				<input 
					type='email' 
					name='email' 
					placeholder='Email' 
					value={data.email} 
					onChange={handleInput}/>
				<span>{errors.email}</span>
				<input 
					type='tel' 
					name='mobile' 
					placeholder='Mobile'
					value={data.mobile} 
					onChange={handleInput}/>
				<span>{errors.mobile}</span>
				<div>
					<input 
						type='checkbox' 
						name='checkbox' 
						id='checkbox' 
						value={data.checkbox} 
						onChange={handleInput}/>
					<label htmlFor='checkbox'>Share my registration data with Superapp</label>
				</div>
				<span>{errors.checkbox}</span>
				<button type='submit'>SIGN UP</button>
			</form>
		</div>
	)
}

export default Home
import * as React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import axios from 'axios'
const schema = yup.object().shape({
    first_name:yup
    .string()
    .required("First name is required")
    .min(2, "Name must be at least 2 characters"),
    last_name:yup
    .string()
    .required("Last name is required")
    .min(2, "Name must be at least 2 characters"),
    username:yup
    .string()
    .required("User name is required")
    .min(5, "Name must be at least 5 characters"),
   email: yup
   .string()
   .email("Enter a valid email")
   .required("Email is a required field"),
   password: yup
    .string()
    .required("Please enter your password")
    .matches(
      /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
      "Password must contain at least 8 characters, one uppercase, one number and one special case character"
    ),
   phone:yup
   .number()
   .required("Phone number is required")
   .min(9,"Should contain 9 digits"),

  country_code:yup
  .number()
         
   
  });
export default function Signup(){
    
    
    const {  register, formState: { errors }, handleSubmit } = useForm(
        {
            resolver: yupResolver(schema)}
    );
    
     
        
    const onSubmit =  (event) => {
                      event.captcha=true;
        console.log(JSON.stringify(event),"///////////////////////////////////");
       
           axios.post('http://134.209.148.76:2000/api/v3/sign-up/talent',{event}, {
            headers: {
                'Content-Type': 'application/json',
            }
        })
               
            .then(function(response){
               console.log(response.data)
               
               
           }).catch(function(error){
               console.log(error);
           })
          
      }

       
        return (
            <>       
            <form onSubmit={handleSubmit(onSubmit)}>
                <h3 className="heading">Create Your Fan Account</h3>
                     
                <div className="form-group">
                    <label  className="label">First name</label>
                    <input {...register("first_name")} type="text" className="form-control" placeholder="First name" />
                    <p style={{color:"yellow"}}>
                        {errors.first_name?.message}
                    </p>
                </div>

                <div className="form-group">
                    <label className="label">Last name</label>
                    <input {...register("last_name")} type="text" className="form-control" placeholder="Last name" />
                    <p style={{color:"yellow"}}>
                        {errors.last_name?.message}
                    </p>
                </div>
                <div className="form-group">
                    <label  className="label">User name</label>
                    <input {...register("username")} type="text" className="form-control" placeholder="User name" />
                    <p style={{color:"yellow"}}>
                        {errors.username?.message}
                    </p>
                </div>

                <div className="form-group">
                    <label  className="label">Email</label>
                    <input {...register("email")} type="email" className="form-control" placeholder="Email name" />
                    <p style={{color:"yellow"}}>
                        {errors.email?.message}
                    </p>
                </div>
                <div className="form-group">
                    <label  className="label">Countrycode</label>
                    <input {...register("country_code")} type="tel" className="form-control" placeholder="Enter country code" />
                    <p style={{color:"yellow"}}>
                        {errors.country_code?.message}
                    </p>
                </div>
                <div className="form-group">
                    <label  className="label">Phone number</label>
                    <input {...register("phone")} type="tel" className="form-control" placeholder="Enter phone number" />
                    <p style={{color:"yellow"}}>
                        {errors.phone?.message}
                    </p>
                </div>
                <div className="form-group">
                    {/* <label  className="label">TimeZone</label> */}
                    {/* <input type="email" className="form-control" placeholder="Enter email" /> */}
                    <label  className="label">
                    TimeZone
                   </label>
                  <div className="form-group ">
                      <select style={{padding:"0"}}className="form-control " {...register("timezone")}  >
                          
                      
                                        <option value="America/New_York">America/New_York</option>
                                        <option value="America/New_York">America/New_York</option>
                                        <option value="America/New_York">America/New_York</option>
                                        
                      </select>
                      
                  </div>
                </div>

                <div className="form-group">
                    <label  className="label">Password</label>
                    <input {...register("password")} type="password" className="form-control" placeholder="Password" />
                    <p style={{color:"yellow"}}>
                        {errors.password?.message}
                    </p>
                </div>
                <div className="form-group" style={{textAlign:"center"}}>
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1" >I agree to the <a href="#top" >Terms and Conditions</a></label>
                    </div>
                </div>

                <button type="submit"  className="btn btn-success btn-lg col-md-12 text-center" style={{borderRadius:"50px"}}>Sign Up</button>
                
            </form>
            <p className="forgot-password text-right text-center"style={{textAlign:"center"}}>
            Already registered <a href="#top">sign in?</a>
        </p>
            </>
        );
    }

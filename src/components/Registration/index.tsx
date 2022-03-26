import React, { useState, useRef } from 'react';
import { APIService } from '../../Services/api';
import {Form} from '../Form';

import './register.css'

const Registration: React.FC = () => {
  const [registrationData, setRegistrationData] = useState<Object>({});
  const password = useRef({});
	const formData = [
    {
      label: "I am *",
			required: true,
			props: {
				name: "userType",
        type: "radio",
        selected: 'Seller',
        radioOptions : [
          'Buyer',
          'Seller'
        ]
			}
    },
    {
			label: "First Name *",
			required: true,
			props: {
				name: "firstname",
        type: "text",
        maxLength: 30
			}
		},
    {
			label: "Last Name *",
			required: true,
			props: {
				name: "lastName",
        type: "text",
        maxLength: 30
			}
		},
    {
			label: "Mobile Number *",
			required: true,
			props: {
				name: "mobile_number",
        type: "tel",
        maxLength: 13
			}
		},
    {
			label: "Address *",
			required: true,
			props: {
				name: "address",
        type: "text",
        maxLength: 200
			}
		},
    {
			label: "Zip Code *",
			required: true,
			props: {
				name: "postal_code",
        maxLength: 8
			}
		},
    {
			label: "Country",
			props: {
				name: "country",
        type: "select",
        optionsData : [
          {'code': 'CA', value: 'Canada'},
          {'code': 'US', value: 'United States'},
          {'code': 'MX', value: 'Mexico'},
        ]
			}
		},
    {
			label: "Preferred Language",
			props: {
				name: "preferred_language",
        type: "select",
        optionsData : [
          {'code': 'english', value: 'English'},
          {'code': 'hindi', value: 'Hindi'},
        ]
			}
		},
		{
			label: "Email",
			required: true,
			props: {
				name: "email",
        type: "email"
			}
		},
		{
			label: "Password (6 characters minimum)",
			required: true,
			props: {
				name: "password",
        type: "password",
        maxlength: 20,
        minlength: 6
			}
		},
		{
			label: "Confirm Password (6 characters minimum)",
			required: true,
      requiredOptions: {
        validate: (value: any) => {
          console.log(value, registrationData);
        }},
			props: {
				name: "confirmPassword",
        type: "password",
        maxlength: 20,
        minlength: 6
			}
		},
		{
			label: "",
			required: true,
			props: {
				name: "active",
        type: "checkbox",
        checkboxOptions : [
          "I agree to the terms of service"
        ]
			}
		}
	];

  const formDataCallBack = (data:any) => {
    delete data.confirmPassword;
    setRegistrationData(data);
    let submitData={};
    let positionLat= 0, positionLong=0;

    const submitDataBuyer = {
      "name": data.firstname+ ' '+data.lastName,
      "email": data.email,
      "password": data.password,
      "mobile": data.mobile_number,
      "language": data.preferred_language,
      "address": {
          "pincode": data.postal_code,
          "country": data.country,
          "fullAddress": data.address
      }
    }

    if(navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        positionLat = position.coords.latitude;
        positionLong  = position.coords.longitude;
      });
    }

    const submitDataSeller = {
      "name": data.firstname+ ' '+data.lastName,
      "email": data.email,
      "password": data.password,
      "mobile": data.mobile_number,
      "language": data.preferred_language,
      "address": {
          "pincode": data.postal_code,
          "country": data.country,
          "fullAddress": data.address
      },
      "location": {
        "type": "Point",
        "coordinates": [positionLong, positionLat],
      },
    }

    let url = ''
    if(data.userType === "Seller") {
      url = 'https://backend-hackathon.herokuapp.com/api/farmer/register';
      submitData=submitDataSeller;
    } else {
      submitData=submitDataBuyer
      url = 'https://backend-hackathon.herokuapp.com/api/buyer/register';
    }

    APIService.axiosCall(url, {
      method: "POST",
      data: submitData,
      successCallback: (resp:any) => {
        console.log(resp);
      },
      errorCallback: (err:any) => console.log(err)
    });
    console.log('formDataCallBack', data);
  }

  return (
     <div>
        <h6 className='subtitleForm'>If you are already registered <a href="/tab2">Login here.</a> Otherwise, tell us more about you! Your sign up information will help us providing a great experience.
  For sellers, additional information will be needed to receive funds.</h6>
        <Form
          fields= {formData}

          formDataCallBack = {formDataCallBack}
          submitLabel="Submit"
        />
    </div>
  );
};

export default Registration;

import React from 'react';
import { APIService } from '../../Services/api';
import {Form} from '../Form';

const Registration: React.FC = () => {
	const formData = [
    {
      label: "I am *",
			required: true,
			props: {
				name: "userType",
        type: "radio",
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
			label: "Preferred Products",
			props: {
				name: "preferred_product",
        type: "checkbox",
        checkboxOptions : [
          'Corn',
          'Almond',
          'Hazelnut',
          'Triticale',
          'Barley',
          'Corn',
          'Almond',
          'Hazelnut',
          'Triticale',
        ]
			}
		},
    {
			label: "Other Preferred Products",
			props: {
				name: "preferred_product_other",
        type: "text"
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
			props: {
				name: "password",
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

  return (
     <div>
       <Form fields= {formData} title='Sign Up' subContent='If you are already registered Login here. Otherwise, tell us more about you! Your sign up information will help us providing a great experience.
For sellers, additional information will be needed to receive funds.' />
    </div>
  );
};

export default Registration;

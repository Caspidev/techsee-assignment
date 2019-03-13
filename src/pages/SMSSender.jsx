import React, { Component } from 'react'
import './App.css'

const ServerAddress = 'https://techsee-site.herokuapp.com/';


export default class SMSSender extends Component {
	
	state = {
		prefix: "",
		phonenumber: "",
		}
	
	  handleInputChange = event => {
	
		const target = event.target
		const value = target.value
		const name = target.name
	
		this.setState({
		  [name]: value,
		})
	  }	

		handleSubmit = async (event) => {
			event.preventDefault();
			let prefix = this.state.prefix;
			let phone = this.state.phonenumber;

			const formData = new URLSearchParams();
			formData.append('prefix', prefix);
			formData.append('phonenumber', phone);

			try {
					await fetch(ServerAddress + 'sendsms/', {
							mode: 'no-cors',
							method: 'POST',
							headers: {
									'Accept': 'application/x-www-form-urlencoded',
									'Content-Type': 'application/x-www-form-urlencoded',
							},
							body:
									formData.toString()
					})
					console.log("ok");
					alert('SMS was sent to +' + prefix + '-' + phone)
			} catch (e) {
					console.log(e);
					alert(e)
			}
		}
			
	  digitValidation = event => {
		if (event.which !== 8 && event.which !== 0 && (event.which < 48 || event.which > 57)) {
		  event.preventDefault()  
		  this.setState({
			message:'Digits only',
			color:'red'
		  });
		  return false;
		  }
		  else
		  {
			this.setState({
			  message:'',
			  color:'green'
			});
			return true;
		  } 
	  }
	
	  render() {
		return (
		  <form onSubmit={this.handleSubmit}>
			<p>Please enter your phone number and prefix</p>
	
			<label className="Applabel">
			  prefix
			  
			</label>
			<label className="Applabel">
			  phone number  
			</label>
	
			<br/>
			+
			<input
				type="text"
				name="prefix"
				size = "5"
				value={this.state.prefix}
				onChange={this.handleInputChange}
				onKeyPress={this.digitValidation}
				maxLength = "3"
			  /> 
			-
			<input
				type="text"
				name="phonenumber"
				value={this.state.phonenumber}
				onChange={this.handleInputChange}
				onKeyPress={this.digitValidation}
				maxLength = "10"
			  />
			<button type="submit">Send SMS</button>
			<br/>
			<div className="message" style={{color:this.state.color}}>
	
			  {this.state.message}
	
			</div>
		  </form>
		)
		}
		
}

// function handleErrors(response) {
// 	if (!response.ok) {
// 			throw Error(response.statusText);
// 	}
// 	return response;
// }
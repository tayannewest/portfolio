import React from "react";
import "./Form.css"

export default function Form(props) {
  const [name, setName] = React.useState('')
	const [email, setEmail] = React.useState('')
	const [message, setMessage] = React.useState('')

	function encode(data) {
		return Object.keys(data)
			.map(
				(key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key])
			)
			.join('&')
	}

	function handleSubmit(e) {
		e.preventDefault()
		fetch('/', {
			method: 'POST',
			headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
			body: encode({ 'form-name': 'contact', name, email, message }),
		})
			.then(() => alert('Message sent!'))
			.catch((error) => alert(error))
	}

	return (
    <div>
    <form
      netlify="true"
      name="contact"
      onSubmit={handleSubmit}
      className="contact-form"
      >
      <input 
      type="hidden" 
      name="form-name" 
      value="contact" 
      />
      <h2 className="contact-header">
        Drop me a line!
      </h2>
      <div>
        <label htmlFor="name">
          Name
        </label>
        <br />
        <input
          type="text"
          id="name"
          name="name"
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="email">
          Email
        </label>
        <br />
        <input
          type="email"
          id="email"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label
          htmlFor="message"
        >
          Message
        </label>
        <br />
        <textarea
          id="message"
          name="message"
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>
      <button
        type="submit"
        className="inputBtn"
        onSubmit={props.close}
        >
        Send!
      </button>
    </form>
    </div>
	)
}
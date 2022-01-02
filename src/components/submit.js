import React, { useEffect, useState } from "react";
import { Link } from "@gatsbyjs/reach-router";

class Form extends React.Component {
    constructor(props) {
      super(props);
      this.state = {name: '', title: '', content: '', image: ''};
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
        this.setState({[event.target.name]: event.target.value});
    }

    handleSubmit(event) {
        const {name, title, content, image} = this.state;
        //const submission = `{"title":"${title}","username":"${name}","content":"${content}", "image":"${image}"}`

        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'text/plain'
            },
            mode: 'cors',
            body: JSON.stringify({
                "title": title,
                "username": name,
                "content": content,
                "image": image
            })
        };

        if(!(name && title && content)){
            alert("Your post was not submitted. Please complete every required field.");
        } else {
            fetch('https://blog-api.jms-lfr.workers.dev/api/posts', requestOptions)
                .then(response => response.json())
                .then(data => console.log(data));
            alert(`Your post was submitted:\nName: ${name}\nTitle: ${title}\nContent: ${content}\nImage:${image}`);
            Array.from(document.querySelectorAll("input")).forEach(input => (input.type !== "submit") && (input.value === ""));
            this.setState({"name": ''});
            this.setState({"title": ''});
            this.setState({"content": ''});
            this.setState({"image": ''});
        }
        
        /*fetch('https://blog-api.jms-lfr.workers.dev/api/posts', requestOptions)
            .then(function(response){
                if(parseInt(response.status) === 400){
                    alert("Your post was not submitted. Please complete every required field.");
                } else {
                    alert(`Your post was submitted:\nName: ${name}\nTitle: ${title}\nContent: ${content}\nImage:${image}`);

                    Array.from(document.querySelectorAll("input")).forEach(input => (input.type !== "submit") && (input.value === ""));
                    this.setState({"name": ''});
                    this.setState({"title": ''});
                    this.setState({"content": ''});
                    this.setState({"image": ''});
                }
            }
            )*/
        
        event.preventDefault();
    }
  
    render() {
      return (
        <>
        <div class="backbutton">
        <Link to="/">Go home</Link>
        </div>
        <br></br>
        <div class="submission">
        <form onSubmit={this.handleSubmit}>
            <label>
                Username (required):&ensp;
                <input type="text" name="name" value={this.state.name} onChange={this.handleChange} />
            </label>
            &emsp;&emsp;&emsp;
            <label>
                Title (required):&ensp;
                <input type="text" name="title" value={this.state.title} onChange={this.handleChange} />
            </label>
            <br></br>
            <label>
                Content (required):&ensp;
                <input type="text" name="content" value={this.state.content} onChange={this.handleChange} />
            </label>
            &emsp;&emsp;&emsp;
            <label>
                Image URL (optional):&ensp;
                <input type="text" name="image" value={this.state.image} onChange={this.handleChange} />
            </label>
            <div class="space"></div>
            <input type="submit" value="Submit" />
        </form>
        </div>
        </>
      );
    }
  }

export default Form;
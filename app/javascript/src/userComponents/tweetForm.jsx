import React from "react";
import { handleErrors, safeCredentialsFormData } from "@utils/fetchHelper";

class TweetForm extends React.Component {
    constructor(props) {
        super(props); 

        this.state = { 
            message: '',
            selectedFile: null,
            error: '',
        }
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    onFileSelect = e => {
        this.setState({
            [e.target.name]: e.target.files[0],
        })
    }

    submitTweet = e => {
        e.preventDefault();

        let formData = new FormData();
        formData.append('tweet[image]', this.state.message);
        if(this.state.selectedFile !== null) {
            formData.append('tweet[image]', this.state.selectedFile, this.state.selectedFile.name);
        }

        fetch('/api/tweets', safeCredentialsFormData({
            method: 'POST',
            body: formData,
        }))
        .then(handleErrors)
        .then(data => {
            const tweetForm = document.querySelector('textarea#tweet');
            tweetForm.value = ""
            const tweetFormFile = document.querySelector('input#file-select');
            tweetFormFile.value = ""
            this.props.getAllTweets();
            this.setState({
                message: "",
                selectedFile: null,
            })
        })
        .catch(error => {
            this.setState({
                error: 'Your tweet is not posted. Try again.',
            })
        })
    };

    render() {
        const {message, error} = this.state;
        
        return(
            <form onSubmit={this.submitTweet}>
                <div className="mb-2">
                    <textarea className="form-control" id="tweet" rows="3" placeholder="What's happening?" name="message" value={message} onChange={this.handleChange}></textarea>
                </div>
                
                <div className="form-group row g-0">
                    <div className="col d-inline-flex">
                        <input className="form-control" type="file" id="file-select" name="selectedFile" onChange={this.onFileSelect}/>
                    </div>

                    <div className="col d-flex justify-content-end">
                        <button type="submit" className="btn btn-tweet"><b>Tweet</b></button>
                    </div>    
                </div>
                {error && <p className="text-danger mt-2">{error}</p>}
            </form>
        )
    }
}

export default TweetForm;
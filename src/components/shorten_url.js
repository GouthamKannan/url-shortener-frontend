import { React, Component } from "react";
import Cookies from 'js-cookie';
import configs from "../config";
import Navbar from './navbar';

class ShortenUrl extends Component {
    constructor(props) {
        super(props)
        this.state = {
            original_url : ""
        }
    }

    componentDidMount() {
        if(!Cookies.get("user_name")) {
            window.location = "/"
        }
    }

    // Handle changes in input fields and store them in state
    handleChange = ({ target: { name, value } }) => {
        this.setState({ ...this.state, [name]: value });
    };

    shorten_url = async(e) => {
        e.preventDefault()
        const response = await fetch(configs.api_url + "/shorten_url", {
            method: "POST",
            credentials: "include",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                user_name: Cookies.get("user_name"),
                original_url : this.state.original_url
            })
        })
        const data = await response.json()
        console.log(data)
        if(data.success===true){
            alert("Url created succesfully")
            window.location = "/url_count"
        }
        else {
            alert(data.data)
            this.setState({original_url : ""})
        }
    }

    render() {
        return (
            <>
                <Navbar />
                <div style={{"margin-top":"10%"}}>
                    <div className="auth-inner">
                        <form onSubmit={this.shorten_url}>
                            <h3>Shorten URL</h3>
                            <div className="form-group my-1">
                                <label className="my-2">Original URL</label>
                                <input type="text" name="original_url" className="form-control" placeholder="Enter email ID"
                                value={this.state.original_url} onChange={evt => this.handleChange(evt)}/>
                            </div>

                            <button type="submit" className="btn btn-primary btn-block w-100 my-3">Shorten</button>

                        </form>
                    </div>
                </div>
            </>
        )
    }
}

export default ShortenUrl;
import { React, Component } from "react";
import Cookies from 'js-cookie';
import configs from "../config";
import Navbar from "./navbar";

class UrlCount extends Component {
    constructor(props) {
        super(props)
        this.state = {
            url_data : []
        }
    }

    componentDidMount = async() => {
		if(!Cookies.get("user_name")) {
            window.location = "/"
        }

        const response = await fetch(configs.api_url + "/url_data", {
            method: "POST",
            credentials: "include",
            headers: { "Content-Type": "application/json" },
            body : JSON.stringify({
                user_name : Cookies.get("user_name")
            })
        })

        const data = await response.json()
        this.setState({url_data : data.data})
	}

    get_url_data() {
        var rows = [];
        var url_data = this.state.url_data;
        url_data.forEach(cur_data => {
            rows.push(
                <tr>
                    <td><a href={cur_data.original_url} target="_blank">{cur_data.original_url}</a></td>
                    <td><a href={configs.api_url + "/" + cur_data.short_url} target="_blank">{configs.api_url + "/" + cur_data.short_url}</a></td>
                    <td>{cur_data.count}</td>
                </tr>
            )
        })

        return rows;
    }

    render() {
        return (
            <>
                <Navbar />
                <div className="container">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Original URL</th>
                            <th>Shortened URL</th>
                            <th>Count</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.get_url_data()}
                    </tbody>
                </table>
                </div>
            </>
        )
    }
}

export default UrlCount;
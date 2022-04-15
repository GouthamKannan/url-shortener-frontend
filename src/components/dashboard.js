import { React, Component } from "react";
import Cookies from 'js-cookie';
import configs from "../config";
import Navbar from "./navbar";
import DailyChart from "./daily_count";
import ClickChart from "./click_count";

class Dashboard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            daily_count : {},
            click_count : {}
        }
    }

    componentDidMount = async() => {
        if(!Cookies.get("user_name")) {
            window.location = "/"
        }

        const response = await fetch(configs.api_url + "/url_data_with_time", {
            method: "POST",
            credentials: "include",
            headers: { "Content-Type": "application/json" },
            body : JSON.stringify({
                user_name : Cookies.get("user_name")
            })
        })

        const data = await response.json()
        this.setState({
            daily_count : data.data.daily_count,
            click_count : data.data.click_count
        })
    }


    render() {
        console.log(this.state.daily_count, this.state.click_count)
        return(
            <>
            <Navbar />
            <div  className="chart-area">
            <div className="text-center">
                <h2>DAILY URL CREATION COUNT</h2>
                <DailyChart daily_count = {this.state.daily_count}/>
            </div>
            <div className="text-center" >
                <h2>URL CLICKED COUNT</h2>
                <ClickChart click_count = {this.state.click_count}/>
            </div>
            </div>
            </>
        )
    }


}

export default Dashboard;
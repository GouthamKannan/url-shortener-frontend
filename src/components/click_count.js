import React, {Component} from 'react';
import {Pie} from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js'
Chart.register(...registerables)

class ClickChart extends Component {

    constructor(props) {
        super(props)
    }

    getRandomColor() {
        var letters = '0123456789ABCDEF'.split('');
        var color = '#';
        for (var i = 0; i < 6 ; i++ ) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    get_chart_data() {

        var chart_data = {
            labels : [],
            datasets : [{
                label: 'URL',
                backgroundColor : [],
                data: []
            }]
        }

        for(var url in this.props.click_count) {
            chart_data.labels.push(url);
            chart_data.datasets[0].data.push(this.props.click_count[url])
            chart_data.datasets[0].backgroundColor.push(this.getRandomColor())
        }
        console.log(chart_data.datasets.backgroundColor)

        return chart_data
    }


    render() {
        return (
            <div className='pie-chart'>
                <Pie
                    data={this.get_chart_data()}
                />
            </div>
        );
    }
}

export default ClickChart;
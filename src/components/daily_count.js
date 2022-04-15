import React, {Component} from 'react';
import {Bar} from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js'
Chart.register(...registerables)

class DailyChart extends Component {

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
                label: [],
                backgroundColor: [],
                borderWidth: 2,
                data: []
            }]
        }
        for(var date in this.props.daily_count) {
            chart_data.labels.push(date);
            chart_data.datasets[0].label.push(date)
            chart_data.datasets[0].data.push(this.props.daily_count[date]);
            chart_data.datasets[0].backgroundColor.push(this.getRandomColor());
        }

        return chart_data
    }

    render() {
        return (
            <div className='bar-chart'>
                <Bar
                    data={this.get_chart_data()}
                />
            </div>
        );
    }
}

export default DailyChart;
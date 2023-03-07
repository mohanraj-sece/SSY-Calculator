import React from 'react'
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { useState, useEffect } from "react";

function DoughnutChart({point}) {

  const [option, setOptions] = useState({
    chart: {
      type: 'pie',
      backgroundColor: 'transparent',
      height: '208px',
    },
    title: {
      text: '',
    },
    legend: {
      enabled: false,
    },
    plotOptions: {
      pie: {
        innerSize: '50%',
        dataLabels: {
          enabled: false,
        }
      }
    },
    tooltip: {
      backgroundColor: '#FFFFFF',
      borderColor: '#FFFFFF',
      borderRadius: 20,
      style: {
        color: '#000000',
      },
      formatter() {
        return `${this.key} <strong>\u20B9 ${this.y.toLocaleString("en-In")}</strong>`
      },
      labels: {
        enabled: false,
      }
    },
    series: [{
      data: null,
    }],
    credits: {
      enabled: false,
    }
  });

  useEffect(() => {
    setOptions(previousOptions => {
      return ({
        ...previousOptions,
        series: [{
          data: [
            {
              name: 'Amount Investment',
              y: point[0],
              color: '#2ecc71',
              showInLegend: false,
            },
            {
              name: 'Total Interest',
              y: point[1],
              color: '#0161FF',
              showInLegend: false,
            }
          ]
        }],
      })
    })
    
  }, [point]);

  return (

    <HighchartsReact highcharts={Highcharts} options={option} />

  )
}

export default DoughnutChart;
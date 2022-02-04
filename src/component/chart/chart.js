import React from 'react';
import ChartBar from '../chartBar/chartBar';
import './chart.css'

function chart({chartsData}) {
  const valuesArray = chartsData.map(chartData => chartData.value);
  const maxValue = Math.max(...valuesArray)

  return <div className='chart'>
  {
      chartsData.map(chartData =>
        <ChartBar  
        key={chartData.label}
        value={chartData.value}
        maxValue={maxValue}
        label={chartData.label}/>
        )
  }
  
  </div>;
}

export default chart;

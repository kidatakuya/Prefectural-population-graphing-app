// import React, { useState } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import axios from 'axios';
import './index.scss';
function HomeMain() {
  const testList = ['奈良県', '大阪府', '京都府', '兵庫県'];
  const options = {
    title: {
      text: '総人口推移',
    },
    xAxis: {
      categories: [
        '1月',
        '2月',
        '3月',
        '4月',
        '5月',
        '6月',
        '7月',
        '8月',
        '9月',
        '10月',
        '11月',
        '12月',
      ],
    },
    yAxis: {
      title: {
        text: '人口数',
      },
      plotLines: [
        {
          value: 0,
          width: 1,
          color: '#808080',
        },
      ],
    },
    series: [
      {
        name: '大阪',
        data: [1, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2],
      },
      {
        name: 'なら',
        data: [3, 2, 1],
      },
    ],
    responsive: {
      rules: [
        {
          condition: {
            maxWidth: 600,
          },
          chartOptions: {
            legend: {
              layout: 'horizontal',
              align: 'center',
              verticalAlign: 'bottom',
            },
          },
        },
      ],
    },
  };
  return (
    <main>
      <ul>
        {testList
          ? testList.map((List, index) => (
              <li key={index}>
                <label htmlFor="">{List}</label>
              </li>
            ))
          : ''}
      </ul>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </main>
  );
}

export default HomeMain;

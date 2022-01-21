import React, { useState, useEffect } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import axios from 'axios';
import './index.scss';

function HomeMain() {
  const testList = ['奈良県', '大阪府', '京都府', '兵庫県'];
  const [prefecturesList, setPrefecturesList] = useState(testList);

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

  useEffect(() => {
    axios
      .get('https://opendata.resas-portal.go.jp/api/v1/prefectures', {
        headers: {
          'Content-Type': 'application/json',
          'X-API-KEY': 'y1IYMTGMlLkDuvbhte0NUHJ8L5UQ0D1Rj7U3GXG3',
        },
      })
      .then(function (response) {
        console.log(response.data.result);

        setPrefecturesList(response.data.result);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  return (
    <main className="homeMain">
      <ul>
        {prefecturesList
          ? prefecturesList.map((item, index) => (
              <li key={index}>
                <input type="checkbox" value={item.prefCode} />
                <label htmlFor="">{item.prefName}</label>
              </li>
            ))
          : ''}
      </ul>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </main>
  );
}

export default HomeMain;

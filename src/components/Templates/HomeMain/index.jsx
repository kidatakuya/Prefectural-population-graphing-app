import React, { useState, useEffect } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
// import axios from 'axios';
import {
  prefecturalDataFunction,
  populationDataFunction,
} from '../../Functions/DataAcquisition.jsx';
import './index.scss';

function HomeMain() {
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
        name: '奈良県',
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

  const apiKey = 'y1IYMTGMlLkDuvbhte0NUHJ8L5UQ0D1Rj7U3GXG3';
  const prefecturalApi =
    'https://opendata.resas-portal.go.jp/api/v1/prefectures';
  const populationApi =
    'https://opendata.resas-portal.go.jp/api/v1/population/composition/perYear?';
  const [prefecturesList, setPrefecturesList] = useState([]);
  const [populationData, setPopulationData] = useState(options);
  const [flag, setFlag] = useState(false);
  const test02 = (e) => {
    console.log(e);
  };

  useEffect(() => {
    prefecturalDataFunction(apiKey, prefecturalApi, setPrefecturesList);
    populationDataFunction(apiKey, populationApi);
  }, []);

  useEffect(() => {
    console.log(flag);
  }, flag);
  return (
    <main className="homeMain">
      <ul>
        {prefecturesList
          ? prefecturesList.map((item, index) => (
              <li key={index}>
                <input
                  type="checkbox"
                  value={item.prefCode}
                  checked={() => test02(item.prefName)}
                />
                <label htmlFor="">{item.prefName}</label>
              </li>
            ))
          : ''}
      </ul>
      <HighchartsReact highcharts={Highcharts} options={populationData} />
    </main>
  );
}

export default HomeMain;

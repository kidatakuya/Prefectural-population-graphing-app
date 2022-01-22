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
  const apiKey = 'y1IYMTGMlLkDuvbhte0NUHJ8L5UQ0D1Rj7U3GXG3';
  const prefecturalApi =
    'https://opendata.resas-portal.go.jp/api/v1/prefectures';
  const populationApi =
    'https://opendata.resas-portal.go.jp/api/v1/population/composition/perYear?';
  const [prefecturesList, setPrefecturesList] = useState([]);
  const [populationData, setPopulationData] = useState([]);

  const options = {
    title: {
      text: '総人口推移',
    },
    xAxis: {
      title: {
        text: '年度',
      },
      categories: [
        '1980',
        '1985',
        '1990',
        '1995',
        '2000',
        '2005',
        '2010',
        '2015',
        '2020',
        '2025',
        '2030',
        '2035',
        '2040',
        '2045',
        '2050',
        '2055',
        '2060',
        '2065',
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
    series: populationData,
    // series: [
    //   {
    //     name: '大阪',
    //     data: [1, 2, 3, 4, 5, 7, 8],
    //   },
    // ],
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

  const test02 = (index, dataList, code, name) => {
    const data = dataList;

    data[index].flag = !data[index].flag;
    setPrefecturesList(data);
    if (data[index].flag) {
      populationDataFunction(
        apiKey,
        populationApi,
        code,
        name,
        populationData,
        setPopulationData,
        { name: name, data: [] },
      );
    }
    console.log(data[index].flag);
  };

  useEffect(() => {
    prefecturalDataFunction(apiKey, prefecturalApi, setPrefecturesList);
    // populationDataFunction(
    //   apiKey,
    //   populationApi,
    //   1,
    //   '北海道',
    //   populationData,
    //   setPopulationData,
    //   { name: '北海道', data: [] },
    // );
  }, []);

  return (
    <main className="homeMain">
      <ul>
        {prefecturesList
          ? prefecturesList.map((item, index) => (
              <li key={index}>
                <input
                  type="checkbox"
                  value={item.prefCode}
                  onChange={() =>
                    test02(index, prefecturesList, item.prefCode, item.prefName)
                  }
                />
                <label htmlFor="">{item.prefName}</label>
              </li>
            ))
          : ''}
      </ul>
      <div>
        <HighchartsReact highcharts={Highcharts} options={options} />
      </div>
    </main>
  );
}

export default HomeMain;

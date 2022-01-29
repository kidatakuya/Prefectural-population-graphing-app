import React, { useState, useEffect } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import {
  prefecturalDataFunction,
  populationDataFunction,
} from '../../Functions/DataAcquisition.jsx';
import './index.scss';

function HomeMain() {
  const apiKey = 'y1IYMTGMlLkDuvbhte0NUHJ8L5UQ0D1Rj7U3GXG3';
  const [prefecturesList, setPrefecturesList] = useState([]);
  const [populationData, setPopulationData] = useState([]);
  const [yearData, setYearData] = useState([]);
  const [hitsFlag, setHitsFlag] = useState(true);

  // グラフに渡す値
  const options = {
    title: {
      text: '総人口推移',
    },
    xAxis: {
      title: {
        text: '年度',
      },
      categories: yearData,
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

  // クリック時イベント
  const checkFunction = (index, dataList, code, name, elements) => {
    // 連打防止flag
    if (hitsFlag) {
      setHitsFlag(false);
      const data = dataList;
      data[index].flag = !data[index].flag;
      setPrefecturesList(data);
      // クリック時処理
      if (data[index].flag) {
        // 人口データ取得関数
        populationDataFunction(
          apiKey,
          code,
          populationData,
          setPopulationData,
          {
            name: name,
            data: [],
          },
          setYearData,
          setHitsFlag,
        );
      } else {
        const checkedData = populationData.slice();
        const newData = [];
        checkedData.forEach((elements, key) => {
          if (!(name === checkedData[key].name)) {
            newData.push(checkedData[key]);
          }
          setPopulationData(newData);
        });
        setHitsFlag(true);
      }
    }
  };

  useEffect(() => {
    // 都道府県表示
    prefecturalDataFunction(apiKey, setPrefecturesList);
  }, []);

  return (
    <main className="homeMain">
      <h2>都道府県</h2>
      <ul>
        {prefecturesList
          ? prefecturesList.map((item, index) => (
              <li
                className={item.flag ? 'checkedItem' : ''}
                key={index}
                onClick={(e) =>
                  checkFunction(
                    index,
                    prefecturesList,
                    item.prefCode,
                    item.prefName,
                    e,
                  )
                }
              >
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

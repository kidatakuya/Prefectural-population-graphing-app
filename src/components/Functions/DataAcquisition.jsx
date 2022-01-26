import axios from 'axios';

// 都道府県データ取得。引数(apiKey,都道府県表示用関数)
export const prefecturalDataFunction = (apiKey, setData) => {
  const apiUrl = 'https://opendata.resas-portal.go.jp/api/v1/prefectures';
  axios
    .get(apiUrl, {
      headers: {
        'Content-Type': 'application/json',
        'X-API-KEY': apiKey,
      },
    })
    .then(function (response) {
      const data = response.data.result;
      data.forEach((elements, key) => {
        data[key].flag = false;
      });

      setData(data);
    })
    .catch(function (error) {
      console.log(error);
    });
};

// 人口データ取得。引数（apiKey, 都道府県コード,現在表示データ,表示人口更新関数,更新用雛形,表示年度更新関数,連打防止Flag関数）
export const populationDataFunction = (
  apiKey,
  prefCode,
  datas,
  setValueData,
  valueCurrentData,
  setYear,
  setHitsFlag,
) => {
  const apiUrl = `https://opendata.resas-portal.go.jp/api/v1/population/composition/perYear?prefCode=${prefCode}`;
  axios
    .get(apiUrl, {
      headers: {
        'Content-Type': 'application/json',
        'X-API-KEY': apiKey,
      },
    })
    .then(function (response) {
      const value = valueCurrentData;
      const year = [];
      const responseData = response.data.result.data[0].data;
      responseData.forEach((element) => {
        if (
          element.year >= 1980 &&
          element.year <= 2020 &&
          element.year % 2 === 0 &&
          window.innerWidth < 600
        ) {
          year.push(element.year);
          value.data.push(element.value);
        } else if (window.innerWidth >= 600) {
          year.push(element.year);
          value.data.push(element.value);
        }
      });
      const valueAll = datas.slice();
      valueAll.push(value);
      setValueData(valueAll);
      setYear(year);
      setHitsFlag(true);
    })
    .catch(function (error) {
      console.log(error);
    });
};

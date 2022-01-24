import axios from 'axios';

// 都道府県データ取得
export const prefecturalDataFunction = (apiKey, apiUrl, setData) => {
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

// 人口データ取得
export const populationDataFunction = (
  apiKey,
  prefCode,
  datas,
  setValueData,
  valueCurrentData,
  setYear,
) => {
  const api = `https://opendata.resas-portal.go.jp/api/v1/population/composition/perYear?prefCode=${prefCode}`;
  axios
    .get(api, {
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
          window.innerWidth <= 600
        ) {
          year.push(element.year);
          value.data.push(element.value);
        } else if (window.innerWidth > 600) {
          year.push(element.year);
          value.data.push(element.value);
        }
      });
      const valueAll = datas.slice();
      valueAll.push(value);
      setValueData(valueAll);
      console.log(year);
      setYear(year);
    })
    .catch(function (error) {
      console.log(error);
    });
};

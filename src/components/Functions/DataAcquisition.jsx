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
  apiUrl,
  prefCode,
  prefName,
  datas,
  setData,
  a,
) => {
  // const api = `${apiUrl}prefCode=${prefCode}`;
  const api =
    'https://opendata.resas-portal.go.jp/api/v1/population/composition/perYear?prefCode=11';
  axios
    .get(api, {
      headers: {
        'Content-Type': 'application/json',
        'X-API-KEY': apiKey,
      },
    })
    .then(function (response) {
      console.log(a);
      const value = a;
      const year = [];
      const test01 = response.data.result.data[0].data;
      test01.forEach((element) => {
        // console.log(element);
        year.push(element.year);
        value.data.push(element.value);
      });
      const valueAll = datas;

      valueAll.push(value);
      console.log(valueAll);

      setData(valueAll);
    })
    .catch(function (error) {
      console.log(error);
    });
};

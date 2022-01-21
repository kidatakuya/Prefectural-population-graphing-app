import axios from 'axios';

// 都道府県データ取得
export const prefecturalDataFunction = (apiKey, apiUrl, setPrefecturesList) => {
  axios
    .get(apiUrl, {
      headers: {
        'Content-Type': 'application/json',
        'X-API-KEY': apiKey,
      },
    })
    .then(function (response) {
      setPrefecturesList(response.data.result);
    })
    .catch(function (error) {
      console.log(error);
    });
};

// 人口データ取得
export const populationDataFunction = (apiKey, apiUrl) => {
  axios
    .get(
      'https://opendata.resas-portal.go.jp/api/v1/population/composition/perYear?prefCode=11',
      {
        headers: {
          'Content-Type': 'application/json',
          'X-API-KEY': apiKey,
        },
      },
    )
    .then(function (response) {
      const year = [];
      const value = [];
      const test01 = response.data.result.data[0].data;
      test01.forEach((element) => {
        console.log(element);
        year.push(element.year);
        value.push(element.year);
      });
      console.log(year);
      console.log(value);
    })
    .catch(function (error) {
      console.log(error);
    });
};

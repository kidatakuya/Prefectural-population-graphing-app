import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import './index.scss';
function LineGraph() {
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
        text: '人口',
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
    <div>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
}

export default LineGraph;

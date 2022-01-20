import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import './index.scss';
function LineGraph() {
    return (
        <div>
            <h2>グラフ</h2>
            <HighchartsReact highcharts={Highcharts} />
        </div>
    );
}

export default LineGraph;

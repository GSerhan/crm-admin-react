import Chart from "../../components/chart/Chart";
import TopStatsBox from "../../components/topStatsBox/TopStatsBox";
import WidgetLg from "../../components/widgetLg/WidgetLg";
import WidgetSm from "../../components/widgetSm/WidgetSm";
import "./home.css";

const Home = () => {

    const chartData = {
      title: "User Analytics",
      grid: true,
      dataKey: "activeUser",
      data: [
        {
          name: 'Jan',
          activeUser: 4000,
        },
        {
          name: 'Feb',
          activeUser: 3000,
        },
        {
          name: 'March',
          activeUser: 2000,
        },
        {
          name: 'April',
          activeUser: 2780,
        },
        {
          name: 'May',
          activeUser: 1890,
        },
        {
          name: 'June',
          activeUser: 2390,
        },
        {
          name: 'July',
          activeUser: 3490,
        },
        {
          name: 'Aug',
          activeUser: 4000,
        },
        {
          name: 'Sept',
          activeUser: 5000,
        },
        {
          name: 'Oct',
          activeUser: 6000,
        },
        {
          name: 'Nov',
          activeUser: 7000,
        },
        {
          name: 'Dec',
          activeUser: 8000,
        }
      ]
    }

    return (
      <div className="dashboard__container">
        <div className="dashboard__top-stats mb-4">
          <TopStatsBox/>      
          <TopStatsBox/>      
          <TopStatsBox/>      
        </div>

        <div className="dashboard__chart mb-4">
          <Chart data={chartData['data']} title={chartData.title} dataKey={chartData.dataKey} grid={chartData.grid}/>
        </div>
        <div className="dashboard__widgets">
          <div className="dashboard__widget-small">
            <WidgetSm />
          </div>
          <div className="dashboard__widget-large">
            <WidgetLg />
          </div>    
        </div>
      </div>

    )
}

export default Home;
import './topStatsBox.css';
import {ArrowDownward, ArrowUpward} from '@mui/icons-material';

const TopStatsBox = () => {

  const topStats = {       
    title: "Revenue",
    cost: 2.454,
    currency: "$",
    change: -3.24,
    footer: "Compared to last month"
  }

  return (
    <div className='top-stats'>
      <p className='top-stats--title'>{topStats.title}</p>
      <div className='top-stats__container d-flex align-items-center mb-4'>
        <div className='top-stats__money'>
          <span>{topStats.currency}</span>
          <span>{topStats.cost}</span>
        </div>
        <span className='top-stats__change'>{topStats.change}</span>
        <div className={topStats.change > 0 ? 'green' : topStats.change < 0 ? 'red' : ''}>
          {topStats.change > 0 ? <ArrowUpward /> : topStats.change < 0 ? <ArrowDownward /> : ''}
        </div>
      </div>
      <p className='top-stats--footer mb-0'>{topStats.footer}</p>
    </div>
  )
}

export default TopStatsBox;
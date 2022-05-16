import {NotificationsNone, Language, Settings} from '@mui/icons-material';
import './topbar.css';

const Topbar = () => {
  return (
    <div className="topbar">
      <div className="topbar__wrapper d-flex align-items-center justify-content-between">
        <div className="topbar__left">
          <span className="topbar__logo cursor-pointer">dwadmin</span>
        </div>
        <div className="topbar__right d-flex align-items-center">
          <div className="topbar__icon-container cursor-pointer position-relative">
              <NotificationsNone/>
              <span className="top__icon-badge position-absolute d-flex align-items-center justify-content-center">2</span>
          </div>
          <div className="topbar__icon-container cursor-pointer position-relative">
              <Language/>
              <span className="top__icon-badge position-absolute d-flex align-items-center justify-content-center">1</span>
          </div>
          <div className="topbar__icon-container cursor-pointer position-relative">
              <Settings/>
              <span className="top__icon-badge position-absolute d-flex align-items-center justify-content-center">1</span>
          </div>
          <div className="topbar__avatar cursor-pointer">
            <img src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="topbar__avatar" />
          </div>
        </div>
      </div>

    </div>
  )
}

export default Topbar;
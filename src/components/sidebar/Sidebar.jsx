import {  
  LineStyle,
  Timeline,
  TrendingUp,
  PermIdentity,
  Storefront,
  AttachMoney,
  BarChart,
  MailOutline,
  DynamicFeed,
  ChatBubbleOutline,
  WorkOutline,
  Report
} from '@mui/icons-material';
import { Link } from 'react-router-dom';
import './sidebar.css';

const Sidebar = () => {

  const sidebarMenu = [
    {
      name: 'Dashboard',
      key:"dashboard",
      submenu: [
        {
          name: 'Home',
          key: 'home',
          icon: () => {
            return <LineStyle/>
          }
        },
        {
          name: 'Analytics',
          key: 'analytics',
          icon: () => {
            return <Timeline/>
          }
        },
        {
          name: 'Sales',
          key: 'sales',
          icon: () => {
            return <TrendingUp/>
          }
        }
      ]
    },
    {
      name: 'Quick Menu',
      key:"quickMenu",
      submenu: [
        {
          name: 'Users',
          key: 'users',
          icon: () => {
            return <PermIdentity/>
          }
        },
        {
          name: 'Products',
          key: 'products',
          icon: () => {
            return <Storefront/>
          }
        },
        {
          name: 'Transactions',
          key: 'transactions',
          icon: () => {
            return <AttachMoney/>
          }
        },
        {
          name: 'Reports',
          key: 'reports',
          icon: () => {
            return <BarChart/>
          }
        }
      ]
    },
    {
      name: 'Notifications',
      key:"notifications",
      submenu: [
        {
          name: 'Mail',
          key: 'mail',
          icon: () => {
            return <MailOutline/>
          }
        },
        {
          name: 'Feedback',
          key: 'feedback',
          icon: () => {
            return <DynamicFeed/>
          }
        },
        {
          name: 'Messages',
          key: 'messages',
          icon: () => {
            return <ChatBubbleOutline/>
          }
        }
      ]
    },
    {
      name: 'Staff',
      key:"staff",
      submenu: [
        {
          name: 'Manage',
          key: 'manage',
          icon: () => {
            return <WorkOutline/>
          }
        },
        {
          name: 'Analytics',
          key: 'analytics',
          icon: () => {
            return <Timeline/>
          }
        },
        {
          name: 'Reports',
          key: 'reports',
          icon: () => {
            return <Report/>
          }
        }
      ]
    }
  ]

  return (
    <div className="sidebar">
      <div className="sidebar__wrapper">
        {sidebarMenu.map((title) => 
          <div key={title.key} value={title.name} className="sidebar__submenu">
            <h5 className="mb-0">{title.name}</h5>
            <ul>
              {title.submenu.map((subitem) => 
                <Link key={subitem.key} to={`/${subitem.key}`}>
                  <li className="cursor-pointer">
                    <span className="sidebar__list-icon">{subitem.icon()}</span>
                    <span>{subitem.name}</span>
                  </li>
                </Link>
              )}
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}

export default Sidebar;
import { Visibility } from '@mui/icons-material';
import { useEffect } from 'react';
import { useState } from 'react';
import { render } from 'react-dom';
import './widgetSm.css';

const data = [
  {
    name: "Anna Keller",
    jobTitle: "Software Engineer",
    showJobTitle: true,
    profilePicture: "https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
  },
  {
    name: "Brant Fabian",
    jobTitle: "Art Director",
    showJobTitle: true,
    profilePicture: "https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
  },
  {
    name: "Aryana Merrill",
    jobTitle: "UI / UX Developer",
    showJobTitle: true,
    profilePicture: "https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
  },
  {
    name: "Russ Linville",
    jobTitle: "Manager",
    showJobTitle: true,
    profilePicture: "https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500  "
  },
  {
    name: "Alisha Davidson",
    jobTitle: "Data Analyst",
    showJobTitle: true,
    profilePicture: "https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
  },
  {
    name: "Alisha Davidson",
    jobTitle: "Data Analyst",
    showJobTitle: true,
    profilePicture: "https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
  },
  {
    name: "Alisha Davidson",
    jobTitle: "Data Analyst",
    showJobTitle: true,
    profilePicture: "https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
  },
]

const setup = {
  title: "New Join Members",
  hiddenJob: "****",
  buttonText: "Display"
}

const WidgetSm = () => {

  const [newMembers, setNewMembers] = useState([]);
  const [setupWidget, setNewSetup] = useState({});


  useEffect(() => {
    setNewMembers(data);
    setNewSetup(setup);
  }, [])

  const onShowJobTitle = user => {
    let localMembers = [...newMembers];
    const selectedUserIndex = newMembers.findIndex(item => item.name === user.name);
    user.showJobTitle = !user.showJobTitle;
    localMembers.splice(selectedUserIndex, 1, user);
    setNewMembers(localMembers);
    setNewSetup(setupWidget => ({
      ...setupWidget, 
      title: "yes"
    }));
  }

  const {title, hiddenJob, buttonText} = setupWidget;
  
  return (
    <div className='widgetSm'>
        <h3 className='mb-4'>{title}</h3>
        <ul className='m-0 p-0'>
          {newMembers.map((element, index) => 
            <li key={index} className='d-flex align-items-center justify-content-between'>
              <div className='d-flex align-items-center'>
                <img src={element.profilePicture} />
                <div className='d-flex flex-column'>
                  <span>{element.name}</span>
                  {element.showJobTitle ? <span>{element.jobTitle}</span> : <span>{hiddenJob}</span>}
                </div>
              </div>
              <button className='d-flex align-items-center' onClick={() => onShowJobTitle(element)}>
                <Visibility className='widgetSm__icon'/>
                {buttonText}
              </button>
            </li>
          )}
        </ul>
    </div>
  )

}

export default WidgetSm;
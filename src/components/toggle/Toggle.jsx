import React,{useContext} from 'react';
import { ThemeContext } from '../../context';
import './toggle.css';

export const Toggle = () => {
    const theme = useContext(ThemeContext);

    function chageTheme(){
        theme.dispatch({type:"TOGGLE"})
    }
  return (
    <div className="t">
        <img className="t-icon" src="https://cdn-icons-png.flaticon.com/512/169/169367.png" alt="" />
        <img className="t-icon" src="https://www.pngitem.com/pimgs/m/477-4777257_crescent-moon-icon-sakuya-izayoi-touhou-cute-hd.png" alt="" />
        <div className='t-btn' onClick={chageTheme} style={{left:theme.state.darkMode ? 0:25}} ></div>
    </div>
  )
}

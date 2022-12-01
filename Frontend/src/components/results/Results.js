import React, { useContext } from 'react';
import styles from './Results.module.css';
import ThemeContext from '../../contexts/ThemeContext';


function Results({ result, image }) {
  const { theme, toggleTheme } = useContext(ThemeContext);
  console.log(theme);
  const fontColor = theme === 'dark' ? 'white' : 'black';
  console.log(fontColor)
  return (
    <div>
      {/*  <h1><font color={fontColor}>Output</font></h1> */}
      <div className={`${styles.container} row`}>
        <div className="col-sm">
          <img src={URL.createObjectURL(image)} alt="result" />
        </div>
        <div className="col-sm">
          <h1><font color={fontColor}>Result:{result}</font></h1>
        </div>
      </div>
    </div>
  );
}

export default Results;

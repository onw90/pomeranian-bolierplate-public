import { useEffect, useState } from 'react';
import './styles.css';
import { MainHeader } from '../../../Components/MainHeader';
//----------------------------------------------------------------
export const TimerStopwatch = () => {
  //-------TIMER--------------------------------------------------------
  const Timer = () => {
    // do przechowywania czasu
    const [time, setTime] = useState(0);
    // do oznaczania true/false czy czas biegnie
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
      let id;
      if (isRunning === true) {
        // podział czasu na co 10 ms przy uzyciu setInterval
        id = setInterval(() => setTime(time + 1), 10);
      }
      return () => clearInterval(id);
    }, [isRunning, time]);

    const hours = Math.floor(time / 360000);
    const minutes = Math.floor((time % 360000) / 6000);
    const seconds = Math.floor((time % 6000) / 100);
    const miliseconds = time % 100;

    const handleOnClickStartStop = () => {
      setIsRunning(!isRunning);
    };

    const handleOnClickRestart = () => {
      setTime(0);
    };

    return (
      <div className="timer">
        <MainHeader>Timer</MainHeader>
        <p className="time">
          {hours}:{minutes.toString().padStart(2, '0')}:
          {seconds.toString().padStart(2, '0')}:
          {miliseconds.toString().padStart(2, '0')}
        </p>
        <div className="timer-buttons">
          <button className="timer-button" onClick={handleOnClickStartStop}>
            {isRunning ? 'Stop' : 'Start'}
          </button>
          <button className="timer-button" onClick={handleOnClickRestart}>
            Restart
          </button>
        </div>
      </div>
    );
  };
  //
  return (
    <div>
      <Timer />
    </div>
  );
};

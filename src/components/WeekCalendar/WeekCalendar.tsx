import * as React from 'react';

import { WeekCalendarProps } from '../../declerations/WeekCalendar.d';
import './WeekCalendar.css';

const drawBoard = (context: any, totalWeeks: number, weeksLived: number) => {

  const rows = totalWeeks/52;
  let weekCounter = 0;
  let currentY = 0;

  //rows
  for (let y = 0; y < rows; y++) {    
    let currentX = 0;
    
    //columns
    for (let x = 0; x < 52; x++) {
      RenderRect(context, currentX, currentY, (weekCounter <= weeksLived) ? "#708090" : "#e0e0e0");
      weekCounter++;
      currentX = x === 0 ? 0 : currentX+10;
    }
    currentY += 10;
  }

};

const RenderRect = (context: any, xPosition: number, yPosition: number, color: String) => {
  context.fillStyle = color;
  context.beginPath();
  context.rect(xPosition, yPosition, 7, 7);
  context.fill();
  context.closePath();
}

const WeekCalendar: React.FunctionComponent<WeekCalendarProps> = (props) => {
  const canvasRef: any = React.createRef();

  React.useEffect(() => {
    if (canvasRef.current) {
      const context: any = canvasRef.current.getContext("2d");
      const canvas: any = canvasRef.current;
      canvas.width = 500;
      canvas.height = ((props.totalWeeks/52) * 10) + 20;
      drawBoard(context, props.totalWeeks, props.weeksLived);
    }
  }, [canvasRef]);

  console.log(props)

  return (
    <React.Fragment>
      <canvas ref={canvasRef} width="1100" height="1300" />
    </React.Fragment>
  );
}

export default WeekCalendar;

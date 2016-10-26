import _ from 'lodash';
import React from 'react';
import { Sparklines, SparklinesBars, SparklinesReferenceLine } from 'react-sparklines';

function average(data) {
  return  _.round(_.sum(data)/data.length);
}
export default (props) => {
  return (
    <div className="cityData">
      <Sparklines svgHeight={60} svgWidth={240} data={props.data} >
        <SparklinesBars color={props.color} style={{ stroke: "white", fill: "#41c3f9", fillOpacity: ".25" }} />
          <SparklinesReferenceLine type={props.type} />
      </Sparklines>
      <div className="averageTemp">Average Temp:  {average(props.data)} {props.units}</div>
    </div>
  );
}

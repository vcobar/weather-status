import _ from 'lodash';
import React from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';

function average(data) {
  return  _.round(_.sum(data)/data.length);
}
export default (props) => {
  return (
    <div>
      <Sparklines height={110} width={100} data={props.data}>
        <SparklinesLine color={props.color} />
          <SparklinesReferenceLine type={props.type} />
      </Sparklines>
      <div>{average(props.data)} {props.units}</div>
    </div>
  );
}

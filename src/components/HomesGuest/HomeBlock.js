import React from 'react';
import './HomeBlock.css';
import { Slider } from '../Slider';
import { data } from '../../constants';

export const HomeBlock = () => {
  return (
    <div className="homes_guests_loves">
      <Slider data={data} />
    </div>
  );
};

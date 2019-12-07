import * as React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

import { ResponsivePie } from '@nivo/pie';
import axios from 'axios';

type EventType = {
  id: string;
  value: number;
};

interface PieProps {
  eventTypes: Array<EventType>;
}

const MyResponsivePie = ({eventTypes}: PieProps) => (
  <ResponsivePie
    data={eventTypes}
    margin={{top: 40, right: 80, bottom: 80, left: 80}}
    innerRadius={0.5}
    padAngle={0.7}
    cornerRadius={3}
    colors={{scheme: 'set3'}}
    borderWidth={1}
    borderColor="black"
    radialLabelsSkipAngle={10}
    radialLabelsTextXOffset={6}
    radialLabelsTextColor="#333333"
    radialLabelsLinkOffset={0}
    radialLabelsLinkDiagonalLength={16}
    radialLabelsLinkHorizontalLength={24}
    radialLabelsLinkStrokeWidth={1}
    radialLabelsLinkColor={{from: 'color', modifiers: []}}
    slicesLabelsSkipAngle={10}
    slicesLabelsTextColor="#333333"
    animate={true}
    motionStiffness={90}
    motionDamping={15}
    isInteractive={false}
    legends={[
      {
        anchor: 'bottom',
        direction: 'row',
        translateY: 56,
        itemWidth: 110,
        itemHeight: 18,
        itemTextColor: '#000',
        symbolSize: 18,
        symbolShape: 'circle',
      }
    ]}
  />
);

function GraphsView() {
  const [eventTypes, setEventTypes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(
    () => {
      const fetchEventTypes = async () => {
        setIsLoading(true);
        const result = await axios('/event-types');
        setEventTypes(result.data);
        setIsLoading(false);
      };
      fetchEventTypes();
    },
    []);
  return (
    isLoading ? (
      <div>Loading...</div>
    ) : (
      <div style={{width: '100%', height: '60vh'}}>
        <MyResponsivePie eventTypes={eventTypes} />
      </div>
    )
  );

}

export default GraphsView;

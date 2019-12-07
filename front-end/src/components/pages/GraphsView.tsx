import * as React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

import { ResponsivePie } from '@nivo/pie';
import axios from 'axios';
import { sentenceCase } from 'change-case';

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
    margin={{top: 40, right: 80, bottom: 40, left: 80}}
    innerRadius={0.5}
    padAngle={0.7}
    cornerRadius={3}
    colors={{scheme: 'category10'}}
    borderWidth={1}
    borderColor="black"
    radialLabelsSkipAngle={10}
    radialLabelsTextXOffset={6}
    radialLabelsTextColor="#333333"
    radialLabelsLinkOffset={0}
    radialLabelsLinkDiagonalLength={16}
    radialLabelsLinkHorizontalLength={24}
    radialLabelsLinkStrokeWidth={2}
    radialLabelsLinkColor={{from: 'color', modifiers: []}}
    slicesLabelsSkipAngle={10}
    slicesLabelsTextColor="#333333"
    animate={true}
    tooltip={(value) => <p>{value.id}: {value.value}</p>}
    motionStiffness={90}
    motionDamping={15}
    sortByValue={true}
  />
);

type RawEventType = {
  event_type: string;
  'count(*)': number;
};

function GraphsView() {
  const [eventTypes, setEventTypes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(
    () => {
      const fetchEventTypes = async () => {
        setIsLoading(true);
        const result = await axios('/event-types');
        setEventTypes(result.data.results.map((evTyp: RawEventType) => ({
          id: sentenceCase(evTyp.event_type),
          value: evTyp['count(*)']
        })));
        setIsLoading(false);
      };
      fetchEventTypes();
    },
    []);
  return (
    isLoading ? (
      <div>Loading...</div>
    ) : (
      <div style={{width: '100%', height: '75vh'}}>
        <MyResponsivePie eventTypes={eventTypes} />
      </div>
    )
  );

}

export default GraphsView;

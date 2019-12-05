import * as React from 'react';
import { ResponsivePie } from '@nivo/pie';

type PieData = {
  id: string;
  label: string;
  value: number;
  color: string;
};

interface PieProps {
  pieData: Array<PieData>;
}

const allEventTypesStub = [
  {
    match: {
      id: 'ruby'
    },
    id: 'dots'
  },
  {
    match: {
      id: 'c'
    },
    id: 'dots'
  },
  {
    match: {
      id: 'go'
    },
    id: 'dots'
  },
  {
    match: {
      id: 'python'
    },
    id: 'dots'
  },
  {
    match: {
      id: 'scala'
    },
    id: 'lines'
  },
  {
    match: {
      id: 'lisp'
    },
    id: 'lines'
  },
  {
    match: {
      id: 'elixir'
    },
    id: 'lines'
  },
  {
    match: {
      id: 'javascript'
    },
    id: 'lines'
  }
];

const MyResponsivePie = ({pieData}: PieProps) => (
  <ResponsivePie
    data={pieData}
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
    defs={[
      {
        id: 'dots',
        type: 'patternDots',
        background: 'inherit',
        color: 'rgba(255, 255, 255, 0.3)',
        size: 4,
        padding: 1,
        stagger: true
      },
      {
        id: 'lines',
        type: 'patternLines',
        background: 'inherit',
        color: 'rgba(255, 255, 255, 0.3)',
        rotation: -45,
        lineWidth: 6,
        spacing: 10
      }
    ]}
    fill={allEventTypesStub}
    legends={[
      {
        anchor: 'bottom',
        direction: 'row',
        translateY: 56,
        itemWidth: 100,
        itemHeight: 18,
        itemTextColor: '#999',
        symbolSize: 18,
        symbolShape: 'circle',
        effects: [
          {
            on: 'hover',
            style: {
              itemTextColor: '#000'
            }
          }
        ]
      }
    ]}
  />
);

const customPieData = [
  {
    'id': 'c',
    'label': 'c',
    'value': 184,
    'color': 'hsl(296, 70%, 50%)'
  },
  {
    'id': 'sass',
    'label': 'sass',
    'value': 173,
    'color': 'hsl(96, 70%, 50%)'
  },
  {
    'id': 'haskell',
    'label': 'haskell',
    'value': 513,
    'color': 'hsl(269, 70%, 50%)'
  },
  {
    'id': 'java',
    'label': 'java',
    'value': 164,
    'color': 'hsl(308, 70%, 50%)'
  },
  {
    'id': 'erlang',
    'label': 'erlang',
    'value': 30,
    'color': 'hsl(40, 70%, 50%)'
  }
];

function GraphsView() {
  return (
    <div style={{width: '100%', height: '60vh'}}>
      <MyResponsivePie pieData={customPieData} />
    </div>
  );
}

export default GraphsView;

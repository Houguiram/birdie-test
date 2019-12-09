import * as React from 'react';
import { connect } from 'react-redux';

import { ResponsivePie } from '@nivo/pie';
import { CareRecipientId, EventType } from '@App/types';
import { getCurrentRecipientId, getSummary } from '@App/store/selectors';
import { RootState } from '@App/store/reducers';
import { Dispatch } from 'redux';
import { fetchSummary } from '@App/store/actions';
import { useEffect } from 'react';

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

interface GraphsViewProps {
  eventTypes: Array<EventType>;
  currentRecipientId: CareRecipientId;
  fetchSummary: Function;
}

function GraphsView({...props}: GraphsViewProps) {
  useEffect(
    () => {
      props.fetchSummary(props.currentRecipientId);
    },
    [props.currentRecipientId]);
  return (
    !props.eventTypes ? (
      <div>Loading...</div>
    ) : (
      <div style={{width: '100%', height: '75vh'}}>
        <MyResponsivePie eventTypes={props.eventTypes} />
      </div>
    )
  );

}

const mapStateToProps = (state: RootState, ownProps: object) => ({
  eventTypes: getSummary(state),
  currentRecipientId: getCurrentRecipientId(state),
});

const mapDispatchToProps = (dispatch: Dispatch<RootState>) => ({
  fetchSummary: (recipientId: CareRecipientId) => dispatch(fetchSummary(recipientId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(GraphsView) as React.ComponentClass<{}>;

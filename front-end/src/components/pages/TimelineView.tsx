import * as React from 'react';
// @ts-ignore
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

function TimelineView() {
  return (
    <VerticalTimeline>
      <VerticalTimelineElement>
        <h3>Test</h3>
      </VerticalTimelineElement>
      <VerticalTimelineElement>
        <h3>Test</h3>
      </VerticalTimelineElement>
      <VerticalTimelineElement>
        <h3>Test</h3>
      </VerticalTimelineElement>
      <VerticalTimelineElement>
        <h3>Test</h3>
      </VerticalTimelineElement>
      <VerticalTimelineElement>
        <h3>Test</h3>
      </VerticalTimelineElement>
    </VerticalTimeline>
  );
}

export default TimelineView;

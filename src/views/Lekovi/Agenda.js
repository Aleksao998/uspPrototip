import React, { Component } from "react";
import { render } from "react-dom";
import moment from "moment";

import Timetable from "react-timetable-events";

export default class App extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      timetableProps: {
        events: {
          Ponedeljak: [],
          Utorak: [],
          Sreda: [],
          Cetvrtak: [],
          Petak: [],
          Subota: [],
          Nedelja: [],
        },
        hoursInterval: [1, 24],

        renderHour(hour, defaultAttributes, styles) {
          return (
            <div
              {...defaultAttributes}
              key={hour}
              style={{
                ...defaultAttributes.style,
                textAlign: "center",
                textDecoration: "underline",
              }}
            >
              {hour}
            </div>
          );
        },
        renderEvent(event, defaultAttributes, styles) {
          return (
            <div
              {...defaultAttributes}
              title={event.name}
              key={event.id}
              style={{
                ...defaultAttributes.style,
                background: "#000",
                borderRadius: "50px",
              }}
            >
              <span className={styles.event_info}>[ {event.name} ]</span>
              <span className={styles.event_info}>
                {event.startTime.format("HH:mm")} -{" "}
                {event.endTime.format("HH:mm")}
              </span>
            </div>
          );
        },
      },
    };
  }

  render() {
    return <Timetable {...this.state.timetableProps} />;
  }
}

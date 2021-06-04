import React, { Component } from 'react';
import Ref from 'react-dom';
import { DayPilot, DayPilotCalendar, DayPilotNavigator } from "daypilot-pro-react";
import "./style.css";
import { BsSearch, BsFillPlusCircleFill, } from "react-icons/bs";
import { sharedColors } from '../../theme/sharedColor';
import { BsChevronCompactDown, BsChevronCompactUp } from "react-icons/bs";

const styles = {
  left: {
    float: "left",
    width: "220px"
  },
  main: {
    marginLeft: "220px"
  }
};

export class Calendar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      arrowDirection: true,
      viewType: "Week",
      durationBarVisible: false,
      timeRangeSelectedHandling: "Enabled",
      onTimeRangeSelected: args => {
        let dp = this.calendar;
        DayPilot.Modal.prompt("Create a new event:", "Event 1").then(function (modal) {
          dp.clearSelection();
          if (!modal.result) { return; }
          dp.events.add(new DayPilot.Event({
            start: args.start,
            end: args.end,
            id: DayPilot.guid(),
            text: modal.result
          }));
        });
      },
      eventDeleteHandling: "Update",
      onEventClick: args => {
        let dp = this.calendar;
        DayPilot.Modal.prompt("Update event text:", args.e.text()).then(function (modal) {
          if (!modal.result) { return; }
          args.e.data.text = modal.result;
          dp.events.update(args.e);
        });
      },
    };
  }

  componentDidMount() {

    // load event data
    this.setState({
      startDate: "2019-09-15",
      events: [
        {
          id: 1,
          text: "Event 1",
          start: "2019-09-16T10:30:00",
          end: "2019-09-16T13:00:00",
          backColor: "#7CE2EC",
        },
        {
          id: 2,
          text: "Event 2",
          start: "2019-09-17T12:00:00",
          end: "2019-09-17T14:00:00",
          backColor: "#877CEC"
        }
      ]
    });
  }
  render() {
    var { ...config } = this.state;
    const specialColorFont = {
      color: sharedColors.primaryFontColor,
    }
    const toggleAvatar = () => {
      this.setState({arrowDirection: !this.state.arrowDirection});
    }
    return (
      <div className="calendar-time-events">
        <div style={styles.left} className="calendar-week-picker-section">
          <div className="show-calendar-picker" onClick={() => toggleAvatar()}>
            {this.state.arrowDirection ? <BsChevronCompactDown color="white" /> : <BsChevronCompactUp color="white" />}
          </div>
          <div className={this.state.arrowDirection === false ? "show-picker-calendar" : "non-show-picker-calendar"}>
            <div className="avatars-title-container">
              <h1 className="avatars-title-text">Schedule<span style={specialColorFont}>.</span></h1>
              <BsFillPlusCircleFill color={sharedColors.primaryButtonsColor} className="avatars-title-add-button" />
            </div>
            <div className="search-bar">
              <BsSearch size="18px" color={sharedColors.primaryFontColor} className="search-icon" />
              <input type="text" placeholder="Search" className="search-input" />
            </div>
            <DayPilotNavigator
              selectMode={"week"}
              showMonths={3}
              skipMonths={3}
              onTimeRangeSelected={args => {
                this.setState({
                  startDate: args.day
                });
              }}
            />
          </div>
        </div>
        <div style={styles.main} className="calendar-week-schedule-view">
          <DayPilotCalendar
            {...config}
            ref={component => {
              this.calendar = component && component.control;
            }}
          />
        </div>
      </div>
    );
  }
}

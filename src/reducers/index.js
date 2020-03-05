import { combineReducers } from "redux";
import _ from "lodash";

const initialElderlyState = {
  one: {
    name: "Steve Smith",
    age: 86,
    checkedIn: false,
    lastCheckedIn: null,
    tasks: [
      {
        title: "task 1",
        dueDate: "June 1, 2019"
      },
      {
        title: "task 2",
        dueDate: "June 1, 2019"
      },
      {
        title: "task 3",
        dueDate: "June 1, 2019"
      }
    ]
  },
  two: {
    name: "Steve Smith",
    age: 86,
    checkedIn: false,
    lastCheckedIn: null,
    tasks: [
      {
        title: "task 1",
        dueDate: "June 1, 2019"
      },
      {
        title: "task 2",
        dueDate: "June 1, 2019"
      },
      {
        title: "task 3",
        dueDate: "June 1, 2019"
      }
    ]
  },
  three: {
    name: "Steve Smith",
    age: 86,
    checkedIn: false,
    lastCheckedIn: null,
    tasks: [
      {
        title: "task 1",
        dueDate: "June 1, 2019"
      },
      {
        title: "task 2",
        dueDate: "June 1, 2019"
      },
      {
        title: "task 3",
        dueDate: "June 1, 2019"
      }
    ]
  }
};

const elderlyStatus = (state = initialElderlyState, action) => {
  switch (action.type) {
    case "CHECK_IN":
      const { index } = action.payload;
      _.set(state, `${index}.checkedIn`, true);
      const newState = _.set(state, `${index}.lastCheckedIn`, new Date());
      return newState;
    default:
      return state;
  }
};

export default combineReducers({
  elderly: elderlyStatus
});

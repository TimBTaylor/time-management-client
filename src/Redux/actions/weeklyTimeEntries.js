import axios from "axios";

export const weeklyTimeEntries = (userInfo) => async (dispatch) => {
  try {
    await axios({
      method: "post",
      url: "http://timemanagement-env.eba-xnbvikdz.us-east-1.elasticbeanstalk.com/time/weekly-time",
      headers: { "Content-Type": "application/json" },
      data: {
        userID: userInfo.userID,
        typeOfId: userInfo.typeOfId,
      },
    }).then((response) => {
      let weeklyHours = [];
      let weeklyMinutes = [];
      if (response.status === 200) {
        dispatch({
          type: "SET_USER_WEEKLY_TIME",
          payload: response.data,
        });
        response.data.map((entry) => {
          weeklyHours.push(entry.hours);
          weeklyMinutes.push(entry.minutes);
          return entry;
        });
        let totalWeeklyMinutes = weeklyMinutes.reduce((a, b) => a + b, 0);
        let totalWeeklyHours = weeklyHours.reduce((a, b) => a + b, 0);
        let hoursToMinutes = totalWeeklyHours * 60 + totalWeeklyMinutes;
        let hours = Math.trunc(hoursToMinutes / 60);
        let minutes = hoursToMinutes % 60;
        let totalTime = hours + ":" + minutes;
        dispatch({
          type: "SET_USER_TOTAL_TIME",
          payload: totalTime,
        });
        // display entries
        let display = [];
        let curr = new Date();
        let week = [];

        for (let i = 0; i <= 6; i++) {
          let first = curr.getDate() - curr.getDay() + i;
          let day = new Date(curr.setDate(first)).toISOString().slice(0, 10);
          week.push(day);
        }

        let marker = 0;
        week.map((date) => {
          marker += 1;
          response.data.map((entry) => {
            if (date === entry.date) {
              display.push({
                hours: entry.hours >= 10 ? entry.hours : "0" + entry.hours,
                minutes: entry.minutes === 30 ? entry.minutes : "00",
                date:
                  entry.date.substring(5) + "-" + entry.date.substring(0, 4),
              });
            }
            return entry;
          });
          if (marker !== display.length) {
            display.push({
              hours: "00",
              minutes: "00",
              date: date.substring(5) + "-" + date.substring(0, 4),
            });
          }
          return date;
        });
        dispatch({
          type: "SET_USER_DISPLAY_ENTRIES",
          payload: display,
        });
      }
    });
  } catch (error) {
    console.log(error);
  }
};

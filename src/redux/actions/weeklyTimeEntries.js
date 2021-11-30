import axios from "axios";
import { startOfWeek } from "date-fns";

export const weeklyTimeEntries = (userInfo) => async (dispatch) => {
  const weekStart = startOfWeek(new Date());
  try {
    await axios({
      method: "post",
      url: "https://timemanagement-env.eba-xnbvikdz.us-east-1.elasticbeanstalk.com/time/weekly-time",
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
        if (hours < 1) {
          hours = "00";
        } else if (hours < 10) {
          hours = "0" + hours;
        }
        minutes = minutes > 30 ? minutes : "00";
        let totalTime = hours + ":" + minutes;
        dispatch({
          type: "SET_USER_TOTAL_TIME",
          payload: totalTime,
        });
        // display entries
        let display = [];
        let week = [];
        for (let i = 0; i <= 6; i++) {
          let first = weekStart.getDate() - weekStart.getDay() + i;
          let day = new Date(weekStart.setDate(first))
            .toISOString()
            .slice(0, 10);
          week.push(day);
        }

        week.map((date) => {
          response.data.map((entry) => {
            const newEntry = {
              hours: entry.hours >= 10 ? entry.hours : "0" + entry.hours,
              minutes: entry.minutes === 30 ? entry.minutes : "00",
              date: entry.date.substring(5) + "-" + entry.date.substring(0, 4),
            };
            if (date === entry.date) {
              let equalDates = display.filter(
                (entry) => entry.date === newEntry.date
              );
              if (equalDates.length > 0) {
                let updatedHours =
                  Number(equalDates[0].hours) + Number(newEntry.hours);
                let updatedMinutes =
                  Number(equalDates[0].minutes) + Number(newEntry.minutes);
                let updatedTotalTimeInMinutes =
                  updatedHours * 60 + updatedMinutes;
                let hours = Math.trunc(updatedTotalTimeInMinutes / 60);
                let minutes = updatedTotalTimeInMinutes % 60;
                const updatedEntry = {
                  hours: hours >= 10 ? hours : "0" + hours,
                  minutes: minutes === 30 ? minutes : "00",
                  date: newEntry.date,
                };
                display.splice(display.indexOf(equalDates[0]), 1);
                display.push(updatedEntry);
              } else {
                display.push(newEntry);
              }
            }
            return entry;
          });
          let reversedDate = date.substring(5) + "-" + date.substring(0, 4);
          let equalDates = display.some((entry) => entry.date === reversedDate);
          if (equalDates <= 0) {
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

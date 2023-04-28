const express = require("express");
const app = express();
const port = 8001;

const moment = require("moment");
const momentTz = require("moment-timezone");

app.get("/", (req, res) => {
  res.json({
    data: {
      moment_utc: moment().format(""),
      moment_utc_timezone: momentTz()
        .tz("Asia/Bankkok")
        .utcOffset("+0700")
        .format(""),
      moment_common: moment().format("DD/MM/YYYY HH:MM"),
      moment_timezone: momentTz()
        .tz("Asia/Bankkok")
        .utcOffset("+0700")
        .format("DD/MM/YYYY HH:MM"),
      s1: momentTz()
        .subtract(1, "day")
        .set({ hour: 23, minute: 59, second: 0, millisecond: 0 })
        .tz("Asia/Bangkok")
        .utcOffset("+0700"),
      s2: momentTz().endOf("day").tz("Asia/Bangkok").utcOffset("+0700"),
    },
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

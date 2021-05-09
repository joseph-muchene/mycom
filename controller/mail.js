exports.sendMail = (req, res, next) => {
  let mailOptions = {
    from: `${req.body.mailerState.email}`,
    to: process.env.EMAIL,
    subject: `Message from: ${req.body.mailerState.email}`,
    text: `${req.body.mailerState.message}`,
  };
  tranporter.sendMail(mailOptions, function (err, data) {
    if (err) {
      res.json({
        status: "fail",
      });
    } else {
      console.log(`== Message sent ==`);
      res.json({
        status: "success",
      });
    }
  });
};

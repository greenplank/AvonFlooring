import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
// import BlockTitle from "../block-title";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";

import emailjs from "emailjs-com";
import { init } from "emailjs-com";
init("user_cBTdfX9rfO3etD4a9JDB0");

const useStyles = makeStyles((theme) => ({
  background: {
    // backgroundImage: `url(${background})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "60em",
  },
  message: {
    border: `2px solid green`,
    marginTop: ".5em",
    borderRadius: ".3em",
  },
  sendButton: {
    ...theme.typography.estimate,
    borderRadius: 50,
    height: 45,
    width: 245,
    fontSize: "1rem",
    backgroundColor: theme.palette.common.orange,
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
    },
    [theme.breakpoints.down("sm")]: {
      height: 40,
      width: 225,
    },
  },
}));

const ContactFormOne = () => {
  function sendEmail(e) {
    debugger;
    e.preventDefault();

    emailjs
      .sendForm(
        "service_b9r9vmo",
        "template_idcv5rn",
        e.target,
        "user_cBTdfX9rfO3etD4a9JDB0"
      )
      .then(
        ((res) => {
          setLoading(false);
          setOpen(false);
          setName("");
          setEmail("");
          setPhone("");
          setMessage("");
          steAlert({
            open: true,
            message: "Message sent successfully",
            backgroundColor: "#4BB543",
          });
        })((err) => {
          setLoading(false);
          steAlert({
            open: true,
            message: "Something went wrong,please try again!",
            backgroundColor: "#FF3232",
          });
        })
      );
    e.target.reset();
  }

  const classes = useStyles();

  const [name, setName] = useState("");

  const [email, setEmail] = useState("");
  const [emailHelper, setEmailHelper] = useState("");

  const [phone, setPhone] = useState("");

  const [message, setMessage] = useState("");

  const [subject, setSubject] = useState("");

  const [open, setOpen] = useState(false);

  const [loading, setLoading] = useState(false);

  const [alert, steAlert] = useState({
    open: false,
    message: "",
    backgroundColor: "",
  });

  const onChange = (event) => {
    let valid;

    switch (event.target.id) {
      case "email":
        setEmail(event.target.value);
        valid = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(
          event.target.value
        );
        if (!valid) {
          setEmailHelper("Invalid Email");
        } else {
          setEmailHelper("");
        }
        break;

      default:
        break;
    }
  };
  const buttonContents = (
    <React.Fragment>
      Submit
      {/* <img src={airplane} alt="paper airplane" style={{ marginLeft: "1em" }} /> */}
    </React.Fragment>
  );
  return (
    <section className="contact-page pt-120 pb-80">
      <div className="contact-form">
        <h2>Contact Us</h2>
        <form onSubmit={sendEmail}>
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="form-group">
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter your Name"
                    label="Enter your Name"
                    className="form-control"
                    id="name"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="form-group">
                  <input
                    type="text"
                    placeholder="Email
                                        "
                    className="form-control"
                    id="email"
                    value={email}
                    helperText={emailHelper}
                    error={emailHelper.length !== 0}
                    name="email"
                    onChange={onChange}
                    required
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="form-group">
                  <input
                    type="text"
                    name="phone"
                    placeholder="Telephone
                                        "
                    className="form-control"
                    value={phone}
                    onChange={(event) => setPhone(event.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="form-group">
                  <input
                    type="text"
                    name="subject"
                    label="Subject"
                    id="subject"
                    placeholder="Subject
                                        "
                    className="form-control"
                    value={subject}
                    onChange={(event) => setSubject(event.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="col-lg-12 col-md-12">
                <div className="form-group">
                  <textarea
                    type="text"
                    cols="30"
                    rows="6"
                    placeholder="Write your message....."
                    className="form-control"
                    name="message"
                    InputProps={{ disableUnderline: true }}
                    id="message"
                    multiline
                    // rows={10}
                    value={message}
                    onChange={(event) => setMessage(event.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="col-lg-12 col-sm-12">
                <Button
                  variant="contained"
                  className={classes.sendButton}
                  type="submit"
                  disabled={
                    name.length === 0 ||
                    message.length === 0 ||
                    email.length === 0
                  }
                  onClick={() => setOpen(true)}
                >
                  {/* {buttonContents} */}
                  {loading ? <CircularProgress size={30} /> : buttonContents}
                </Button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactFormOne;

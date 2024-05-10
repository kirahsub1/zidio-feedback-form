import "../css/form.css";
import starIcon1 from "../image/Star.png";
import starIcon2 from "../image/Star (1).png";
import TextField from "@mui/material/TextField";
import EmailIcon from "@mui/icons-material/Email";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
const form = ({ label, placeholder, ...rest }) => {
  return (
    <div>
      <h2> Feedback Form </h2>
      <div className="container">
        <div className="user-input-container">
          <label>Name:</label>
          <div style={{ display: "flex", alignItems: "center" }}>
            <AccountCircleIcon
              className="user-icon"
              style={{ marginRight: "8px" }}
            />
            <TextField
              {...rest}
              className="user-input"
              fullWidth
              variant="outlined"
              label={label}
              placeholder={placeholder}
              type="text"
              InputLabelProps={{
                shrink: true,
              }}
            />
          </div>
        </div>
        <div className="user-input">
          <div style={{ display: "flex", alignItems: "center" }}>
            <EmailIcon className="user-icon" style={{ marginRight: "8px" }} />
            <TextField
              {...rest}
              className="user-input"
              fullWidth
              label={label}
              variant="outlined"
              placeholder={placeholder}
              type="email"
              InputLabelProps={{
                shrink: true,
              }}
            />
          </div>
        </div>
        <strong>
          <p>Share your experience in scalling</p>
        </strong>
        <div>
          <img src={starIcon1} alt="star" />
          <img src={starIcon1} alt="star" />
          <img src={starIcon1} alt="star" />
          <img src={starIcon1} alt="star" />
          <img src={starIcon2} alt="litestar" />
        </div>
        <div className="form-group">
          <textarea
            id="message"
            name="message"
            placeholder="Add your comments."
            rows="5"
            required
          ></textarea>
        </div>
        <button
          className="bg-sky-700 px-4 py-2 text-white hover:bg-sky-800 sm:px-8 sm:py-3 rounded-mdcc"
          type="submit"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default form;

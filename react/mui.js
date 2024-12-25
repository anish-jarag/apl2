import React, { useState } from "react";
import {
  Button,
  TextField,
  Switch,
  Card,
  CardContent,
  Checkbox,
  FormControlLabel,
  Box,
} from "@mui/material";

function MUIComponents() {
  const [isToggled, setIsToggled] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = (e) => {
    setIsToggled(e.target.checked);
  };

  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        gap: 2, // Spacing between elements
        padding: 2,
        backgroundColor: "#f5f5f5",
      }}
    >
      <h2>MUI Components Demo</h2>

      {/* Button */}
      <Button variant="contained" color="primary">
        Click Me
      </Button>

      {/* TextField */}
      <TextField label="Enter Text" variant="outlined" />

      {/* Switch */}
      <FormControlLabel
        control={
          <Switch checked={isToggled} onChange={handleToggle} color="primary" />
        }
        label={isToggled ? "On" : "Off"}
      />

      {/* Checkbox */}
      <FormControlLabel
        control={
          <Checkbox
            checked={isChecked}
            onChange={handleCheckboxChange}
            color="secondary"
          />
        }
        label={isChecked ? "Checked" : "Unchecked"}
      />

      {/* Card */}
      <Card style={{ maxWidth: "300px" }}>
        <CardContent>
          <h3>Card Title</h3>
          <p>This is a simple card component.</p>
        </CardContent>
      </Card>
    </Box>
  );
}

export default MUIComponents;

import React, { useState } from "react";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import CardContent from "@mui/material/CardContent";
import Checkbox from "@mui/material/Checkbox";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

const CreateAd = () => {
  const navigate = useNavigate();
  const [isTextAd, setIsTextAd] = useState(false);
  const [isMediaAd, setIsMediaAd] = useState(false);

  const handleCardClick = (isAdSelected) => {
    if (isAdSelected === "text") {
      setIsTextAd(!isTextAd);
    } else if (isAdSelected === "media") {
      setIsMediaAd(!isMediaAd);
    }
  };

  const handleNextClick = () => {
    if (isTextAd && isMediaAd) {
      navigate("/add-type/fill-media-ad");
    } else if (isTextAd) {
      navigate("/add-type/fill-text-ad");
    } else if (isMediaAd) {
      navigate("/add-type/fill-media-ad");
    } else {
      alert("Please select an ad type.");
    }
  };

  return (
    <>
      <Paper elevation={3} sx={{ p: 3, m: 1 }}>
        <h3>Create Ads</h3>
        <Grid container flexDirection="column" alignItems="center">
          <div style={{ display: "flex" }}>
            <Grid container>
              <Grid item xs={12} sm={6} md={6}>
                <Card
                  style={{
                    width: 250,
                    height: 250,
                    cursor: "pointer",
                    margin: "10px",
                  }}
                  onClick={() => handleCardClick("text")}
                >
                  <CardContent>
                    <Typography variant="h6">Text Ad</Typography>
                    <Box display="flex" alignItems="center">
                      <Checkbox checked={isTextAd} readOnly />

                      <span>Fill Text Ad</span>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} sm={6} md={6}>
                <Card
                  style={{
                    width: 250,
                    height: 250,
                    cursor: "pointer",
                    margin: "10px",
                  }}
                  onClick={() => handleCardClick("media")}
                >
                  <CardContent>
                    <Typography variant="h6">Media Ad</Typography>
                    <Box display="flex" alignItems="center">
                      <Checkbox checked={isMediaAd} readOnly />
                      <span>Fill Media Ad</span>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </div>
          <Button
            variant="contained"
            color="primary"
            onClick={handleNextClick}
            style={{ alignSelf: "flex-end", marginLeft: "10px" }}
          >
            Next
          </Button>
        </Grid>
      </Paper>
    </>
  );
};

export default CreateAd;

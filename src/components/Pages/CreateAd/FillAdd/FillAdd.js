import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Select from "@mui/material/Select";
import Grid from "@mui/material/Grid";
import MenuItem from "@mui/material/MenuItem";
import Paper from "@mui/material/Paper";
import { useNavigate, useLocation } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";

const FillAd = () => {
  const { handleSubmit, control } = useForm();
  const navigate = useNavigate();
  const path = useLocation().pathname;

  const onSubmit = (data) => {
    navigate("/add-type/fill-text-ad/submit-form");
  };

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <Paper elevation={2} sx={{ m: 1, p: 2 }}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="adv-form text-secondary py-3 fw-bold">
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Controller
                    name="heading-01"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                      <TextField
                        {...field}
                        label="Heading 01"
                        fullWidth
                        placeholder="Add a heading that would make users interested"
                      />
                    )}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Controller
                    name="heading-02"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                      <TextField
                        {...field}
                        label="Heading 02"
                        placeholder="Add a heading that would make users interested"
                        fullWidth
                      />
                    )}
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} md={6}>
              <Controller
                name="description"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Description 01"
                    minRows={4}
                    multiline
                    placeholder="Add primary text to help users understand more about your products, services or offers"
                    fullWidth
                  />
                )}
              />
            </Grid>
            {path == "/add-type/fill-media-ad" && (
              <>
                <Grid item xs={12} sm={6} md={4}>
                  <Controller
                    name="landscape-img"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                      <TextField
                        {...field}
                        label="Landscape Marketing Image (1.9:1)"
                        placeholder="Add the URL of the image you want to use for the ad"
                        fullWidth
                      />
                    )}
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <Controller
                    name="portrait-img"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                      <TextField
                        {...field}
                        label="Portrait Marketing Image (4:5)"
                        placeholder="Add the URL of the image you want to use for the ad"
                        fullWidth
                      />
                    )}
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <Controller
                    name="square-img"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                      <TextField
                        {...field}
                        label="Square Marketing Image (1:1)"
                        placeholder="Add the URL of the image you want to use for the ad"
                        fullWidth
                      />
                    )}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Controller
                    name="video-url"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                      <TextField
                        {...field}
                        label="Video URL"
                        placeholder="Add the URL of the video you want to use for the ad"
                        fullWidth
                      />
                    )}
                  />
                </Grid>
              </>
            )}
            <Grid item xs={12} md={6}>
              <Controller
                name="bussiness-name"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Business Name"
                    placeholder="Add your business name"
                    fullWidth
                  />
                )}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Controller
                name="button-label"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <Select {...field} label="Button Label" fullWidth>
                    <MenuItem value="">
                      Select the label that best suits your ad
                    </MenuItem>
                    <MenuItem value="Label 1">Label 1</MenuItem>
                    <MenuItem value="Label 2">Label 2</MenuItem>
                    <MenuItem value="Label 3">Label 3</MenuItem>
                  </Select>
                )}
              />
            </Grid>
            <Grid item xs={12}>
              <Controller
                name="website-url"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Website URL"
                    placeholder="Add the URL of the landing page you want to redirect users to"
                    fullWidth
                  />
                )}
              />
            </Grid>
          </Grid>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            gap: "16px",
            marginTop: "16px",
          }}
        >
          <Button
            variant="outlined"
            onClick={() => {
              handleBack();
            }}
          >
            Back
          </Button>
          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </div>
      </form>
    </Paper>
  );
};

export default FillAd;

import React from "react";
import PropTypes from "prop-types";
import injectSheet from "react-jss";
import CircularProgress from "@material-ui/core/CircularProgress";

const styles = theme => ({
  loading: {
    display: "flex",
    background: props =>
      props.overrides && props.overrides.background
        ? props.overrides.background
        : theme.base.colors.background,
    position: "absolute",
    left: props => (props.overrides && props.overrides.left ? props.overrides.left : 0),
    right: props => (props.overrides && props.overrides.right ? props.overrides.right : 0),
    top: "0",
    width: props => (props.overrides && props.overrides.width ? props.overrides.width : "100%"),
    height: props => (props.overrides && props.overrides.height ? props.overrides.height : "100%"),
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    "&::after": {
      content: props => (props.afterLeft || props.afterRight ? `""` : ``),
      position: "absolute",
      right: props => (props.afterRight ? 0 : ""),
      left: props => (props.afterLeft ? 0 : ""),
      top: theme.base.sizes.linesMargin,
      bottom: theme.base.sizes.linesMargin,
      width: 0,
      borderRight: `1px solid ${theme.base.colors.lines}`
    }
  },
  progress: {}
});

const Loading = props => {
  const { classes, progressSize } = props;

  return (
    <div className={classes.loading}>
      <CircularProgress className={classes.progress} size={progressSize ? progressSize : 30} />
    </div>
  );
};

Loading.propTypes = {
  classes: PropTypes.object.isRequired,
  progressSize: PropTypes.number,
  overrides: PropTypes.object
};

export default injectSheet(styles)(Loading);

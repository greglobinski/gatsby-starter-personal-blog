import injectSheet from "react-jss";
import PropTypes from "prop-types";
import React from "react";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import IconButton from "@material-ui/core/IconButton";
import FormatSizeIcon from "@material-ui/icons/FormatSize";
import classNames from "classnames";

const styles = theme => ({
  fontSizeSetter: {
    [`@media (min-width: ${theme.mediaQueryTresholds.M}px)`]: {}
  },
  open: {
    color: theme.bars.colors.icon
  }
});

class FontSetter extends React.Component {
  state = {
    anchorEl: null,
    open: false
  };

  componentWillUnmount() {
    clearTimeout(this.timeout);
  }

  handleClick = event => {
    this.setState({ open: !this.state.open, anchorEl: event.currentTarget });
  };

  handleClose = () => {
    if (!this.state.open) {
      return;
    }

    this.timeout = setTimeout(() => {
      this.setState({ open: false, anchorEl: null });
    });
  };

  handleSetting = e => {
    const val = e.target.innerText.replace("%", "");
    const factor = +val / 100;
    this.props.increaseFont(factor);
    this.handleClose();
  };

  render() {
    const { classes } = this.props;
    const { anchorEl, open } = this.state;

    return (
      <nav className={classes.fontSizeSetter}>
        <div>
          <IconButton
            aria-label="Increase font size"
            aria-owns={anchorEl ? "font-setter" : undefined}
            aria-haspopup="true"
            onClick={this.handleClick}
            title="Change font size"
            className={classes.open}
          >
            <FormatSizeIcon />
          </IconButton>
          <Menu
            id="font-setter"
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={this.handleClose}
            role="menu"
          >
            <MenuItem onClick={this.handleSetting}>150%</MenuItem>
            <MenuItem onClick={this.handleSetting}>125%</MenuItem>
            <MenuItem onClick={this.handleSetting}>100%</MenuItem>
          </Menu>
        </div>
      </nav>
    );
  }
}

FontSetter.propTypes = {
  classes: PropTypes.object.isRequired,
  increaseFont: PropTypes.func.isRequired
};

export default injectSheet(styles)(FontSetter);

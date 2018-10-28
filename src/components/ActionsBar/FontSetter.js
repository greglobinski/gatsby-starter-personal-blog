import injectSheet from "react-jss";
import PropTypes from "prop-types";
import React from "react";

//import { MenuItem, MenuList } from "@material-ui/core/Menu";
import { Manager, Target, Popper } from "react-popper";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import classNames from "classnames";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import IconButton from "@material-ui/core/IconButton";
import FormatSizeIcon from "@material-ui/icons/FormatSize";

const styles = theme => ({
  fontSizeSetter: {
    [`@media (min-width: ${theme.mediaQueryTresholds.M}px)`]: {}
  },
  open: {
    color: theme.bars.colors.icon
  },
  popperClose: {
    pointerEvents: "none"
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

  handleClick = () => {
    this.setState({ open: !this.state.open });
  };

  handleClose = () => {
    if (!this.state.open) {
      return;
    }

    this.timeout = setTimeout(() => {
      this.setState({ open: false });
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
        <Manager>
          <Target>
            <IconButton
              aria-label="Increase font size"
              aria-owns={anchorEl ? "long-menu" : null}
              aria-haspopup="true"
              onClick={this.handleClick}
              title="Change font size"
              className={classes.open}
            >
              <FormatSizeIcon />
            </IconButton>
          </Target>
          <Popper
            placement="bottom-end"
            eventsEnabled={open}
            className={classNames({ [classes.popperClose]: !open })}
          >
            <ClickAwayListener onClickAway={this.handleClose}>
              <Grow in={open} id="font-menu-list" style={{ transformOrigin: "0 0 0" }}>
                <Paper>
                  <MenuList role="menu">
                    <MenuItem onClick={this.handleSetting}>150%</MenuItem>
                    <MenuItem onClick={this.handleSetting}>125%</MenuItem>
                    <MenuItem onClick={this.handleSetting}>100%</MenuItem>
                  </MenuList>
                </Paper>
              </Grow>
            </ClickAwayListener>
          </Popper>
        </Manager>
      </nav>
    );
  }
}

FontSetter.propTypes = {
  classes: PropTypes.object.isRequired,
  increaseFont: PropTypes.func.isRequired
};

export default injectSheet(styles)(FontSetter);

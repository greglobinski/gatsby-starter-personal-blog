import React from "react";
import PropTypes from "prop-types";
import injectSheet from "react-jss";
import { MenuItem, MenuList } from "material-ui/Menu";
import IconButton from "material-ui/IconButton";
import { Manager, Target, Popper } from "react-popper";
import ClickAwayListener from "material-ui/utils/ClickAwayListener";
import Grow from "material-ui/transitions/Grow";
import Paper from "material-ui/Paper";
import classNames from "classnames";
import FilterListIcon from "material-ui-icons/FilterList";

const styles = theme => ({
  fontSizeSetter: {
    [`@media (min-width: ${theme.mediaQueryTresholds.M}px)`]: {}
  },
  buttonRoot: {
    "&:hover": {
      background: "rgba(0, 0, 0, 0.04)"
    }
  },
  buttonLabel: {
    textTransform: "none",
    fontSize: "1.4em",
    color: "#777"
  },
  popperClose: {
    pointerEvents: "none"
  }
});

class CategoryFilter extends React.Component {
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

  handleFiltering = e => {
    const category = e.target.innerText;
    this.props.filterCategory(category);
    this.handleClose();
  };

  render() {
    const { classes, categories } = this.props;
    const { anchorEl, open } = this.state;

    return (
      <nav className={classes.fontSizeSetter}>
        <Manager>
          <Target>
            <IconButton
              aria-label="Filter by category"
              aria-owns={anchorEl ? "long-menu" : null}
              aria-haspopup="true"
              onClick={this.handleClick}
            >
              <FilterListIcon />
            </IconButton>
          </Target>
          <Popper
            placement="bottom-end"
            eventsEnabled={open}
            className={classNames({ [classes.popperClose]: !open })}
          >
            <ClickAwayListener onClickAway={this.handleClose}>
              <Grow in={open} id="menu-list" style={{ transformOrigin: "0 0 0" }}>
                <Paper>
                  <MenuList role="menu">
                    <MenuItem key="all" onClick={this.handleFiltering}>
                      all posts
                    </MenuItem>
                    {categories.map(category => (
                      <MenuItem key={category} onClick={this.handleFiltering}>
                        {category}
                      </MenuItem>
                    ))}
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

CategoryFilter.propTypes = {
  classes: PropTypes.object.isRequired,
  categories: PropTypes.array.isRequired,
  filterCategory: PropTypes.func.isRequired
};

export default injectSheet(styles)(CategoryFilter);

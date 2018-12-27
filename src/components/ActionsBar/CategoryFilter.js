import React from "react";
import PropTypes from "prop-types";
import injectSheet from "react-jss";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import IconButton from "@material-ui/core/IconButton";
import FilterListIcon from "@material-ui/icons/FilterList";

const styles = theme => ({
  fontSizeSetter: {
    [`@media (min-width: ${theme.mediaQueryTresholds.M}px)`]: {}
  },
  open: {
    color: theme.bars.colors.icon
  }
});

class CategoryFilter extends React.Component {
  state = {
    anchorEl: null
  };

  componentWillUnmount() {
    clearTimeout(this.timeout);
  }

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.timeout = setTimeout(() => {
      this.setState({ anchorEl: null });
    });
  };

  handleFiltering = e => {
    const category = e.target.innerText.trim();
    this.props.filterCategory(category);
    this.handleClose();
  };

  render() {
    const { classes, categories } = this.props;
    const { anchorEl } = this.state;

    return (
      <nav className={classes.fontSizeSetter}>
        <div>
          <IconButton
            aria-label="Filter by category"
            aria-owns={anchorEl ? "cat-menu-list" : undefined}
            aria-haspopup="true"
            onClick={this.handleClick}
            title="Filter the list by category"
            className={classes.open}
            role="menu"
          >
            <FilterListIcon />
          </IconButton>
          <Menu
            id="cat-menu-list"
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={this.handleClose}
          >
            <MenuItem key="all" onClick={this.handleFiltering}>
              all posts
            </MenuItem>
            {categories.map(category => (
              <MenuItem key={category} onClick={this.handleFiltering}>
                {category}
              </MenuItem>
            ))}
          </Menu>
        </div>
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

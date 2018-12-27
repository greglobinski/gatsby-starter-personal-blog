import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "gatsby";
import injectSheet from 'react-jss';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import classNames from 'classnames';

const styles = theme => ({
  topMenu: {
    float: "right",
    margin: "5px 10px 0 0",
    [`@media (min-width: ${theme.mediaQueryTresholds.M}px)`]: {}
  },
  open: {
    color: theme.bars.colors.icon
  }
});

class TopMenu extends React.Component {
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

  render() {
    const { classes, pages } = this.props;
    const { anchorEl, open } = this.state;

    return (
      <nav className={classes.topMenu}>
        <div>
          <IconButton
            aria-label="More"
            aria-owns={anchorEl ? "top-menu" : null}
            aria-haspopup="true"
            onClick={this.handleClick}
            className={classes.open}
          >
            <MoreVertIcon />
          </IconButton>
          <Menu
            id="top-menu"
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={this.handleClose}
            role="menu"
          >
            <MenuItem
              onClick={e => {
                this.props.homeLinkOnClick(e);
                this.handleClose();
              }}
            >
              Home
            </MenuItem>
            {pages.map((page, i) => {
              const { fields, frontmatter } = page.node;

              return (
                <Link key={fields.slug} to={fields.slug} style={{ display: "block" }}>
                  <MenuItem
                    onClick={e => {
                      this.props.pageLinkOnClick(e);
                      this.handleClose();
                    }}
                  >
                    {frontmatter.menuTitle ? frontmatter.menuTitle : frontmatter.title}
                  </MenuItem>
                </Link>
              );
            })}
            <Link to="/contact/" style={{ display: "block" }}>
              <MenuItem
                onClick={e => {
                  this.props.pageLinkOnClick(e);
                  this.handleClose();
                }}
              >
                Contact
              </MenuItem>
            </Link>
          </Menu>
        </div>
      </nav>
    );
  }
}

TopMenu.propTypes = {
  pages: PropTypes.array.isRequired,
  classes: PropTypes.object.isRequired,
  pageLinkOnClick: PropTypes.func.isRequired,
  homeLinkOnClick: PropTypes.func.isRequired
};

export default injectSheet(styles)(TopMenu);

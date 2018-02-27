export function backNavigatorToFullMode(e) {
  e.preventDefault();

  if (this.props.navigatorIsAside) {
    this.props.setNavigatorInTransition("from");

    setTimeout(() => {
      this.props.setNavigatorInTransition(false);
      this.props.setNavigatorIsAside(false);
    }, 100);
  }
}

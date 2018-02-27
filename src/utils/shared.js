import { forceCheck } from "react-lazyload";

export function featureNavigator(e) {
  console.log("featureNavigator");
  e.preventDefault();

  if (this.props.navigatorPosition === "is-aside") {
    this.props.setNavigatorPosition("moving-featured");

    setTimeout(() => {
      this.props.setNavigatorPosition("resizing-featured");
      setTimeout(() => {
        this.props.setNavigatorPosition("is-featured");
      });
    }, 500);
  }
}

export function moveNavigatorAside(e) {
  if (this.props.navigatorPosition === "is-featured") {
    this.props.setNavigatorPosition("moving-aside");

    setTimeout(() => {
      this.props.setNavigatorPosition("resizing-aside");
      setTimeout(() => {
        this.props.setNavigatorPosition("is-aside");
        setTimeout(forceCheck, 600);
      });
    }, 1000);
  }
}

import { forceCheck } from "react-lazyload";

export function featureNavigator(e) {
  e.preventDefault();

  if (this.props.navigatorPosition === "is-aside") {
    if (this.props.isWideScreen) {
      this.props.setNavigatorPosition("moving-featured");

      setTimeout(() => {
        this.props.setNavigatorPosition("resizing-featured");
        setTimeout(() => {
          this.props.setNavigatorPosition("is-featured");

          // uncomment following lines if you want to count featuring Navigator as a visit
          // to index page ('/'), you have to also uncomment import { navigateTo }...
          /*
        setTimeout(() => {
          navigateTo("/");
        }, 1000);
        */
        });
      }, 300);
    } else {
      setTimeout(() => {
        this.props.setNavigatorPosition("is-featured");
      }, 0);
    }
  }
}

export function moveNavigatorAside(e) {
  const target = e.currentTarget;
  const dataShape = target.getAttribute("data-shape");
  const navigatorShape = dataShape ? dataShape : "open";

  if (this.props.navigatorPosition === "is-featured") {
    if (this.props.isWideScreen) {
      this.props.setNavigatorPosition("moving-aside");

      setTimeout(() => {
        this.props.setNavigatorPosition("resizing-aside");
        this.props.setNavigatorShape(navigatorShape);
        setTimeout(() => {
          this.props.setNavigatorPosition("is-aside");
          setTimeout(forceCheck, 600);
        });
      }, 1000);
    } else {
      setTimeout(() => {
        this.props.setNavigatorPosition("is-aside");
      }, 100);
    }
  }
}

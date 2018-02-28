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

        // uncomment following lines if you want to count featuring Navigator as a visit
        // to index page ('/'), you have to also uncomment import { navigateTo }...
        /*
        setTimeout(() => {
          navigateTo("/");
        }, 1000);
        */
      });
    }, 300);
  }
}

export function moveNavigatorAside(e) {
  const target = e.currentTarget;
  const dataShape = target.getAttribute("data-shape");
  const navigatorShape = dataShape ? dataShape : "open";

  if (this.props.navigatorPosition === "is-featured") {
    this.props.setNavigatorPosition("moving-aside");

    setTimeout(() => {
      this.props.setNavigatorPosition("resizing-aside");
      setTimeout(() => {
        this.props.setNavigatorPosition("is-aside");
        this.props.setNavigatorShape(navigatorShape);
        setTimeout(forceCheck, 600);
      });
    }, 1000);
  }
}

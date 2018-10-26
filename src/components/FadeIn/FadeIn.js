import React, { Component } from 'react';
import posed from 'react-pose';

const Fade = posed.div({
  closed: { color: "#e2fcea" },
  open: { color: "#000" }
});

const Headerfade = posed.div({
  closed: { color: "#e2fcea"},
  open: { color: "rgba(0, 0, 0, 0.85)"}
});

const Contactfade = posed.div({
  closed: { opacity: 0 },
  open: { opacity: 1}
});

class FadeIn extends Component {
  state = {
    isVisible: false
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({isVisible: true});
    }, 1000);
  }

  render() {

    const { isVisible } = this.state;
    const { fadetype } = this.props;

    let fade = '';
    let posedFade = <Fade pose={isVisible ? 'open' : 'closed'}>{this.props.children}</Fade>;
    let posedHeaderfade = <Headerfade pose={isVisible ? 'open' : 'closed'}>{this.props.children}</Headerfade>
    let posedContactfade = <Contactfade pose={isVisible ? 'open' : 'closed'}>{this.props.children}</Contactfade>

    switch (fadetype) {
      case "header": 
        fade = posedHeaderfade;
        break;
      case "contact":
        fade = posedContactfade;
        break;
      default:
        fade = posedFade;
        break;
    }

    return fade;
  }
}

export default FadeIn;

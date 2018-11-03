import React from "react";

export default class CalendlyForm extends React.Component {
  componentDidMount() {
    const s = document.createElement("script");
    s.type = "text/javascript";
    s.async = true;
    s.src = "https://assets.calendly.com/assets/external/widget.js";
    s.innerHTML = "document.write('This is output by document.write()!')";
    this.instance.appendChild(s);
  }

  render() {
    return (
      <React.Fragment>
        <div
          className="calendly-inline-widget"
          data-url="https://calendly.com/hunter-applied"
          style={{ minWidth: 320, height: 580 }}
        />
        <div ref={el => (this.instance = el)} />
      </React.Fragment>
    );
  }
}

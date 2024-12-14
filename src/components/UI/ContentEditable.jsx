import React, { Component } from "react";

class ContentEditable extends Component {
  constructor(props) {
    super(props);
    this.contentEditable = React.createRef();
  }

  handleInput = (e) => {
    // Call the provided onInput callback with the updated content
    if (this.props.onInput) {
      this.props.onInput(e.target.textContent);
    }
  };

  render() {
    return (
      <div
        ref={this.contentEditable}
        contentEditable={true}
        onInput={this.handleInput}
        dangerouslySetInnerHTML={{ __html: this.props.html }}
      />
    );
  }
}

export default ContentEditable;

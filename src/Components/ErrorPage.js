import React from "react";

class ErrorPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <h1>Error page, page not found</h1>
      </div>
    );
  }
}

export default ErrorPage;

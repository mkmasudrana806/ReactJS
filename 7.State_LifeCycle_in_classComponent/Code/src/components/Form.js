import React from "react";

class Form extends React.Component {
  state = {
    title: "JavaScript",
    text: "JavaScript is awesome",
    library: "React",
    isAwesome: true,
  };

  handleInput = (e) => {
    if (e.target.type === "select-one") {
      this.setState({ library: e.target.value });
    } else if (e.target.type === "checkbox") {
      this.setState({ isAwesome: e.target.checked });
    }
    [e.target.name] = e.target.value;
  };

  // handle form submit
  handleFormSubmit = (e) => {
    e.preventDefault();
    const { title, library, isAwesome, text } = this.state;
    console.log(title, library, isAwesome, text);
  };
  render() {
    return (
      <div>
        <br />
        <form onSubmit={this.handleFormSubmit}>
          {/* input handle  */}
          <input
            type="text"
            name="title"
            value={this.state.title}
            placeholder="Enter Name"
            onChange={this.handleInput}
          />
          <br />
          <br />
          {/* text area handle  */}
          <textarea
            name="text"
            value={this.state.text}
            onChange={this.handleInput}
          >
            {" "}
          </textarea>
          <br />
          <br />
          {/* select and options handle  */}
          <select
            onChange={this.handleInput}
            value={this.state.library}
            name=""
            id=""
          >
            <option value="NodeJS">Node JS</option>
            <option value="React">React JS</option>
            <option value="Angular">Angular</option>
          </select>

          <br />
          <br />
          <input
            type="checkbox"
            onChange={this.handleInput}
            checked={this.state.isAwesome}
          />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default Form;

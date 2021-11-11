import { number } from "prop-types";
import React, { Component } from "react";

export default class Form extends Component {
  render() {
    return (
      <form className="form">
        <label htmlFor="name-input">
          <input type="text" data-testid="name-input" />
        </label>
        <label htmlFor="description-input">
          <textarea data-testid="description-input">Digite aqui</textarea>
        </label>
        <label htmlFor="attr1-input">
          <input type="number" data-testid="attr1-input" />
        </label>
        <label htmlFor="attr2-input">
          <input type="number" data-testid="attr2-input" />
        </label>
        <label htmlFor="attr3-input">
          <input type="number" data-testid="attr3-input" />
        </label>
        <label htmlFor="image-input">
          <input type="text" data-testid="image-input" />
        </label>
        <label htmlFor="rare-input">
          <select data-testid="rare-input">
            <option>normal</option>
            <option>raro</option>
            <option>muito raro</option>
          </select>
        </label>
        <label htmlFor="trunfo-input">
          <input type="checkbox" data-testid="trunfo-input" />
        </label>
        <label htmlFor="save-button">
          <input type="button" data-testid="save-button" />
        </label>
      </form>
    );
  }
}

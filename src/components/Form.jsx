import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Form extends Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      // hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;

    return (
      <form className="form">
        <label htmlFor="name-input">
          Nome:
          <input
            type="text"
            value={ cardName }
            onChange={ onInputChange }
            data-testid="name-input"
            name="cardName"
          />
        </label>
        <label htmlFor="description-input">
          Descrição:
          <textarea
            value={ cardDescription }
            onChange={ onInputChange }
            data-testid="description-input"
            name="cardDescription"
          >
            Digite aqui
          </textarea>
        </label>
        <label htmlFor="attr1-input">
          Attr01
          <input
            value={ cardAttr1 }
            onChange={ onInputChange }
            type="number"
            min="1"
            max="90"
            data-testid="attr1-input"
            name="cardAttr1"
          />
        </label>
        <label htmlFor="attr2-input">
          Attr02
          <input
            value={ cardAttr2 }
            onChange={ onInputChange }
            type="number"
            min="1"
            max="90"
            data-testid="attr2-input"
            name="cardAttr2"
          />
        </label>
        <label htmlFor="attr3-input">
          Attr03
          <input
            value={ cardAttr3 }
            onChange={ onInputChange }
            type="number"
            min="1"
            max="90"
            data-testid="attr3-input"
            name="cardAttr3"
          />
        </label>
        <label htmlFor="image-input">
          Imagem
          <input
            value={ cardImage }
            onChange={ onInputChange }
            type="text"
            data-testid="image-input"
            name="cardImage"
          />
        </label>
        <label htmlFor="rare-input">
          Raridade:
          <select
            value={ cardRare }
            onChange={ onInputChange }
            data-testid="rare-input"
            name="cardRare"
          >
            <option>normal</option>
            <option>raro</option>
            <option>muito raro</option>
          </select>
        </label>
        <label htmlFor="trunfo-input">
          Super Trunfo
          <input
            checked={ cardTrunfo }
            onChange={ onInputChange }
            type="checkbox"
            data-testid="trunfo-input"
            name="cardTrunfo"
          />
        </label>
        <button
          type="submit"
          data-testid="save-button"
          name="isSaveButtonDisabled"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
        >
          Salvar
        </button>
      </form>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  // hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

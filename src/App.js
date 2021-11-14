import React from 'react';

import Form from './components/Form';
import Card from './components/Card';

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '',
      cardAttr2: '',
      cardAttr3: '',
      cardImage: '',
      cardRare: '',
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: true,
    };

    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({ [name]: value }, () => {
      const { cardName, cardDescription, cardImage, cardAttr1,
        cardAttr2, cardAttr3 } = this.state;
      const maxNumber = 90;
      const totalNumber = 210;
      const sumAtt = Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3);

      if (cardName === ''
      || cardDescription === ''
      || cardImage === ''
      || cardAttr1 > maxNumber
      || cardAttr1 < 0
      || cardAttr2 > maxNumber
      || cardAttr2 < 0
      || cardAttr3 > maxNumber
      || cardAttr3 < 0
      || sumAtt > totalNumber) {
        this.setState({ isSaveButtonDisabled: true });
      } else {
        this.setState({ isSaveButtonDisabled: false });
      }
    });
  }

  onSaveButtonClick() { }

  render() {
    const {
      state: {
        cardName,
        cardDescription,
        cardAttr1,
        cardAttr2,
        cardAttr3,
        cardImage,
        cardRare,
        cardTrunfo,
        hasTrunfo,
        isSaveButtonDisabled },
      onInputChange,
      onSaveButtonClick,
    } = this;

    const states = {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
      isSaveButtonDisabled,
    };

    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          { ...states }
          onClick={ onInputChange }
          onInputChange={ onInputChange }
          onSaveButtonClick={ onSaveButtonClick }
        />
        <Card { ...states } />
      </div>
    );
  }
}

// Requisito 4 feito com ajuda de Denilson Santuchi e Leandro Bastos.

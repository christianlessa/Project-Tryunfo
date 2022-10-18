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
      card: [],
    };

    this.onInputChange = this.onInputChange.bind(this);
    this.onSaveButtonClick = this.onSaveButtonClick.bind(this);
    this.addNewCard = this.addNewCard.bind(this);
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

  onSaveButtonClick(event) {
    event.preventDefault();
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
    } = this.state;

    this.setState({
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardDescription: '',
      cardImage: '',
      cardName: '',
      cardRare: 'normal',
      cardTrunfo: false,
      hasTrunfo: cardTrunfo,
      isSaveButtonDisabled: true,
    });

    this.addNewCard({
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
    });
  }

  addNewCard(cards) {
    this.setState((prevState) => ({
      card: [...prevState.card, cards],
    }));
  }

  render() {
    const {
      state: {
        card,
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
        {card.map((cards) => (
          <Card key={ cards.cardName } { ...cards } />
        ))}
      </div>
    );
  }
}

// Requisito 4 feito com ajuda de Denilson Santuchi e Leandro Bastos.
// Requisito 6, 7 e 8 feito com ajuda de Pedro Lima.
// Requisito 8 feito com ajuda de Laura Fumagalli, João Victor e Priscila Silva.

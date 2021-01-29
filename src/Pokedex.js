import React, { Component } from "react";

export default class Pokecard extends Component {
  render() {
    const addPaddingToId = (id) => {
      return String(id).padStart(3, "0");
    };
    return (
      <PokecardOuterContainer>
        <PokecardImageContainer>
          <img
            src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${addPaddingToId(
              this.props.pokeInfo.id
            )}.png`}
            alt={this.props.pokeInfo.name}
          />
        </PokecardImageContainer>
        <h3>{this.props.pokeInfo.name}</h3>
        <PokeInfo>Type: {this.props.pokeInfo.type}</PokeInfo>
        <PokeInfo>EXP: {this.props.pokeInfo.base_experience}</PokeInfo>
      </PokecardOuterContainer>
    );
  }
}

const slideInAnimation = keyframes`${slideInLeft}`;

const PokecardOuterContainer = styled.section`
  padding: 0.5rem;
  text-align: center;
  margin: 5rem;
  box-shadow: 10px 10px 5px #00000038;
  background: white;
  transition: all 0.09s ease-out;
  animation: 1s ${slideInAnimation};
  :hover {
    transform: translateX(5px);
    box-shadow: 20px 20px 8px #00000038;
  }
`;

const PokecardImageContainer = styled.div`
  background: #f1efef;
`;

const PokeInfo = styled.p`
  margin: 0;
`;

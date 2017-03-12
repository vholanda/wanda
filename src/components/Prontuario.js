import React, {Component} from 'react';
import {Card, CardHeader, CardText} from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import moment from 'moment';
import Logo from '../wanda-text.svg';

const wrapperStyle = {
    background: 'linear-gradient(to bottom right, #FC4968, #FB9564)',
    color: '#fff',
    width: '100vw',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
};

const cardStyle = {
  background: '#fff',
  maxWidth: '90vw',
  margin: '16px 0px 16px 0px',
  paddingTop: 16
};

const styleForm = {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-between'
};

const styleInput = {
  flex: '0 1 45%'
};

const lastStyleInput = {
  marginRight: 'auto',
  marginLeft: 12,
  width: '45%'
};

const racas = ['Branco', 'Preto', 'Pardo', 'Amarelo'];

const estadoCivil = ['Solteiro', 'Viúvo', 'Casado', 'Divorciado'];

const genero = ['Masculino', 'Feminino'];

export default class Prontuario extends Component {
  state = {
    paciente: {
      name: '',
      age: null,
      gender: null,
      civilStatus: '',
      racial: null,
      qtChildren: 0,
      drinkFrequency: 0,
      smokeFrequency: 0,
      pound: 0,
      height: 0,
      diabete: false,
      hypertension: false,
      lastScouting: new Date(),
      alergies: '',
      medicaments: '',
      susCardId: '',
      rg: '',
      mothersName: '',
      isPregnant: false,
      diseases: '',
      familyHistory: '',
      attendenceHistory: '',
      procedureHistory: '',
      extraInfos: ''
    }
  };

  componentDidMount() {
    const user = JSON.parse(window.localStorage.getItem('user'));
    this.setState({
      paciente: {
        name: user.user.name,
        age: user.profile.age,
        gender: user.profile.gender,
        civilStatus: user.profile.civilStatus,
        racial: user.profile.racial,
        qtChildren: user.profile.qtChildren,
        drinkFrequency: user.profile.drinkFrequency,
        smokeFrequency: user.profile.smokeFrequency,
        pound: user.profile.pound,
        height: user.profile.height,
        diabete: user.profile.diabete,
        hypertension: user.profile.hypertension,
        lastScouting: moment(new Date(user.profile.lastScouting)).add(2, 'hours').format('DD/MM/YYYY'),
        alergies: user.profile.alergies,
        medicaments: user.profile.medicaments,
        susCardId: user.profile.susCardId,
        rg: user.profile.rg,
        mothersName: user.profile.mothersName,
        isPregnant: user.profile.isPregnant,
        diseases: user.profile.diseases,
        familyHistory: user.profile.familyHistory,
        attendenceHistory: user.profile.attendenceHistory,
        procedureHistory: user.profile.procedureHistory,
        extraInfos: user.profile.extraInfos
      }
    })
  }

  mapAlergias() {
    return this.state.paciente.alergies.split(',').map((alergia, i) => <ListItem primaryText={alergia} key={i}/>);
  }

  mapMedicamentos() {
    return this.state.paciente.medicaments.split(',').map((medicamento, i) => <ListItem primaryText={medicamento} key={i}/>);
  }

  MapDoencas() {
    return this.state.paciente.diseases.split(',').map((doenca, i) => <ListItem primaryText={doenca} key={i}/>);
  }

  render() {
    const titleStyle = {
        fontSize: 40,
        padding: 0,
        color: '#000',
        fontFamily: "'Roboto', sans-serif"
    };

    return (
      <div style={wrapperStyle}>
        <img src={Logo} alt="wanda" style={{maxWidth: 400}} />
        <Card style={cardStyle}>
          <div style={{textAlign: 'center'}}>
            <CardHeader
              style={{padding: 0}}
            title="Prontuário"
            titleStyle={titleStyle}
            textStyle={{padding : 0}}/>
          </div>

          <CardText>
            <form style={styleForm}>
              <TextField style={styleInput} value={this.state.paciente.name} disabled={true} floatingLabelText="Nome"/><br/>
              <TextField style={styleInput} value={this.state.paciente.age} disabled={true} floatingLabelText="Idade"/><br/>
              <TextField style={styleInput} value={genero[this.state.paciente.gender - 1]} disabled={true} floatingLabelText="Gênero"/><br/>
              <TextField style={styleInput} value={estadoCivil[this.state.paciente.civilStatus - 1]} disabled={true} floatingLabelText="Estado civil"/><br/>
              <TextField style={styleInput} value={racas[this.state.paciente.racial - 1]} disabled={true} floatingLabelText="Raça"/><br/>
              <TextField style={styleInput} value={this.state.paciente.qtChildren} disabled={true} floatingLabelText="Filhos"/><br/>
              <TextField style={styleInput} value={this.state.paciente.smokeFrequency > 0 ? 'Sim' : 'Não'} disabled={true} floatingLabelText="Fuma"/><br/>
              <TextField style={styleInput} value={this.state.paciente.smokeFrequency} disabled={true} floatingLabelText="Frequência(fuma)"/><br/>
              <TextField style={styleInput} value={this.state.paciente.drinkFrequency > 0 ? 'Sim' : 'Não'} disabled={true} floatingLabelText="Bebe"/><br/>
              <TextField style={styleInput} value={this.state.paciente.drinkFrequency} disabled={true} floatingLabelText="Frequência(bebe)"/><br/>
              <TextField style={styleInput} value={this.state.paciente.pound} disabled={true} floatingLabelText="Peso"/><br/>
              <TextField style={styleInput} value={`${this.state.paciente.height}m`} disabled={true} floatingLabelText="Altura"/><br/>
              <TextField style={styleInput} value={this.state.paciente.diabetes ? 'Sim' : 'Não'} disabled={true} floatingLabelText="Diabetes"/><br/>
              <TextField style={styleInput} value={this.state.paciente.hypertension ? 'Sim' : 'Não'} disabled={true} floatingLabelText="Hipertensão"/><br/>
              <List style={styleInput}>
                <Subheader>Alergias</Subheader>
                {this.mapAlergias()}
              </List>
              <List style={styleInput}>
                <Subheader>Medicamentos</Subheader>
                {this.mapMedicamentos()}
              </List>
              <TextField style={styleInput} value={this.state.paciente.lastScouting} disabled={true} floatingLabelText="Última aferição"/><br/>
              <TextField style={styleInput} value={this.state.paciente.susCardId} disabled={true} floatingLabelText="Cartão SUS"/><br/>
              <TextField style={styleInput} value={this.state.paciente.rg} disabled={true} floatingLabelText="RG"/><br/>
              <TextField style={styleInput} value={this.state.paciente.mothersName} disabled={true} floatingLabelText="Nome da mãe"/><br/>
              <TextField style={styleInput} value={this.state.paciente.isPregnant ? 'Sim' : 'Não'} disabled={true} floatingLabelText="Grávida"/><br/>
                <List style={styleInput}>
                  <Subheader>Doenças</Subheader>
                  {this.MapDoencas()}
                </List>
              <TextField style={styleInput} value={this.state.paciente.familyHistory} multiLine={true} disabled={true} floatingLabelText="Histórico familiar"/><br/>
              <TextField style={styleInput} value={this.state.paciente.attendenceHistory} multiLine={true} disabled={true} floatingLabelText="Histórico de atendimentos"/><br/>
              <TextField style={styleInput} value={this.state.paciente.procedureHistory} multiLine={true} disabled={true} floatingLabelText="Histórico de procedimentos"/><br/>
              <TextField style={styleInput} value={this.state.paciente.extraInfos} multiLine={true} disabled={true} floatingLabelText="Informações adicionais"/><br/>
            </form>
          </CardText>
        </Card>
      </div>
    )
  }
}

import React from 'react';
import AddOption from './AddOption'
import Header from './Header'
import Action from './Action'
import Options from './Options'
import OptionModal from './OptionModal'

export default class IndecisionApp extends React.Component {
  state = {
    options: [],
    selectedOption: undefined
  };

  handleDeleteOptions = () => {
    this.setState(() => ({ options: [] }));
  };

  handleDeleteOption = (optionToRemove) => {
    this.setState( (prevState) => ({
      options: prevState.options.filter(option => optionToRemove !== option)
    }))
  };

  handlePick = () => {
    const random_item = (items => items[Math.floor(Math.random()*items.length)]);
    const option = random_item(this.state.options);
    console.log(option);
    this.setState(() => ({ selectedOption: option }))
    // alert(random_item(this.state.options));
  };

  handleClearSelectedOption = () => {
    this.setState(() => ({ selectedOption: undefined }))
  }

  handleAddOption = (option) => {

    if(!option) {
      return 'enter valid value to add item'
    } else if (this.state.options.indexOf(option) > -1) {
      return 'This option already exists'
    }
    this.setState(prevState => ({ options: prevState.options.concat(option) }));

  };

  componentDidMount() {
    try {
      const json = localStorage.getItem('options');
      const options =JSON.parse(json);

      if (options) {
        this.setState(() => ({ options }))
      };
    } catch (e) {}

  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem('options', json);
    }
  };

  componentWillUnmount() {
    console.log('componentWillUnmount!')
  };

  render() {
    const title = "Indecision App";
    const subtitle = 'Hello Louisa Hall'
    const options = ['Thing one', 'Thing two', 'Thing four']
    return (
      <div>
      <Header subtitle={subtitle}/>
      <div  className="container">
      <Action
      hasOptions = {this.state.options.length > 0}
      handlePick = {this.handlePick}
      />
      <Options
      options={this.state.options}
      handleDeleteOptions={this.handleDeleteOptions}
      handleDeleteOption={this.handleDeleteOption}
      />
      <AddOption
      handleAddOption = {this.handleAddOption}
      />
      <OptionModal selectedOption = {this.state.selectedOption} handleClearSelectedOption={this.handleClearSelectedOption} />
      </div>
      </div>
      )
  };
};

Header.defaultProps = {
  title: 'Indecision'
};




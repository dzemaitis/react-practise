import React, {Component} from 'react';
import './Converter.scss';

class Converter extends Component{
    constructor(props){
        super(props);
        this.state = {
            ammount: '',
            currency: '',
            currencies: {},
            rates: {},
            result: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event){
        this.setState({
            [event.target.name]: event.target.value,
        });

    }
    handleSubmit(e) {
        e.preventDefault();
        this.setState({
            result: this.state.ammount * this.state.rates[this.state.currency]
        });
    }

    componentDidMount() {
        fetch("https://currencyapi.net/api/v1/currencies?key=cb6e307ea60d78c2e4f0a503c9f7de80c812")
            .then(response => response.json())
            .then(result => this.setState({
                currencies: result.currencies
            }));
        fetch("https://currencyapi.net/api/v1/rates?key=cb6e307ea60d78c2e4f0a503c9f7de80c812")
            .then(response => response.json())
            .then (result => this.setState({
                rates: result.rates
            }))
    }

    render(){

        let curr = Object.keys(this.state.currencies).map((key) =>
            <option key={key} value={key}>{this.state.currencies[key]}</option>
        );
        return(
            <div className="converter">
                <h2>USD currency converter</h2>
                <form onSubmit={this.handleSubmit}>
                    <input name="ammount" type="text" value={this.state.ammount} onChange={this.handleChange}/>
                    <select name="currency" value={this.state.currency} onChange={this.handleChange}>
                        {curr}
                    </select>
                    <input type="submit" value="Convert"/>
                </form>
                <div className="result">
                    <p>{this.state.result}</p>
                </div>
            </div>
        )
    }
}

export default Converter;
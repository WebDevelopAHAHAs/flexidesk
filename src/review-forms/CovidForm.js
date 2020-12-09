import { Component } from 'react'

export default class CovidForm extends Component{
    constructor(props) {
        super(props)
        this.state = { value: 'Yes', value2: 'No'}

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event) {
        this.setState({value: event.target.value})
        this.setState({value2: event.target.value2})
    }
    handleSubmit(event) {

    }
}

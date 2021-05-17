import React from "react";

class AddViolationModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            badboy: 'Alan Wake',
            duration_number: 1,
            punishment_type: 'Тип наказания',
            duration_type: 'минут',
            broken_rule: '',
            punishment_hint: 'тут будет подсказка'
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleRuleChange = this.handleRuleChange.bind(this);
    }

    // toggleModal = () => {
    //     this.setState({isModalShowing: !this.state.isModalShowing})
    // }
    brokenRulePunishment() {
        this.props.rules.map(rule => {
            if (rule.paragraph === this.state.broken_rule) this.setState({punishment_hint: rule.punishment })
        })
    }

    handleChange(event) {
        // debugger
        this.setState({[event.target.name]: event.target.value});
    }

    handleRuleChange = (event) => {
        // debugger
        this.setState({[event.target.name]: event.target.value});
        this.brokenRulePunishment()
    }



    render() {

        const rulesList = this.props.rules.map((rule) =>
                <option key={rule.id} value={rule.paragraph}>{rule.paragraph+". "+rule.description}</option>
        )


        const punishmentTypes = [
            'Мут',
            'Тюрьма',
            'Бан'
        ].map((item, index) =>
            <option key={index} value={item}>{item}</option>
        )


        const timeTypes = [
            'минут',
            'часов',
            'дней',
            'недель',
            'месяцев',
            'лет'
        ].map((item, index) =>
            <option key={index} value={item}>{item}</option>
        )


        const saveViolation = () => {
            const payload = {
                badboy: this.state.badboy,
                duration_number: this.state.duration_number,
                duration_type: this.state.duration_type,
                punishment_type: this.state.punishment_type,
                broken_rule: this.state.broken_rule,
            };
            axios.post('/violations', payload, { withCredentials: true }).then(
                response => console.log(response.data)
            )
        }


        return(
            <div className="flex items-center justify-center fixed left-0 bottom-0 w-full h-full bg-gray-800 opacity-90">
                <div className="bg-white rounded-lg w-1/2">
                    <div className="flex flex-col items-start p-4">
                        <div className="flex items-center w-full">
                            <div className="text-gray-900 font-medium text-lg">Новое нарушение</div>
                            <svg className="ml-auto fill-current text-gray-700 w-6 h-6 cursor-pointer"
                                 xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18">
                                <path onClick={this.props.toggleModal}
                                    d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"/>
                            </svg>
                        </div>
                        <hr />
                        <input name="badboy"
                               type="text"
                               placeholder="Введите ник нарушителя"
                               className="m-1"
                               value={ this.state.badboy }
                               onChange={ this.handleChange }
                        />

                        <select name="broken_rule"
                                className="m-1"
                                value={this.state.broken_rule}
                                onChange={this.handleRuleChange}>
                            <option disabled>Нарушенный пункт правил</option>
                            { rulesList }
                        </select>

                        <div>{this.state.punishment_hint}</div>

                        <select name="punishment_type"
                                className="m-1"
                                value={ this.state.punishment_type }
                                onChange={ this.handleChange }>
                            <option disabled defaultValue="Тип наказания">Тип наказания</option>
                            { punishmentTypes }
                        </select>



                        <input name="duration_number"
                               type="text"
                               placeholder="Продолжительность"
                               className="m-1"
                               value={ this.state.duration_number }
                               onChange={ this.handleChange }
                        />
                        <select name="duration_type"
                                className="m-1"
                                value={this.state.duration_type}
                                onChange={ this.handleChange }
                        >
                            { timeTypes }
                        </select>

                            <hr />
                                <div className="ml-auto">
                                    <button
                                        onClick={() => saveViolation()}
                                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                        Сохранить
                                    </button>
                                    <button
                                        onClick={this.props.toggleModal}
                                        className="ml-2 bg-transparent hover:bg-gray-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                                        Закрыть
                                    </button>
                                </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AddViolationModal;

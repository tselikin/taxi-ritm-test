import React from "react";

class AddViolationModal extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         isModalShowing: false,
    //     };
    // }

    // toggleModal = () => {
    //     this.setState({isModalShowing: !this.state.isModalShowing})
    // }



    render() {

        const rulesList = this.props.rules.map((rule) =>
                <option key={rule.id} value={rule.paragraph}>{rule.paragraph}</option>
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
            const payload = { name: 'John Doe', occupation: 'gardener' };
            axios.post('/api/violations', payload).then(
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
                        />
                        <select name="broken_rule" className="m-1">
                            { rulesList }
                        </select>
                        <select name="punishment_type" className="m-1">
                            { punishmentTypes }
                        </select>

                        <input name="duration_number"
                               type="text"
                               placeholder="Продолжительность"
                               className="m-1"
                        />
                        <select name="duration_type" className="m-1">
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

import { Component } from 'react';
import Validate from '../validate-form/validate-form';

// import './employers-add-form.css';
import './employers-add-form.scss';

class EmployersAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            salary: '', 
            message: ''
        }
    }
    onValueChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    static onLog = () => {
      console.log('Hey');
    }

    onSubmit = (e) =>{
        e.preventDefault();
        if(this.state.name.length >= 3 && this.state.salary !== ''){
            this.props.onAddItem(this.state);
            this.setState({
                name: '',
                salary: '', 
                message: ''
            })
        }else{
            this.setState({
                message: 'Данные введенные вами не прошли валидацию. Введите мин. 3 символа в строку имени и заработную плату'
            })
        }
        
    }
    render() {
        const {name, salary, message} = this.state;
        
        return (
            <div className="app-add-form">
                <h3>Добавьте нового сотрудника</h3>
                <form onSubmit={this.onSubmit}
                    className="add-form d-flex">
                    <input
                        onChange={this.onValueChange}
                        name="name"
                        value={name} 
                        type="text"
                        className="form-control new-post-label"
                        placeholder="Как его зовут?" />
                    <input
                        onChange={this.onValueChange}
                        name="salary"
                        value={salary} 
                        type="number"
                        className="form-control new-post-label"
                        placeholder="З/П в $?" />
    
                    <button type="submit"
                            className="btn btn-outline-light">Добавить</button>
                </form>
                <Validate message={message}/>
            </div>
        )
    }
}

export default EmployersAddForm;
import './employees-list-item.css';
import { Component } from 'react';


class EmployeesListItem extends Component {

    onSalaryInput = (e) => {
        e.target.value = e.target.value.replace(/\D/, '');
        this.props.onSalaryInput(e.target.value);
    }

    render () {
   
        const {name, salary, increase, rise, onDelete, onToggleProp} = this.props;

        let classNames = "list-group-item d-flex justify-content-between";

        if (increase) {
            classNames += ' increase';
        }
    
        if (rise) {
            classNames += ' like';
        }

        return (
            <li className={classNames}>
                <span onClick={onToggleProp} data-toggle="rise" className="list-group-item-label">{name}</span>
                <input type="text" onChange={this.onSalaryInput} className="list-group-item-input" defaultValue={salary}/>
                <div  className='d-flex justify-content-center align-items-center'>
                    <button onClick={onToggleProp} data-toggle="increase" type="button"
                        className="btn-cookie btn-sm ">
                        <i className="fas fa-cookie"></i>
                    </button>
    
                    <button type="button"
                            className="btn-trash btn-sm"
                            onClick={onDelete}>
                        <i className="fas fa-trash"></i>
                    </button>
                    <i className="fas fa-star"></i>
                </div>
            </li>
        )
}
}

export default EmployeesListItem;
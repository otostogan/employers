import './employees-list-item.css';

const EmployeesListItem = (props) => {
    let {name, salary, onDelete, onToggleProp, increase, rise} = props;

    let listClass = 'list-group-item d-flex justify-content-between';

    if(increase){
        listClass += ' increase'
    }
    if(rise){
        listClass += ' like'
    } 

    return (
        <li  className={listClass}>
            <span 
                onClick={onToggleProp}
                className="list-group-item-label"
                data-toggle="rise"
            >
                    {name}
            </span>
            <input type="text" className="list-group-item-input" defaultValue={salary + '$'}/>
            <div className='d-flex justify-content-center align-items-center'>
                <button 
                    onClick={onToggleProp}
                    data-toggle="increase" 
                    type="button"
                    className="btn-cookie btn-sm"
                >
                    <i className="fas fa-cookie"></i>
                </button>

                <button onClick={onDelete}
                        type="button"
                        className="btn-trash btn-sm ">
                    <i className="fas fa-trash"></i>
                </button>
                <i className="fas fa-star"></i>
            </div>
        </li>
    )
}

export default EmployeesListItem;
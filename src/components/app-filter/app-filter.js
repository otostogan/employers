import './app-filter.css';

const AppFilter = ({filter, onUpdateFilter}) =>{

    const buttonsData = [
        {name: 'all', label: 'Все сотрудни'},
        {name: 'rise', label: 'На повышение'},
        {name: 'pay', label: 'З/П больше 1000$'},
    ];

    

    const buttons = buttonsData.map(({name, label}) => {
        const active = filter === name;
        let clazz = active ? 'btn-light' : 'btn-outline-light';
        return (
            <button 
                onClick={()=> onUpdateFilter(name)}
                className={`btn ${clazz}`}
                data-filter={name}
                key={name}
                type="button">
                   {label}
            </button>
        )
    })

    return (
        <div className="btn-group">
            {buttons}
        </div>
    )
};

export default AppFilter;
import { Component } from 'react';
import nextId from "react-id-generator";

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployersList from '../employers-list/employers-list';
import EmployersAddForm from '../employers-add-form/employers-add-form';

import './app.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [        
                {name: 'Саша', salary: 800, rise: false, increase: false, id: nextId()},
                {name: 'Ваня', salary: 3000, rise: false, increase: false, id: nextId()},
                {name: 'Вадим', salary: 1000, rise: false, increase: false, id: nextId()},
            ],
            term: '',
            filter: 'all'
        }
    }
    deleteItem = (id) => {
        this.setState(({data}) => {
            // const index = data.findIndex(elem => elem.id === id);
            // const before  = data.slice(0, index);
            // const after = data.slice(index + 1, index.length);
            // const newArr = [...before, ...after];

            const newArr = data.filter(elem => elem.id !== id)
            
            return {
                data: newArr
            }
        })
    }
    addItem = (data) => {
        const newItem = {
            name: data.name, 
            salary: data.salary,
            rise: false,
            increase: false,
            id: nextId()
        }
        this.setState(({data}) => {
            const newArr = [...data, newItem]
            
            return {
                data: newArr
            }
        })
    }
    onToggleProp = (id, prop) =>{
        this.setState(({data}) => ({
            data: data.map(item => {
                if(item.id === id){
                    return{...item,  [prop]: !item[prop]}
                }
                return item;
            })
        }))
    }
    onUpdateSearch = (term) =>{
        this.setState({term})
    }
    searchEmp = (items, term) =>{
        if(term.length === 0){
            return items;
        }

        return items.filter(item => {
            return item.name.indexOf(term) > -1;
        })
    }
    filterPost = (items, filter) =>{
        switch(filter){
            case 'rise':
                return items.filter(item => item.rise);
            case 'pay':
                return items.filter(item => item.salary >= 1000);
            default:
                return items
        }
    }
    onUpdateFilter = (filter) =>{
        this.setState({filter})
    }
    // onToggleIncrease = (id) =>{
    //     // this.setState(({data}) => {
    //     //     const index = data.findIndex(elem => elem.id === id);

    //     //     const old = data[index];
    //     //     const newItem = {...old, increase: !old.increase};
    //     //     const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)]

    //     //     return {
    //     //         data: newArr
    //     //     }
    //     // })
        
        // this.setState(({data}) => ({
        //     data: data.map(item => {
        //         if(item.id === id){
        //             return{...item,  increase: !item.increase}
        //         }
        //         return item;
        //     })
        // }))
    // }
    // onToggleRise = (id) =>{
    //     this.setState(({data}) => ({
    //         data: data.map(item => {
    //             if(item.id === id){
    //                 return{...item,  rise: !item.rise}
    //             }
    //             return item;
    //         })
    //     }))
    // }

    render() {
        const {data, term, filter} = this.state;

        const employers = data.length;
        const increased = data.filter(item => item.increase).length;

        const visibleData = this.filterPost(this.searchEmp(data, term), filter);
        return (
            <div className="app">
                <AppInfo data={{employers, increased}}/>
    
                <div className="search-panel">
                    <SearchPanel onUpdateSearch={this.onUpdateSearch}/>
                    <AppFilter filter={filter} onUpdateFilter={this.onUpdateFilter}/>
                </div>
                <EmployersList 
                    onDelete={this.deleteItem}
                    data={visibleData}
                    onToggleProp={this.onToggleProp}
                    />
                <EmployersAddForm
                    onAddItem={this.addItem}
                    />
            </div>
        )
    }
} 

export default App;
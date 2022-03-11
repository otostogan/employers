import './app-info.css';

const AppInfo = ({data}) =>{

    return (
        <div className="app-info">
            <h1>Учет сотрудников "Михаил"</h1>
            <h2>Общее число сотрудников: {data.employers}</h2>
            <h2>Премию получат: {data.increased}</h2>
        </div>
    )
}

export default AppInfo;
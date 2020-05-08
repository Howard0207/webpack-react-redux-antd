import { Select } from 'antd';
import { CSSTransition } from 'react-transition-group';
import '_less/components/header-factory-select.less';

const { Option } = Select;
const provinceData = ['Zhejiang', 'Jiangsu'];
const cityData = {
    Zhejiang: ['Hangzhou', 'Ningbo', 'Wenzhou'],
    Jiangsu: ['Nanjing', 'Suzhou', 'Zhenjiang'],
};

class FactorySelect extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cities: cityData[provinceData[0]],
            secondCity: cityData[provinceData[0]][0],
            items: ['jack', 'lucy'],
            show: false,
        };
    }

    onSecondCityChange = (value) => {
        this.setState({
            secondCity: value,
        });
    };

    showOptions = () => {
        const { show } = this.state;
        this.setState({ show: !show });
    };

    dropdownContent = () => {
        const { cities, secondCity } = this.state;
        return (
            <div onClick={(e) => e.preventDefault()}>
                <Select defaultValue={provinceData[0]} style={{ width: 140 }} onChange={this.handleProvinceChange}>
                    {provinceData.map((province) => (
                        <Option key={province}>{province}</Option>
                    ))}
                </Select>
                <Select style={{ width: 140 }} value={secondCity} onChange={this.onSecondCityChange}>
                    {cities.map((city) => (
                        <Option key={city}>{city}</Option>
                    ))}
                </Select>
            </div>
        );
    };

    render() {
        const { items, show } = this.state;
        return (
            <div className="factory-select">
                <div className="factory-select--actived" onClick={this.showOptions}>
                    <p>
                        <strong>选择工厂</strong>
                        <b
                            className={
                                show
                                    ? 'factory-select__triangle factory-select__triangle--up'
                                    : 'factory-select__triangle factory-select__triangle--down'
                            }
                        ></b>
                    </p>
                    <p>
                        <small>选择后进入该工厂</small>
                    </p>
                </div>
                {show && <div className="factory-select__mask" onClick={this.showOptions}></div>}
                <CSSTransition in={show} timeout={300} classNames="factory-select__list" unmountOnExit>
                    <div className="factory-select__list">
                        {this.dropdownContent()}
                        {items.map((item) => (
                            <li key={item}>{item}</li>
                        ))}
                    </div>
                </CSSTransition>
            </div>
        );
    }
}
export default FactorySelect;

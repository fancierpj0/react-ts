import * as React from 'react';

interface Props {
    name:string
}
interface State {
    number:number
    ,amount:number
}
class Counter extends React.Component<Props,State> {
    state = { //这里能比interface多但不能少
        number: 0
        ,amount:1
    };

    handleClick = (event:any) => {
        this.setState({number:this.state.number+this.state.amount})
    };

    handleChange = (event:React.ChangeEvent<HTMLInputElement>) => {
        this.setState({amount:parseInt(event.target.value)})
    };

    render() {
        let {name} = this.props;
        let{number,amount} = this.state;
        let mystyle: React.CSSProperties = {
            color: 'red'
        };
        return (
            <div style={mystyle}>
                <p>{name}:{number}</p>
                <input type="text" value={amount} onChange={this.handleChange}/>
                <button onClick={this.handleClick}>+</button>
            </div>
        );
    }
}

export default Counter;

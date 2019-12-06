import React, {useState} from 'react';
import InputNumber from './inputNumber';
import confirm from "./confirm";
import './App.css';

function App(){
    const [value,setValue] = useState('aaa');

    return (
        <div>
            <InputNumber value={value} onChange={e=>{}}/>
            <InputNumber defaultValue={value} onChange={e=>{}}/>
        </div>
    )
}

class App1 extends React.Component{
    constructor() {
        super();
        this.state = {
            value: 'bbb'
        }
    }

    async componentDidMount(): void{
        let res = await confirm("确定删除吗")
        if(res) {
            console.log("是")
        } else {
            console.log("否")
        }
    }

    render() {
        return (
            <div>
                <InputNumber value={this.state.value} onChange={e=>{}}/>
                <InputNumber defaultValue={this.state.value} onChange={e=>{}}/>
            </div>
        )
    }
}

export default App1;

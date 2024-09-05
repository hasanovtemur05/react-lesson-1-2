import  { Component } from 'react'

export default class AddCounter extends Component {
    state = {
        count: 0,
        step: 0,
        counters: [0],
        active: false
    }    
    
    addCounter = () =>{
        const {counters} = this.state
        counters.push(0)
        this.setState({
            counters: counters
        })
    }

    incraseCount = (index) =>{
        const {counters} = this.state
        counters [index] += 1
        this.setState({
            counters: counters
        })
    }

    descarseCount = (index) =>{
        const {counters} = this.state
        counters [index] -= 1
        this.setState({
            counters: counters
        })
    }


    loginTask = () =>{
        console.log("salom");
        
    }

  render() {
    const {counters, active} = this.state
    return (
      <>
        <div className="container">
            <h1 className='text-center'>task-1</h1>
            <div className="row mt-3">
                <div className="col-md-6 offset-3">
                <button className='btn btn-success' onClick={this.addCounter}>Add Counter</button>
                {
                    counters.map((item, index)=>{
                        return <div key={index} className='d-flex my-2 gap-2'>
                            <button className='btn btn-success' onClick={()=>this.incraseCount(index)}>+</button>
                            <h2>{item}</h2>
                            <button className='btn btn-danger' onClick={()=>this.descarseCount(index)}>-</button>
                        </div>
                    })
                }
                </div>
            </div>

            <div className="row">
                <div className="col-md-6 offset-3 mt-5">
                    <div className="card">
                        <div className="card-header">
                            <h1 className='text-center'>task-2</h1>
                        </div>
                        <div className="card-body">
                        {
                            active ? <h1 className='text-center'>login</h1> : <h1 className='text-center'>Welcome</h1>
                        }
                        </div>
                        <div className="card-footer">
                        <button className='btn btn-success' onClick={()=> this.setState({active:!active})}>login</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </>
    )
  }
}

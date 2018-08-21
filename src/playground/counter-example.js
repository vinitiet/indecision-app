class Counter extends React.Component {

  constructor(props) {
    super(props);
    this.handleAddOne = this.handleAddOne.bind(this);
    this.handleMinusOne = this.handleMinusOne.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.state = {
      count: 0,
    };
  };

  componentDidMount() {
    const stringCount = localStorage.getItem('count');
    const count = parseInt(stringCount, 10)
    if (!isNaN(count)) {
    this.setState(() => ({count}))
    }
  };


  componentDidUpdate(prevProps, prevState) {
    if(prevState.count !== this.state.count) {
    localStorage.setItem('count',this.state.count);
    }
  }

  handleAddOne() {
    this.setState((prevState) => {
      return {
        count: prevState.count + 1
      }
    });
  };

  handleMinusOne() {
    this.setState((prevState) => {
      return {
        count: prevState.count -1,
      }
    })
  };

  handleReset() {
    this.setState(() => {
      return {
        count: 0,
      }
    })
  };

  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.handleAddOne}>+1</button>
        <button onClick={this.handleMinusOne}>-1</button>
        <button onClick={this.handleReset}>reset</button>
      </div>
    )
  }
}

Counter.defaultProps = {
  count: 0
};

ReactDOM.render(<Counter />, document.getElementById('app'))
// console.log("App.js is running!");

// const app = {
//   title: "Incredible Indecision App",
//   subtitle: "This is a life changing App",
//   options: ['One', 'Two']
// }

// //JSX - Javascript XML
// const template = (
//   <div>
//   <h1>{app.title}</h1>
//   {app.subtitle && <p>{app.subtitle}</p>}
//   <p>{app.options.length > 0 ? "Here are your options" : "There are no options"}</p>

//   <ol>
//   <li>This is item 1</li>
//   <li>This is item 2</li>
//   <li>This is item 3</li>
//   </ol>


//   </div>
//   );

// const user = {
//   name: "Vini Tiet",
//   age: 35,
//   location: "Berlin, Deutschland"
// };

// function getLocation(location) {
//   if (location) {
//     return <p>
//     Location: {location}
//     </p>
//   };
// }

// // const templateTwo = (
// //   <div>

// //   {template}
// //     <h1>{user.name ? user.name : 'Anonymous'}</h1>
// //     {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
// //     {getLocation(user.location)}
// //   </div>
// // );

// let count = 0;
// const someId = 'myidhere'
// const addOne = () => {
//   count++;
//   renderCounterApp();

// };

// const minusOne = () => {
//   count--;
//   renderCounterApp();

// };

// const reset = () => {
//   count = 0;
//   renderCounterApp();
// };

// const appRoot = document.getElementById("app");

// const renderCounterApp = () => {
//   const templateTwo = (
//     <div>
//     <h1>Count: {count}</h1>
//     <button onClick={addOne} className="btn btn-primary">+1</button>
//     <button onClick={minusOne} className="btn btn-success">-1</button>
//     <button onClick={reset} className="btn btn-danger">reset</button>
//     </div>

//     );
//   ReactDOM.render(templateTwo, appRoot);
// }

// renderCounterApp();

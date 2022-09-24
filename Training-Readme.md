#### ReactJs ####
# React Native comes as a base of ReactJS

ReactJS is a SPA library. Developed by Facebook. Used in Facebook,Instagram
It is a Component centric library
It uses ES6.0 as its core language. It is advanced version of Es2015
Es2015 (vanilla Javascript) upgraded to ES6.0

Biggest challenge of JS is it is browser incompatible
So Es6.0 uses BabelJS to become browser compatible

Webpack is a building tool that packages HTML,CSS,JS and image files into a single bundle.

In Visual Studio Code
Click on Extensions and install the below plugins
"Prettier" --> it is a code formatter
"Material Icon Theme" -->
"Auto Rename" --> for quick editing

# Setup
In Terminal
mkdir react-training
cd react-training
//Check the version of node by "node -v", ex v16.16.0
npm i -g create-react-app // it is an official React provided tool to get ready made project structures
create-react-app lowes-react
cd lowes-react
npm start
//create-react-app is an official tool to construct the object for you
//open "lowes-react" in Visual Studio and then open "localhost:3000" in browser

# Class based component and Function based conponent
Props: If parent wants to share its data to the child, it does through props.
props are read only.
'./' --> current directory
'../' --> is previous directory, similar to 'cd ..'
In parent class <Child value="Good morning">
import React, { Component } from 'react';
import Action from './Action';
import AddUser from './AddUser';
import Footer from './Footer';
import Header from './Header';
import Users from './Users';
export default class MainApp extends Component{
    render(){
        return(
        <div>
             <Header hdata='Welcome to default Header'/>
            Welcome to MainApp
            <Action/>
            <AddUser/>
            <Users/>
            <Footer fdata='Welcome to default Footer'/>
        </div>
        )
    }
}
In Child class, inside <div>, it will be accessed by {this.props.value}
import React, { Component } from "react";
export default class Header extends Component{
    render(){
        return(
            <div>
                {this.props.hdata}
            </div>
        )
    }
}

Class name must starts with initial capital letter.
Variable with camelCase.
# To define a array variable use "const arr = ['d1','d2','d3']" passed as udata
To iterate array use map function like "this.props.udata.map((data)=> <Child key={data} ndata={data}/>)"
GrandParent
import React, { Component } from 'react';
import Action from './Action';
import AddUser from './AddUser';
import Footer from './Footer';
import Header from './Header';
import Users from './Users';
export default class MainApp extends Component{
    render(){
        const udatas = ['Admin','Manager','QA']
        return(
        <div>
             <Header hdata='Welcome to default Header'/>
            Welcome to MainApp
            <Action/>
            <AddUser/>
            <Users udatas={udatas}/>
            <Footer fdata='Welcome to default Footer'/>
        </div>
        )
    }
}
Parent
import React, {Component} from 'react';
import User from './User';
export default class Users extends Component{
    render(){
        return(
            <div>
                Welcome to Users
                {this.props.udatas.map((data) => <User key={data} udata={data}/>)}
            </div>
        )
    }
}
Child
import React, {Component} from 'react';
export default class User extends Component{
    render(){
        return(
            <div>
                {this.props.udata}
            </div>
        )
    }
}

# Calling a function
Always declare a function outside the render() function and within the class directory
We call like this without the round brackets '{this.addUser}'
Constant(const) should be declared within the render() function
export default class AddUser extends Component {
  addUser = () => { //this arrow depicts automatically assigned to class component
    alert("button is clicked");
  };
  or
  addUser() {
    alert("button clicked");
  }
  render() {
    return (
      <div>
        <button onClick={this.addUser}>add</button>
      </div>
    );
  }
}

# Taking value from user and submitting via a form
If we wrap the above <button> in a form, then the page will refresh on each button click which is not expected in a SPA
return (
      <div>
        <form onSubmit={this.addUser}>
        <button>add</button>
        </form>
      </div>
    );
So we used e.preventDefault()
const addUser = (e) => {
e.preventDefault(); // will not refresh the page on submit
const data = e.target.elements.uname.value;
props.add(data);
};
return (
<div>
<form onSubmit={addUser}>
UserName:
<input type="text" name="uname" />
<button>add</button>
</form>
</div>
);

# State is similar to object. State can be changed and are not read-only
3 steps of state management
1. Initialize the state
state = { // this has to be "state", it is predefined
  counter: 0,
};
2. Render the State
<p>Counter is: {this.state.counter}</p>
3. Update the State // arrow function is used to make its scope associated with the Counter class or the class by default
increment = () => {
this.setState((prevState) => { // this has to be "setState", it is predefined
    return {
      counter: prevState.counter + 1,
    };
  });
};

# Entire Code for Counter
export default class Counter extends Component {
  state = {
    counter: 0,
  };
  increment = () => {
    this.setState((prevState) => {
      return {
        counter: prevState.counter + 1,
      };
    });
  };
  decrement = () => {
    this.setState((prevState) => {
      return {
        counter: prevState.counter - 1,
      };
    });
  };
  reset = () => {
    this.setState((prevState) => {
      return {
        counter: (prevState.counter = 0),
      };
    });
  };
  render() {
    return (
      <div>
        <p>The counter is {this.state.counter}</p>
        <button onClick={this.increment}>increment</button>
        <button onClick={this.decrement}>decrement</button>
        <button onClick={this.reset}>reset</button>
      </div>
    );
  }
}

# Passing State to the child
export default class MainApp extends Component {
  state = {
    udatas: ["Admin", "Manager", "QA"],
    hdata: "Welcome to default Header",
  };
  render() {
    return (
      <div>
        <Header hdata={this.state.hdata} />
        <Users udatas={this.state.udatas} />
      </div>
    );
  }
}

# Enabling/Disabling button based on a boolean flag
In Parent class
state = {
userdata: ['Admin','Manager','QA'],
headerData: 'Welcome to header'
}
<Header hdata={this.state.headerData}/> // call to child
<Action datalen={this.state.userdata.length > 0}/> // call to child
In Child class
const Action = (props) => { //function based component
  return (
    <div>
      <p>
        <button disabled={!props.datalen}>Show</button>
      </p>
    </div>
  );
};

# Delete All User and Add User dynamically and also centralized state management with delete and add internally
In MainApp.js
export default class MainApp extends Component {
  state = {
    udatas: ["Admin", "Manager", "QA"],
    hdata: "Welcome to default Header",
  };
  deleteAllUsers = () => {
    this.setState(() => {
      return {
        udatas: [],
      };
    });
  };
  addUserToState = (data) => {
    this.setState((prevState) => {
      return {
        udatas: prevState.udatas.concat(data),
      };
    });
  };
  render() {
    return (
      <div>
        <AddUser adUsrToState={this.addUserToState}/>
        <Users udatas={this.state.udatas} delAlUsrs={this.deleteAllUsers} />
      </div>
    );
  }
}
In Users.js
export default class Users extends Component{
    render(){
        return(
            <div>
                {this.props.udatas.map((data) => <User key= {data} udata={data}/>)}
                <button onClick={this.props.delAlUsrs}>DeleteAll</button>
            </div>
        )
    }
}
In AddUser.js
  addUser = (e) => {
    e.preventDefault();
    const name = e.target.elements.uname.value;
    this.props.adUsrToState(name);
  };
  render() {
    return (
      <div>
        <form onSubmit={this.addUser}>
          UserName: <input type="text" name="uname" />
          <button>add</button>
        </form>
      </div>
    );
  }
}

# React comes with lifecycle features
Lifecycle means every component gets loaded and every component gets destroyed
Lifecycle features only happens where state management is there
componentDidMount(): It is called when the component is loaded into the system, but React.StrictMode shoude be disabled/deleted in index.js. React.StrictMode double checks so not recommended in production
componentDidUpdate(): called when the component is updated or state changes like add or delete
  componentDidMount() {
    console.log("called once during load first time");
  }
  componentDidUpdate() {
    console.log("called everytime when the state changes");
  }

# LocalStorage(only for browser) concepts in Realtime projects
componentDidMount() {
  const json = localStorage.getItem("users");
  const userdata = JSON.parse(json);
  if (userdata) {
  this.setState(() => ({ userdata }));//inline statement
  }
}
componentDidUpdate() {
  const json = JSON.stringify(this.state.userdata);
  localStorage.setItem("users", json);
}

# Types of Components
Presentational Component --> only display the state and dont manipulate the state. "this" is not allowed. They dont have lifesysle or state. They are called presentational component. Header and Footer are example
State + Lifecycle Oriented Component --> like class based component. MainApp is an example

# Axios --> It is used to make Rest API call to backend using React
Run in terminal "npm i axios" // it will be installed in node modules by default
import axios from "axios";
const API_URL = "https://jsonplaceholder.typicode.com/users";
function AxiosDemo() {
  const [users, setUsers] = useState([]); // hooks in react
  useEffect(() => {
    const url = API_URL;
    axios
    .get(url) //200
    .then((res) => res.data)
    .then((data) => {
      setUsers(data);
      console.log(data);
      localStorage.setItem('json', JSON.stringify(data))
      });
      }, []);
"useState" gives alternative to state management

# Bootstrap.com
It is a very popular tool for responsive web design web UI
version= 3.4.1
Add the below under public folder --> index.html --> inside <Head> section add the below
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@3.4.1/dist/css/bootstrap.min.css"
    integrity="sha384-HSMxcRTRxnN+Bdg0JdbxYKrThecOKuH5zCYotlSAcp1+c8xmyTe9GYg1l9a69psu"
    crossorigin="anonymous">

<div className="container"> //align the code on the right side of the page
<div className="col-xs-8"> // 8 columns layout

# To delete a particular user which is added by clicking on the button beside the user
In MainApp.js
deleteUser = (data) => {
  this.setState((prevState) => ({
    userdata: prevState.userdata.filter((input) => data !== input)
    }))
}
<Users
          udata={this.state.userdata}
          da={this.deleteAllUSers}
          dlen={this.state.userdata.length > 0}
dd={this.deleteUser}
/>
In Users.js // as User.js is not a direct child of MainApp.js
{props.udata.map((data) => (
  <User key={data} ndata={data}
        ddata={props.dd}/>
))}
In User.js
{props.ndata}
  <button
  onClick={(e) => {
    props.ddata(props.ndata);
    }} >
    delete
</button>

# Hooks are non class based but we get both the features of Presentational(stateless, function based) Component and State + Lifecycle Oriented Component. It is available from React version v16.8
3 types of Hooks
1. useState
2. useEffect
3. useContext
Steps required to initialize the state
1.  Initialize the state(state={})
2.  Render the state(this.state......)
3.  Update the state(this.setState())
    function Hookdemo1() {
        const [count, setCount] = useState(1)
        const incrememnt = () => {
            setCount(count +1)
        }
        const decrement = () => {
            setCount(count - 1)
        }
        useEffect(() =>{ // useEffect is a lifecycle method, here it represents componentDidMount and a direct function
            console.log('called once');
        },[])
        useEffect(() =>{ // useEffect is a lifecycle method, here it represents componentDidUpdate and a direct function
            console.log('called only on update');
        },[count])
        return(
            <div>
                <p>The count is {count}</p>
                <button onClick={incrememnt}>Increment</button>
                <button onClick={decrement}>Decrement</button>
            </div>
        )

    }
    export default Hookdemo1;

# Another Hook Example
function NoteApp() {
  const [users, setUsers] = useState([]);
  const [fname, setFname] = useState("");
  const [email, setEmail] = useState("");
  const addUser = (e) => {
    e.preventDefault();
    setUsers([...users, { fname, email }]); //"...users" will fetch all the previous data and the next parameter will add new value to the state user
    setEmail("");
    setFname("");
  };
  const deleteUser = (fname) => {
    setUsers(users.filter((uname) => uname.fname !== fname));
  };
  //componentDidMount
  useEffect(() => {
    // useEffect is a lifecycle method, here it represents componentDidMount
    const userdata = JSON.parse(localStorage.getItem("users"));
    if (userdata) {
      setUsers(userdata);
    }
  }, []);
  //componentDidUpdate
  useEffect(() => {
    // useEffect is a lifecycle method, here it represents componentDidUpdate
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);
  return (
    <div>
      {users.map((user) => (
        <div>
          <h4>{user.fname}</h4>
          <h4>{user.email}</h4>
          <button onClick={(e) => deleteUser(user.fname)}>X</button>
        </div>
      ))}
      <form onSubmit={addUser}>
        User:
        <input
          type="text"
          name="uname"
          value={fname}
          onChange={(e) => setFname(e.target.value)} // onChange will get executed on any change in state
        />
        Email:
        <input
          type="text"
          name="uname"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button>Add</button>
      </form>
    </div>
  );
}
export default NoteApp;

# Backend API call with Hooks and in-built tool like "fetch"
import { useEffect, useState } from "react";
const RestApp = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users") // "fetch" is an in-built tool like axios to make backend API call
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  return (
    <div>
      {data && // "&&" will do a null check and if not null execute the next statement
        data.map((item) => {
          return <p key={item.name}>{item.name}</p>;
        })}
    </div>
  );
};
export default RestApp;

# useContext
Suppose we have a parent-child relationship like this A-->B-->C
Then a data which A need to pass to C, should go through B which is not needed
Now if D comes, like A-->B-->C-->D, the passing will become more complicated
"useContext" is a method to pass data from parent to grandchild(between components without the middle man) and further without the need of in-between child
import { createContext, useContext } from "react";
const AppContext = createContext();
const [employee, setEmployee] = [
  { id: 1, uname: "a", email: "aa.com", salary: 100 },
];
function AppMain() {
  return (
    <div>
      <p>This is AppMain</p>
      <AppContext.Provider value={employee}>
        <Employee />
      </AppContext.Provider>
    </div>
  );
}
function Employee() {
  const emp = useContext(AppContext);
  return (
    <div>
      <p>This is Employee</p>
      <p>{emp.id}</p>
      <p>{emp.uname}</p>
      <Salary />
    </div>
  );
}
function Salary() {
  const sal = useContext(AppContext);
  return (
    <div>
      <p>This is Salary</p>
      <p>{sal.salary}</p>
    </div>
  );
}
export default AppMain;


#### React Native ####

# Two types of mobile app development
1. Native: platform specific code like Android or iOS
2. Hybrid: no specific platform specific code needed
   For mobile development we need to take care of underlying Hardware as well like GPS, Camera, charging, vibration, battery
   Hybrid development helps us use the underlying Hardware
   The main difference: Native apps are built for a specific operating system – either iOS or Android. Hybrid apps, however, are built to work across any operating system and share the same codebase.
   The advantage of hybrid apps is that they are typically easier and faster to develop than native apps. They also require less maintenance. However, the speed of your hybrid app will depend entirely on the speed of the user's browser. Ultimately this means hybrid apps will almost never perform as fast as a native app.
   For Angular development--> need a tool called Ionic
   For C# development--> need a tool called Xamrin
   For React development--> need a tool called React Native
   Web apps are responsive websites that do not need device installation through an app store. Instead, they are accessed through browsers either from the desktop or from mobile phones.
   Native apps are developed specifically for one platform. Hence they are fast and deliver superior performance. They can be downloaded from various app stores and are not accessible through browsers. Therefore, code reusability is minimum in the case of Native apps.
   Techniques for both web and native apps are adopted to develop Hybrid apps. Such applications can be downloaded to a mobile device and can also be accessed using browsers. However, they are not as well-performing as native apps but work better than responsive websites.

# Expo is an open-source platform for making universal native apps for Android, iOS, and the web with JavaScript and React. Make any app and run it anywhere using Expo.
Here we develop in laptop and run our app in mobile.
Emulators and simulators are programs that create virtual mobile devices on a computer. Modern developers use them to test their mobile apps in 'near-native' environments during development.
The Android Emulator simulates Android devices on your computer so that you can test your application on a variety of devices and Android API levels without needing to have each physical device. The emulator provides almost all of the capabilities of a real Android device.
Simulator for Andriod --> Android Studio
Simulator for iOS --> Xcode
The good thing about expo is that you don't need to install and configure the simulators to run the app. It still gives you the option to run expo on the simulator, but you have to install and configure the simulator by yourself.
Install Expo app in your phone.
But with VPN connection it causes problem so run the below for Expo web after #Setup step
npm install @react-navigation/native
npx expo install react-native-web@~0.18.7 react-dom@18.0.0 @expo/webpack-config@^0.17.0
install "react-dom": "^18.2.0" as well
npm start and press w

# Setup
Open Terminal
mkdir lowes-native
cd lowes-native
Inside lowes-native --> npm i -g expo-cli
Inside lowes-native, type "expo init my-pro", then choose "blank" template
cd my-pro
Inside my-pro, type "npm start"
Scan the code in your mobile Expo app
package.json will be having all the dependencies for the app

# Open package.json and understand the concepts
It has all the nnecessary dependencies to run in the environment
{
  "name": "my-pro",
  "version": "1.0.0",
  "main": "node_modules/expo/AppEntry.js",
  "scripts": {
    "start": "expo start",
    "android": "expo start --android",
    "ios": "expo start --ios",
    "web": "expo start --web"
  },
  "dependencies": {
    "expo": "~46.0.9",
    "expo-status-bar": "~1.4.0",
    "react": "18.0.0",
    "react-native": "0.69.5"
  },
  "devDependencies": {
    "@babel/core": "^7.12.9"
  },
  "private": true
}

# We cannot use HTML tags like <h1>,<p>,<div> in React Native
Wrong: <div>welcome</div>
Wrong: <div><Text>Welcome</Text></div>
Wrong: <Text><div>Welcome</div></Text>
Right: <Text>Welcome</Text>

# Core components in React Native
View
Text
Button
TextInput
Image

# Tags in diferrent platform
<-- Web Browser -->
<div>
<input>
<-- Android -->
android.View
EditText
<-- IOS -->
UIView
UiTextField
<-- React Native -->
View
TextInput

# First React native program
In App.js
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Welcome from './components/Welcome';
export default function App() {
  return (
    <View style={styles.container}> // called as container styling
      <Text>Sri Krishna</Text>
      <StatusBar style="auto" />
      <Welcome/>
    </View>
  );
}
const styles = StyleSheet.create({ // default styling in react-native
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
In Welcome.js
import { Button, Text, View } from "react-native";
export default function Welcome(){
    return(
        <View>
            <Text>Welcome</Text>
            <Button title="tap-me"/>
        </View>
    )
}

# Importing diferrent components(function and class)
If "export default function NestedView(){"
then import as "import NestedView from './components/NestedView';"
If "export class PassToggle extends Component{"
then import as "import { PassToggle } from './components/PassToggle';"

# NestedView.js
import { StyleSheet, Text, View } from "react-native";
export default function NestedView() {
  return (
    <View style={styles.container}>
      <View style={{ backgroundColor: "blue", flex: 0.3 }} />{/* inline style */}
      <View style={{ backgroundColor: "red", flex: 0.5 }} />
      <Text style={styles.textdemo}>Nested View Demo</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1, //how much space it will take in the row, 1 means entire row
    flexDirection: "row",
    height: 100,
    width: "80%",
    backgroundColor: "pink",
  },
  textdemo: {
    fontSize: 18,
  },
});

# Passing props in React Native
NestedView.js
import { StyleSheet, Text, View } from "react-native";
import Welcome from "./Welcome";
export default function NestedView() {
  return (
    <View style={styles.container}>
      <View style={{ backgroundColor: "blue", flex: 0.3 }} />
      <View style={{ backgroundColor: "red", flex: 0.5 }} />
      <Text style={styles.textdemo}>Nested View Demo</Text>
      <View style={{ alignItems: "center" }}>
        <Welcome name="Admin" />
        <Welcome name="Manager" />
      </View>
    </View>
  );
}
Welcome.js
import { Button, Text, View } from "react-native";
export default function Welcome(props) {
  return (
    <View>
      <Text>Welcome {props.name}</Text>
    </View>
  );
}

# Handling the toggle buttons
import { Component } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
export default class PassToggle extends Component {
  state = {
    password: "",
    isPassVisible: true,
    toggleText: "Show",
  };
  handleHide = () => {
    const ipv = this.state.isPassVisible;
    if (ipv) {
      this.setState({ isPassVisible: false });
      this.setState({ toggleText: "Hide" });
    } else {
      this.setState({ isPassVisible: true });
      this.setState({ toggleText: "Show" });
    }
  };
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          secureTextEntry={this.state.isPassVisible}
          style={styles.textStyle}
        />
        <TouchableOpacity onPress={this.handleHide}>
          <Text style={{ fontSize: 20 }}>{this.state.toggleText}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  textStyle: {
    width: 400,
    height: 50,
    backgroundColor: "lightblue",
    color: "white",
    fontSize: 20,
  },
});

# JSX expressions must have one parent element. The below code is wrong
  return (
    <View style={styles.container}>
      <Button onPress={alertMe} title="click it" />
    </View>
    <View style={styles.container}>
      <Button onPress={alertMe} title="click it" />
  </View>
  );
  but this is right
  return (
    <View>
      <View style={styles.container}>
        <Button onPress={alertMe} title="click it" />
      </View>
      <View style={styles.container}>
        <Button onPress={alertMe} title="click it" />
      </View>
    </View>
  );

# Button demo and disabling the button
import { Alert, Button, StyleSheet, View } from "react-native";
export default function ButtonDemo() {
  const alertMe = () => {
    //Alert.alert("") works only on app and not on browser. alert("") works both on browser and app
    Alert.alert("button clicked");
  };
  return (
    <View style={styles.container}>
      <Button style={styles.btnContainer} onPress={alertMe} title="click it" />
      <View style={styles.container}>
        <Button
          style={styles.btnContainer}
          onPress={alertMe}
          title="click it"
          color="pink"
        />
      </View>
      <View style={styles.container}>
        <Button
          style={styles.btnContainer}
          onPress={alertMe}
          title="click it"
          color="blue"
          disabled={true}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  btnContainer: {
    margin: 20,
  },
});

# Open a URL with Linking.openURL
<a href="URL link"></a> --> will open the URL in browser
Linking.openURL --> it is running in an expo shell which is acting as an app simulator, so it is designed to open in app only always
import { Alert, Button, Linking, StyleSheet, View } from "react-native";
export default function ButtonDemo() {
  const alertMe = () => {
    //Alert.alert("") works only on app and not on browser. alert("") works both on browser and app
    Alert.alert("button clicked");
  };
  return (
    <View style={styles.container}>
      <Button style={styles.btnContainer} onPress={alertMe} title="click it" />

      <View style={styles.container}>
        <Button
          style={styles.btnContainer}
          onPress={() =>
            Linking.openURL("https://www.youtube.com/watch?v=D4qAQYlgZQs")
          }
          title="open youtube"
          color="pink"
        />
      </View>
      <View style={styles.container}>
        <Button
          style={styles.btnContainer}
          onPress={alertMe}
          title="click it"
          color="blue"
          disabled={true}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  btnContainer: {
    margin: 20,
  },
});

# Properties of flexbox
flexbox is an algorithm to specify the layout component of the children. It is an important property of css and it is designed for alignment purpose. The propertie of flebox are:
flexDrection: column, row
justifyContent: center, flex-start, flex-end, space-around, space-between
alignItems: stretch, center and other areas
flexDirection: "column", is column by default

In Layout.js
import { StyleSheet, View } from "react-native";
export default function Layout() {
  return (
    <View style={styles.container}>
      <View style={styles.con1} />
      <View style={styles.con2} />
      <View style={styles.con3} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "stretch", // means even if for any container like con3 we comment width, it will still stretch to match green
  },
  con1: {
    height: 60,
    width: 60,
    backgroundColor: "blue",
  },
  con2: {
    height: 60,
    width: 60,
    backgroundColor: "green",
  },
  con3: {
    height: 60,
    // width: 60,
    backgroundColor: "pink",
  },
});

In Alignment.js
import { Component } from "react";
import { Alert, Button, StyleSheet, TextInput, View } from "react-native";
export default class Alignment extends Component {
  state = {
    initVal: "",
    data: [],
  };
  inputHandler = (val) => {
    this.setState({
      initVal: val,
    });
  };
  btnHandler = () => {
    Alert.alert("button clicked");
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.innerData}>
          <TextInput
            placeholder="enter name"
            onChangeText={this.inputHandler}
            style={styles.textStyle}
          />
          <Button
            title="Add User"
            onPress={this.btnHandler}
            style={styles.btnStyle}
          />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 26,
    backgroundColor: "#fff",
    justifyContent: "flex-start",
  },
  innerData: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  textStyle: {
    width: "70%",
    backgroundColor: "gray",
  },
  btnStyle: {
    width: "30%",
  },
});



# Srcolling using ScrollView for scrolling horizontal and vertical
ScrollView is by default vertical
showsVerticalScrollIndicator={false} will allow scrolling but the scrollbar indicator will not be there
We can make sure app is not overflooded with data by using the let screenWidth = Dimensions.get("window").width;
Dimensions will tell about screen rotations
import { Component } from "react";
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
export default class ScrollDemo extends Component {
  state = {
    names: [
      { uname: "admin", email: "admin@gmail.com" },
      { uname: "admin1", email: "admin@gmail.com" },
      { uname: "admin2", email: "admin@gmail.com" },
      { uname: "admin3", email: "admin@gmail.com" },
      { uname: "admin4", email: "admin@gmail.com" },
      { uname: "admin5", email: "admin@gmail.com" },
      { uname: "admin6", email: "admin@gmail.com" },
      { uname: "admin7", email: "admin@gmail.com" },
      { uname: "admin8", email: "admin@gmail.com" },
      { uname: "admin9", email: "admin@gmail.com" },
      { uname: "admin10", email: "admin@gmail.com" },
      { uname: "admin11", email: "admin@gmail.com" },
    ],
  };
  render() {
    let sw = Dimensions.get("window").width;
    return (
      <View>
        <ScrollView showsVerticalScrollIndicator={false} horizontal={false}>
          <Image
            source={require("../images/nature.jpg")}
            style={[styles.image, { width: sw }]}
          />
          <Image
            source={require("../images/nature2.jpg")}
            style={[styles.image, { width: sw }]}
          />
          <Text style={styles.welcome}>Nature Image</Text>
        </ScrollView>
        {/* <ScrollView showsVerticalScrollIndicator={false}>
          {this.state.names.map((data) => (
            <View key={data.uname} style={styles.container}>
              <Text>{data.uname}</Text>
            </View>
          ))}
        </ScrollView> */}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  //   container: {
  //     flex: 1,
  //     padding: 30,
  //     margin: 2,
  //     borderColor: "red",
  //     borderWidth: 1,
  //     flexDirection: "row",
  //     backgroundColor: "#fff",
  //     alignItems: "center",
  //     justifyContent: "space-between",
  //   },
  container: {
    marginTop: 50,
    paddingVertical: 20,
    backgroundColor: "white",
  },
  welcome: {
    flex: 1,
    margin: 20,
    backgroundColor: "red",
    textAlign: "center",
    fontSize: 20,
    paddingTop: 70,
  },
});

# FlatList
ListView is a componenet to display the list ot items in a vertical scrollbar list but it is  deprecated
FlatList is same as ListView and is used now
Components of FlatList
data: it represents the source of data. It is like a plain array
renderItem: it is used for renderng and iterating the data. Takes an item from data and renders it into the list.
import { Component } from "react";Component
import { FlatList, StyleSheet, Text, View } from "react-native";
export default class FlatListDemo extends  {
  renderData = () => {
    return (
      <View
        style={{ height: 1, width: "100%", backgroundColor: "lightpink" }}
      ></View>
    );
  };
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={[
            { uname: "Admin" },
            { uname: "Manager" },
            { uname: "QA" },
            { uname: "CA" },
            { uname: "Tester" },
          ]}
          renderItem={({ item }) => (
            <Text style={styles.item}>{item.uname}</Text>
          )}
          itemSepratorComponent={this.renderData}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});

# FlatList from DB
"json-server" is used for backend api call like a db server
Setup Steps
npm i json-server --force
sudo npm install -g json-server
Create a folder named "data" and copy the "db.json" inside it
To launch the "db.json" use the below command
json-server --watch data/db.json --port 5200
or
npx json-server --watch data/db.json --port 5200

In FetchData.js
const URI = "http://localhost:5200";
export default {
  async fetchUsers() {
    try {
      let response = await fetch(URI + "/users"); // fetch() easily communicate with backend data
      let resp = await response.json();
      return resp;
    } catch (e) {
      console.log(e);
    }
  },
};
If localhost doesnot work in mobile, use the below URL for FetchData.js
const URI = "https://jsonplaceholder.typicode.com";
https://jsonplaceholder.typicode.com/ --> JSONPlaceholder is an online REST service that you can use whenever you need some fake data. Run this code in a console or from anywhere that CORS and JSONP is supported.

In ListViewDemoDB.js
import { Component } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import ajaxdata from "../shared/FetchData";
export default class FlatListDBDemo extends Component {
  state = {
    users: [],
  };
  async componentDidMount() {
    const users = await ajaxdata.fetchUsers();
    this.setState({ users });
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.h2text}>User Details</Text>
        <FlatList
          data={this.state.users}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <View style={styles.flatView}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.email}>{item.email}</Text>
            </View>
          )}
          keyExtractor={(item) => item.email}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50,
  },
  h2text: {
    marginTop: 50,
    fontSize: 40,
    fontWeight: "bold",
  },
  flatView: {
    justifyContent: "center",
    borderRadius: 2,
    paddingTop: 30,
  },
  name: {
    fontFamily: "Verdana",
    fontSize: 18,
  },
  email: {
    color: "blue",
  },
});

# SectionList is similar to flatlist with sections
Like "city" have many sections(Bangalore, Pune, Hyderabad) and each section have many users, so a sectionList is needed.
import { Component } from "react";
import { SectionList, StyleSheet, Text, View } from "react-native";
export default class SectionListDemo extends Component {
  getData = (item) => {
    alert(item);
  };
  render() {
    return (
      <View style={styles.container}>
        <SectionList
          sections={[
            { title: "pune", data: ["admin", "manager", "qa"] }, // "data" is the default property, any other field like "data1", "data2" will not work
            { title: "bangaore", data: ["a1", "m1", "qa1"] },
            { title: "kolkata", data: ["a2", "m2", "qa2"] },
            { title: "trivandrum", data: ["a3", "m3", "qa3"] },
          ]}
          renderItem={({ item }) => (
            <Text style={styles.item} onPress={this.getData.bind(this, item)}>
              {item} //{item} will only take default "data" field
            </Text>
          )}
          renderSectionHeader={({ section }) => (
            <Text style={styles.sectionHeader}>{section.title}</Text>
          )}
          keyExtractor={(item, index) => index}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  sectionHeader: {
    padding: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 23,
    fontWeight: "bold",
    backgroundColor: "lightpink",
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});

# SetcionList with data from DB
For <Icon name="ios-eye" type="ionicon"> to work we need to install "npm i react-native-elements"
import { Component } from "react";
import { SectionList, StyleSheet, Text, View } from "react-native";
import { Icon } from "react-native-elements";
export default class SectionListDemoData extends Component {
  state = {
    data: [
      {
        title: "Operating System",
        data: [
          "Processes & Threads",
          "Memory Management",
          "CPU Scheduling",
          "Process Synchronization",
          "Deadlock",
        ],
      },
      {
        title: "Computer Network",
        data: [
          "Data Link Layer",
          "Network Layer",
          "Transport Layer",
          "Application Layer",
          "Network Security",
        ],
      },
      {
        title: "DBMS",
        data: [
          "Entity Relationship Model",
          "Normalisation",
          "Transaction and Concurrency Control",
          "Indexing, B and B+ trees",
          "File Organization",
        ],
      },
    ],
  };
  render() {
    return (
      <View style={styles.container}>
        <SectionList
          sections={this.state.data}
          keyExtractor={(item, index) => item + index}
          renderItem={({ item }) => (
            <View style={styles.row}>
              <Text style={styles.rowText}>{item}</Text>
              <Icon name="ios-eye" type="ionicon" color="red" />
            </View>
          )}
          renderSectionHeader={({ section: { title } }) => (
            <Text style={styles.header}>{title}</Text>
          )}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    marginTop: 18,
  },
  screen: {
    marginTop: 18,
  },
  header: {
    padding: 2,
    marginTop: 10,
    backgroundColor: "lightblue",
    textAlign: "center",
  },
  row: {
    marginHorizontal: 15,
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 2,
  },
  rowText: {
    fontSize: 18,
  },
});


# Modal : The React Native Modal is a type of View component which is used to present the content above an enclosing view. There are three different types of options (slide, fade and none) available in a modal that decides how the modal will show inside the react native app. It is a builtin component.
In ModalDemo.js
import { View, StyleSheet, Button } from "react-native";
import { Component } from "react";
import myimage from "../images/nature2.jpg";
import DisplayModal from "./DisplayModal";
export default class ModalDemo extends Component {
  state = {
    display: false,
  };
  loadModal = () => {
    this.setState((prevState) => {
      return {
        display: true,
      };
    });
  };
  render() {
    return (
      <View style={styles.container}>
        <Button
          onPress={() => this.loadModal()}
          title="modal-demo"
          color="red"
        ></Button>
        <DisplayModal
          image={myimage}
          data="profile"
          display={this.state.display}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    paddingVertical: 20,
    backgroundColor: "white",
  },
});

In DisplayModal.js
import { View, StyleSheet, Text, Image, Modal, Alert } from "react-native";
export default function DisplayModal(props) {
  return (
    <Modal
      visible={props.display}
      animationType="slide"
      onRequestClose={() => Alert.alert("closed")}
    >
      <View style={styles.container}>
        <Image source={props.image} style={styles.image} />
        <Text style={styles.text}>{props.data}</Text>
      </View>
    </Modal>
  );
}
const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    paddingVertical: 20,
    backgroundColor: "white",
  },
  image: {
    marginTop: 20,
    marginLeft: 90,
    height: 200,
    width: 200,
  },
  text: {
    fontSize: 20,
    marginLeft: 150,
  },
});

# Touchable component provides us with the capacity to capture the tapping functionality
Components of Touchable:
TouchableHighlight
TouchableNativeFeedback
TouchableOpacity
In TouchableDemo.js
import {
  View,
  StyleSheet,
  Alert,
  TouchableHighlight,
  Text,
  TouchableOpacity,
} from "react-native";
import { Component } from "react";
export default class TouchableDemo extends Component {
  onPressButn() {
    Alert.alert("you tapped it");
  }
  onLongPressButn() {
    Alert.alert("you long pressed tapped it");
  }
  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight onPress={this.onPressButn} underlayColor="red">
          <View style={styles.button}>
            <Text>TouchableHighlight</Text>
          </View>
        </TouchableHighlight>

        <TouchableOpacity onPress={this.onPressButn} underlayColor="red">
          <View style={styles.button}>
            <Text>TouchableOpacity</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onLongPress={this.onLongPressButn}
          underlayColor="red"
        >
          <View style={styles.button}>
            <Text>TouchableOpacity</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    paddingVertical: 20,
    backgroundColor: "white",
  },
  button: {
    marginBottom: 30,
    width: 260,
    alignItems: "center",
    backgroundColor: "green",
  },
});

# ActivityIndicator and Picker
ActivityIndicator is like circle going and  going round till timeout or infinite time
Picker is similar to dropdown in HTML
In Terminal type, "npm install @react-native-picker/picker"
React Native ActivityIndicator is a component for displaying loading action. It is the same as the circular loader/Progress Bar. It is used to show the progress of long-running task so that the user can understand something is in progress.
React Native Picker is component which is used to select an item from the multiple choices. This is the same as a Dropdown option. Picker is used when we need to provide an alternative to choose from multiple options. It is used by importing the Picker component from the react-native library.
In ActivityIndicatorDemo.js
import { View, StyleSheet, Text, ActivityIndicator } from "react-native";
import { Component } from "react";
import { Picker } from "@react-native-picker/picker";
export default class ActivityIndicatorDemo extends Component {
  state = {
    animating: true,
    choosenIndex:0
  };
  closeActivity = () =>
    setTimeout(() => {
      this.setState({ animating: false });
    }, 6000);
  componentDidMount = () => this.closeActivity();
  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator animating={this.state.animating} size="large" color="red" />
        <ActivityIndicator size="small" color="blue" />
        <ActivityIndicator size="large" color="green" />
        <Picker style={styles.textStyle}
        selectedValue={this.state.language}
        onValueChange={(itemValue,itemPosition) =>
        this.setState({language:itemValue,choosenIndex:itemPosition})>
            <Picker.item label="english" value="english"/>
            <Picker.item label="french" value="french"/>
            <Picker.item label="chinese" value="chinese"/>
            <Text>{"index " +this.state.choosenIndex}</Text>
        </Picker>       
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    paddingVertical: 20,
    backgroundColor: "white",
  },
  textStyle: {
    margin: 24,
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
  },
  pickerStyle: {
    height: 150,
    width: "80%",
    color: "green",
  },
});

# Now we will create a mini project called ToDoApp
In the same "my-pro" app, create another directory named "todoapp" parallel to "components"
Inside "todoapp" create a file called MainApp.js
import { useState } from "react";
import { Button, FlatList, ScrollView, StyleSheet, Text } from "react-native";
import { TextInput, View } from "react-native";
export default function MainApp() {
  const [enteredText, setEnteredText] = useState("");
  const [myGoals, setMyGoals] = useState([]);
  function taskInputHandler(eT) {
    setEnteredText(eT);
  }
  function addTaskHandler() {
    setMyGoals((currentGoals) => [
      ...currentGoals,
      { text: enteredText, key: Math.random().toString() },
    ]);
  }
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Your Goal of the day"
          onChangeText={taskInputHandler}
        />
        <Button title="Add Task" onPress={addTaskHandler} />
      </View>
      {/* <ScrollView alwaysBounceVertical={false} style={styles.taskContainer}>
        {myGoals.map((goal) => (
          <View style={styles.taskItem}>
            <Text style={styles.taskText} key={goal}>
              {goal}
            </Text>
          </View>
        ))}
      </ScrollView> */}
      {/* FlatList is used for lazy loading. Load fresh data(like Meta notifications), only when we drag down it fetches new data.
      It improves performance */}
      <FlatList
        data={myGoals}
        renderItem={(itemdata) => {
          return (
            <View style={styles.taskItem}>
              <Text style={styles.taskText}>{itemdata.item.text}</Text> //item is the default property of flatlist
            </View>
          );
        }}
        alwaysBounceVertical={false} //mostly it bounces in ios
      ></FlatList>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 50,
    paddingHorizontal: 16,
  },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "green",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "darkpink",
    width: "70%",
    marginRight: 8,
    padding: 8,
  },
  taskContainer: {
    flex: 5,
  },
  taskItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: "purple",
  },
  taskText: {
    color: "white",
  },
});

Now we will split the MainApp.js into components as the class id becoming very large
In TaskItem.js
import React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
export default function TaskItem(props) {
return (
<Pressable onPress={props.od.bind(this, props.id)}>
<View style={styles.taskItem}>
<Text style={styles.taskText}>{props.text}</Text>
</View>
</Pressable>
);
}
const styles = StyleSheet.create({
taskItem: {
margin: 8,
padding: 8,
borderRadius: 6,
backgroundColor: "purple",
},
taskText: {
color: "white",
},
});
In TaskInput.js
import React, { useState } from "react";
import {
StyleSheet,
View,
TextInput,
Button,
Modal,
Image,
} from "react-native";
export default function TaskInput(props) {
const [enteredText, setEnteredText] = useState("");

function taskInputHandler(eT) {
setEnteredText(eT);
}
function addTaskHandler() {
props.onAddTask(enteredText);
setEnteredText("");
}
return (
<Modal visible={props.visible} animationType="fade">
<View style={styles.inputContainer}>
<Image style={styles.image} source={require("../images/goal.png")} />
<TextInput
          style={styles.textInput}
          placeholder="Your Goal of the day"
          onChangeText={taskInputHandler}
          value={enteredText}
        />
<View style={styles.buttonContainer}>
<View style={styles.button}>
<Button title="Add Task" onPress={addTaskHandler} />
</View>
<View style={styles.button}>
<Button title="Cancel" onPress={props.onCancel} color="#f31282" />
</View>
</View>
</View>
</Modal>
);
}
const styles = StyleSheet.create({
inputContainer: {
flex: 1,
justifyContent: "center",
alignItems: "center",
padding: 16,
backgroundColor: "purple",
},
image: {
width: 100,
height: 100,
margin: 20,
},
textInput: {
borderWidth: 1,
borderColor: "#e4d0ff",
backgroundColor: "#e4d0ff",
color: "#120438",
width: "70%",
borderRadius: 6,
marginRight: 8,
padding: 8,
},
buttonContainer: {
marginTop: 16,
flexDirection: "row",
},
button: {
width: 100,
marginHorizontal: 8,
},
});

# We will develop a navigation based app called Meals App(meals-app)
Setup
cd ..
expo init meals-app

Create "data","screens", "components" and "models" directory as given
Create Category.js and Meal.js inside "models" directory
Create CategoryGridTitle.js in "components" directory
Create CategoryScreen.js in "screens" directory
numColumns in FlatList is used to define the number of colums to display data

In Meal.js
class Meal {
  constructor(
    id,
    categoryIds,
    title,
    affordability,
    complexity,
    imageUrl,
    duration,
    ingredients,
    steps,
    isGlutenFree,
    isVegan,
    isVegetarian,
    isLactoseFree
  ) {
    this.id = id;
    this.categoryIds = categoryIds;
    this.title = title;
    this.imageUrl = imageUrl;
    this.ingredients = ingredients;
    this.steps = steps;
    this.duration = duration;
    this.complexity = complexity;
    this.affordability = affordability;
    this.isGlutenFree = isGlutenFree;
    this.isVegan = isVegan;
    this.isVegetarian = isVegetarian;
    this.isLactoseFree = isLactoseFree;
  }
}
export default Meal;

In Category.js
class Category {
  constructor(id, title, color) {
    (this.id = id), (this.title = title), (this.color = color);
  }
}
export default Category;

Put dummy-data.js in data directory

In CategoryScreen.js
import { FlatList, View } from "react-native";
import CategoryGridTitle from "../components/CategoryGridTitle";
import { CATEGORIES } from "../data/dummy-data";
function renderCategoryItem(itemdata) {
    return (
    <CategoryGridTitle
    title={itemdata.item.title}
    color={itemdata.item.color}
    />
    )
  }
function CategoryScreen(props) {
  return (
    <View>
      <FlatList
        data={CATEGORIES}
        keyExtractor={(item) => item.id}
        renderItem={renderCategoryItem}
        numColumns={2}

      />
    </View>
  );
}
export default CategoryScreen;

In CategoryGridTitle.js
import { Pressable, StyleSheet, Text, View } from "react-native";
function CategoryGridTitle({ title, color }) {
  return (
    <View style={[styles.gridItem, { backgroundColor: color  }]}>
      <Pressable android_ripple={{ color: "#ccc" }} style={styles.button}>
        <View style={styles.innerContainer}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
}
export default CategoryGridTitle;
const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 16,
    height: 150,
    borderRadius: 4,
    elevation: 4,
    shadowColor: "red",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
  },
  button: {
    flex: 1,
  },
  innerContainer: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
  },
});

For navigation install the below dependencies
npm install @react-navigation/native
expo install react-native-screens react-native-safe-area-context
expo install @react-navigation/native-stack

# The top one will always be the welcome screen. Navigation gives use backbutton as well.
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="MealsCategories" component={CategoryScreen} />
          <Stack.Screen name="MealsOverview" component={MealsOverview} />
        </Stack.Navigator>
      </NavigationContainer>
To make a default welcome screen, use "initialRouteName" in "Stack.Navigator"
      <NavigationContainer>
        <Stack.Navigator initialRouteName="MealsCategories">
          <Stack.Screen name="MealsCategories" component={CategoryScreen} />
          <Stack.Screen name="MealsOverview" component={MealsOverview} />
        </Stack.Navigator>
      </NavigationContainer>

# Pass the data from one screen to another screen using Hooks navigation
import { Pressable, StyleSheet, Text, View } from "react-native";
import {useNavigation} from '@react-navigation/native'
function CategoryGridTitle({ title, color, onPress }) {
  const navigation= useNavigation();
  return (
...

import { FlatList, View } from "react-native";
import CategoryGridTitle from "../components/CategoryGridTitle";
import { CATEGORIES } from "../data/dummy-data";
function CategoryScreen({ navigation }) {
  function renderCategoryItem(itemdata) {
    function pressHandler() {
      navigation.navigate("MealsOverview", {
        categoryId: itemdata.item.id,
      });
    }
    return (
...

import { StyleSheet, Text, View } from "react-native";
import { MEALS } from "../data/dummy-data";
function MealsOverview({ route }) {
  const catId = route.params.categoryId;
  return (
    <View style={styles.container}>
      <Text>Meals OverView Screen - {catId}</Text>
    </View>
  );
}
export default MealsOverview;

# Get the MealIds from CategoryId of a particular category
In MealsOverview.js
import { FlatList, StyleSheet, Text, View } from "react-native";
import MealItem from "../components/MealItem";
import { MEALS } from "../data/dummy-data";
function MealsOverview({ route }) {
  const catId = route.params.categoryId;
  const displayMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
  });
  function renderMealItem(itemData) {
    return <MealItem title={itemData.item.title} />;
  }
  return (
    <View style={styles.container}>
      <FlatList
        data={displayMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
}
export default MealsOverview;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});

In MealItem.js
import { StyleSheet, Text, View } from "react-native";
function MealItem({ title }) {
  return (
    <View>
      <Text>{title}</Text>
    </View>
  );
}
export default MealItem;

# Display the image of each meal types
In MealsOverview.js
import { FlatList, StyleSheet, Text, View } from "react-native";
import MealItem from "../components/MealItem";
import { MEALS } from "../data/dummy-data";
function MealsOverview({ route }) {
  const catId = route.params.categoryId;
  const displayMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
  });
  function renderMealItem(itemData) {
    return <MealItem 
    title={itemData.item.title} 
    imageUrl={itemData.item.imageUrl}
    />;
  }
...

In MealItem.js
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
function MealItem({ title, imageUrl }) {
  return (
    <View>
      <Pressable>
        <Image source={{ uri: imageUrl }} style={styles.image} />
        <Text style={styles.title}>{title}</Text>
      </Pressable>
    </View>
  );
}
export default MealItem;
const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});

# Indivudual Design for a screen in App.js
export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator initialRouteName="MealsCategories">
          <Stack.Screen
            name="MealsCategories"
            component={CategoryScreen}
            options={{
              title: "All Categories",
              headerStyle: { backgroundColor: "#351401" },
              headerTintColor: "white",
            }}
          />
          <Stack.Screen name="MealsOverview" component={MealsOverview} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

# Global Design for all screens in App.js
export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="MealsCategories"
          screenOptions={{
            headerStyle: { backgroundColor: "#351401" },
            headerTintColor: "white",
          }}
        >
          <Stack.Screen
            name="MealsCategories"
            component={CategoryScreen}
            options={{
              title: "All Categories",
            }}
          />
          <Stack.Screen name="MealsOverview" component={MealsOverview} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

# Dynamic Navigations
export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="MealsCategories"
          screenOptions={{
            headerStyle: { backgroundColor: "#351401" },
            headerTintColor: "white",
          }}
        >
          <Stack.Screen
            name="MealsCategories"
            component={CategoryScreen}
            options={{
              title: "All Categories",
            }}
          />
          <Stack.Screen
            name="MealsOverview"
            component={MealsOverview}
            options={({ route, navigation }) => {
              const catId = route.params.categoryId;
              return {
                title: catId,
              };
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

or
Comment options in App.js in "<Stack.Screen name="MealsOverview"..." and add the below in MealsOverview.js
function MealsOverview({ route, navigation }) {
  const catId = route.params.categoryId;
  const displayMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
  });
  const categoryTitle = CATEGORIES.find(
    (category) => category.id === catId
  ).title;
  navigation.setOptions({
    title: categoryTitle,
  });
...

# We will use hooks here now for dynamic navigation
function MealsOverview({ route, navigation }) {
  const catId = route.params.categoryId;
  const displayMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
  });

  useEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === catId
    ).title;
    navigation.setOptions({
      title: categoryTitle,
    });
  }, [catId, navigation]);

# useLayoutEffect gets triggered synchronously after all dom has been manipulated
import { useLayoutEffect } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import MealItem from "../components/MealItem";
import { CATEGORIES, MEALS } from "../data/dummy-data";

function MealsOverview({ route, navigation }) {
  const catId = route.params.categoryId;
  const displayMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
  });

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === catId
    ).title;
    navigation.setOptions({
      title: categoryTitle,
    });
  }, [catId, navigation]);

# Navigate to MealDetailsScreen.js
In App.js
<Stack.Screen name="MealDetail" component={MealDetailsScreen} />
In MealItem.js
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
function MealItem({ title, imageUrl, duration, complexity, affordability }) {
  const navigation = useNavigation();
  function pressHandler() {
    navigation.navigate("MealDetail");
  }
  return (
    <View style={styles.mealItem}>
      <Pressable onPress={pressHandler}>
        <View>
...

# Add ingredients and steps in MealDetailsScreen.js
In MealsOverview.js
import { useLayoutEffect } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import MealItem from "../components/MealItem";
import { CATEGORIES, MEALS } from "../data/dummy-data";
function MealsOverview({ route, navigation }) {
  const catId = route.params.categoryId;
  const displayMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
  });
  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === catId
    ).title;
    navigation.setOptions({
      title: categoryTitle,
    });
  }, [catId, navigation]);
  function renderMealItem(itemData) {
    const item = itemData.item;
    const mealItemProps = {
      title: item.title,
      imageUrl: item.imageUrl,
      complexity: item.complexity,
      affordability: item.affordability,
      duration: item.duration,
      id: item.id,
    };
    return <MealItem {...mealItemProps} />;
  }
  return (
    <View style={styles.container}>
      <FlatList
        data={displayMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
}
export default MealsOverview;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});

In MealDetailsScreen.js
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import List from "../components/List";
import MealDetails from "../components/MealDetails";
import Subtitle from "../components/Subtitle";
import { MEALS } from "../data/dummy-data";
function MealDetailsScreen({ route }) {
  const mealId = route.params.mealId;
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);
  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
      <Text style={styles.title}>{selectedMeal.title}</Text>
      <MealDetails
        duration={selectedMeal.duration}
        complexity={selectedMeal.complexity}
        affordability={selectedMeal.affordability}
        textStyle={styles.detailText}
      />
      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <Subtitle>Ingredients</Subtitle>
          <List data={selectedMeal.ingredients} />

          <Subtitle>Steps</Subtitle>
          <List data={selectedMeal.steps} />
        </View>
      </View>
    </ScrollView>
  );
}
export default MealDetailsScreen;
const styles = StyleSheet.create({
  listOuterContainer: {
    alignItems: "center",
  },
  listContainer: {
    width: "80%",
  },
  container: {
    flex: 1,
    padding: 16,
  },
  image: {
    width: "100%",
    height: 350,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    margin: 8,
    textAlign: "center",
    color: "purple",
  },
  detailText: {
    color: "blue",
  },
});

In MealDetails.js
import { StyleSheet, Text, View } from "react-native";
function MealDetails({
  duration,
  complexity,
  affordability,
  style,
  textStyle,
}) {
  return (
    <View style={[styles.details, style]}>
      <Text style={[styles.detailItem, textStyle]}>{duration}m</Text>
      <Text style={[styles.detailItem, textStyle]}>
        {complexity.toUpperCase()}
      </Text>
      <Text style={[styles.detailItem, textStyle]}>
        {affordability.toUpperCase()}
      </Text>
    </View>
  );
}
export default MealDetails;
const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 200,
  },
  details: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
  },
  detailItem: {
    marginHorizontal: 4,
    fontSize: 12,
  },
});

In Subtitle.js
import { StyleSheet, Text, View } from "react-native";
function Subtitle({ children }) {
  return (
    <View style={styles.subtitleContainer}>
      <Text style={styles.subtitle}>{children}</Text>
    </View>
  );
}
export default Subtitle;
const styles = StyleSheet.create({
  subtitle: {
    color: "red",
    fontSize: 18,
    fontWeight: "bold",
    margin: 6,
    textAlign: "center",
  },
  subtitleContainer: {
    padding: 6,
    margin: 4,
    paddingHorizontal: 24,
    marginVertical: 4,
    borderBottomColor: "pink",
    borderBottomWidth: 2,
  },
});

In List.js
import { StyleSheet, Text, View } from "react-native";
function List({ data }) {
  return data.map((datapoint) => (
    <View key={datapoint} style={styles.listItem}>
      <Text style={styles.itemtext}>{datapoint}</Text>
    </View>
  ));
}
export default List;
const styles = StyleSheet.create({
  listItem: {
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginVertical: 4,
    marginHorizontal: 12,
    backgroundColor: "gray",
  },
  itemtext: {
    color: "purple",
    textAlign: "center",
  },
});

# Custom back button or star button
npm i @expo/vector-icons

In MealDetailsScreen.js
import { useLayoutEffect } from "react";
import {
  Button,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import IconButton from "../components/IconButton";
import List from "../components/List";
import MealDetails from "../components/MealDetails";
import Subtitle from "../components/Subtitle";
import { MEALS } from "../data/dummy-data";
function MealDetailsScreen({ route, navigation }) {
  const mealId = route.params.mealId;
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);
  function callme() {
    console.log("pressed");
  }
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return <IconButton onPress={callme} />;
      },
    });
  });
  return (
    <ScrollView style={styles.container}>
...

In IconButton.js
import { Pressable, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
function IconButton({ onPress }) {
  return (
    <Pressable onPress={onPress}>
      <Ionicons name="star" size={24} color="white" />
    </Pressable>
  );
}
export default IconButton;

# Types of navigation
Stack
Bottom tab
Drawer

# Drawer Navigation
npm i @react-navigation/drawer@6.3.1 --> for drawer navigator
npm i react-native-reanimated@1.13.4 react-native-gesture-handler@2.1.0 --> for navigator it is mandatory
npm i @expo/vector-icons --> for icons

In App.js
import { Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import UserScreen from "./screens/UserScreen";
import WelcomeScreen from "./screens/WelcomeScreen";
import { Ionicons } from "@expo/vector-icons";
const Drawer = createDrawerNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="User"
        screenOptions={{
          headerStyle: { backgroundColor: "purple" },
          headerTintColor: "white",
          drawerActiveBackgroundColor: "pink",
        }}
      >
        <Drawer.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{
            drawerLabel: "Welcome Screen",
            drawerIcon: ({ color, size }) => (
              <Ionicons name="home" color={color} size={size} />
            ),
          }}
        />
        <Drawer.Screen
          name="User"
          component={UserScreen}
          options={{
            drawerIcon: ({ color, size }) => (
              <Ionicons name="person" color={color} size={size} />
            ),
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

In UserScreen.js
import { View, Text, Button, StyleSheet } from "react-native";
function UserScreen({ navigation }) {
  function openDrawer() {
    navigation.toggleDrawer();
  }
  return (
    <View style={styles.rootContainer}>
      <Text>
        This is the <Text style={styles.highlight}>"User"</Text> screen!
      </Text>
      <Button title="Open Drawer" onPress={openDrawer} />
    </View>
  );
}
export default UserScreen;
const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  highlight: {
    fontWeight: "bold",
    color: "#eb1064",
  },
});

In WelcomeScreen.js
import { View, Text, StyleSheet } from "react-native";
function WelcomeScreen() {
  return (
    <View style={styles.rootContainer}>
      <Text>
        This is the <Text style={styles.highlight}>"Welcome"</Text> screen!
      </Text>
    </View>
  );
}
export default WelcomeScreen;
const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  highlight: {
    fontWeight: "bold",
    color: "#eb1064",
  },
});

# Bottom tab Navigation
npm install @react-navigation/bottom-tabs

In App.js
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import UserScreen from "./screens/UserScreen";
import WelcomeScreen from "./screens/WelcomeScreen";
import { Ionicons } from "@expo/vector-icons";
const BottomTab = createBottomTabNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <BottomTab.Navigator
        initialRouteName="User"
        screenOptions={{
          headerStyle: { backgroundColor: "purple" },
          headerTintColor: "white",
          tabBarActiveTintColor: "pink",
        }}
      >
        <BottomTab.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="home" color={color} size={size} />
            ),
          }}
        />
        <BottomTab.Screen
          name="User"
          component={UserScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="person" color={color} size={size} />
            ),
          }}
        />
      </BottomTab.Navigator>
    </NavigationContainer>
  );
}

# Now we implememt navigation in "meals-app" project
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import CategoryScreen from "./screens/CategoryScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MealsOverview from "./screens/MealsOverview";
import MealDetailsScreen from "./screens/MealDetailsScreen";
import { createDrawerNavigator } from "@react-navigation/drawer";
export default function App() {
  const Stack = createNativeStackNavigator();
  const Drawer = createDrawerNavigator();
  function DrawerNavigator(){ // nested navigation
    return (
    <Drawer.Navigator>
      <Drawer.Screen name="Categories" component={CategoryScreen}></Drawer.Screen>
    </Drawer.Navigator>
    )
  }
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="MealsCategories"
          screenOptions={{
            headerStyle: { backgroundColor: "#351401" },
            headerTintColor: "white",
          }}
        >
          <Stack.Screen
            name="Drawer"
            component={DrawerNavigator}
            options={{
              title: "All Categories",
            }}
          />
          <Stack.Screen name="MealsOverview" component={MealsOverview} />
          <Stack.Screen name="MealDetail" component={MealDetailsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

# Trip Manager
expo init app-name-directory
cd app-name-directory
npm start
npm install @react-navigation/native
expo install react-native-screens react-native-safe-area-context
expo install @react-navigation/native-stack
npm install react-redux
npm i @reduxjs/toolkit

# For laptop expo web
npx expo install react-native-web@~0.18.7 react-dom@18.0.0 @expo/webpack-config@^0.17.0
install "react-dom": "^18.2.0" as well
npm start and press w

# For any project without "node-modules" directory, type "npm i" to install the dependencies from "package.json"
Then type "npm start" to start the application

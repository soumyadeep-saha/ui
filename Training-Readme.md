#### ReactJs ####
# React Native comes as a base of ReactJS

ReactJS is a SPA library. Developed by Facebook. Used in Facebook,Instagram
It is a Component centric library
Its uses ES6.0 as its core language. It is advanced version of Es2015
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
Add the below under public folder --> index.html --> inside <Head> sectiona add the below
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


# Properties of flexbox
flexbox is an algorithm to specify the layout component of the children. It is an important property of css and it is designed for alignment purpose. The propertie of flebox are:
flexDrection: column, row
justifyContent: center, flex-start, flex-end, space-around, space-between
alignItems: center and other areas


export default class ButtonDemo extends Component {
state = {
initName: "",
data: [],
};
inputHandler = (val) => {
this.setState({
initName: val,
});
};
butnHandler = () => {
alert("clicked");
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
            onPress={this.butnHandler}
            style={styles.btnstyle}
          ></Button>
</View>
</View>
);
}
}
const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: "#fff",
padding: 26,

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
btnstyle: {
width: "30%",
},
});


Linking
It is basically equal to <a> and <href>. It is used to open an URL.
<Button
title="open youtube"
onPress={() => Linking.openURL("https://www.youtube.com/")}
style={styles.btnstyle}>
</Button>

Layout.js with flexDirection: "row" and flexDirection: "column"
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
// flexDirection: "row",
flexDirection: "column",
justifyContent: "center",
alignItems: "stretch",
},
con1: {
width: 60,
height: 60,
backgroundColor: "blue",
},
con2: {
width: 60,
height: 60,
backgroundColor: "green",
},
con3: {
// width: 60,
height: 60,
backgroundColor: "yellow",
},
});

ScrollDemo.js for scrolling horizontal and vertical
import {
View,
Text,
Button,
StyleSheet,
ScrollView,
Dimensions,
} from "react-native";
import { Component } from "react";
import { Image } from "react-native-elements";
export default class ScrollDemo extends Component {
state = {
userData: [
{ uname: "admin1", email: "admin@mail.com" },
{ uname: "admin2", email: "admin@mail.com" },
{ uname: "admin3", email: "admin@mail.com" },
{ uname: "admin4", email: "admin@mail.com" },
{ uname: "admin5", email: "admin@mail.com" },
{ uname: "admin6", email: "admin@mail.com" },
{ uname: "admin7", email: "admin@mail.com" },
{ uname: "admin8", email: "admin@mail.com" },
{ uname: "admin9", email: "admin@mail.com" },
{ uname: "admin10", email: "admin@mail.com" },
],
};
render() {
let sw = Dimensions.get("window").width;
return (
<View>
<ScrollView showsVerticalScrollIndicator={false} horizontal={true}>
<Image
source={require("../images/Krishna.jpeg")}
style={[styles.image, { width: sw }]} // inline style
/>
<Text style={styles.welcome}>Hare Krishna</Text>
</ScrollView>
<ScrollView
          horizontal={true}
          vertical={true}
          showsVerticalScrollIndicator={false}
        >
{this.state.userData.map((name, index) => (
<View key={name.uname} style={styles.container}>
<Text>{name.uname}</Text>
</View>
))}
</ScrollView>
</View>
);
}
}
const styles = StyleSheet.create({
// container: {
// flex: 1,
// padding: 30,
// margin: 2,
// borderColor: "red",
// borderWidth: 1,
// backgroundColor: "#fff",
// flexDirection: "row",
// alignItems: "center",
// justifyContent: "space-between",
// },
container: {
marginTop: 50,
paddingVertical: 20,
backgroundColor: "white",
},
welcome: {
flex: 1,
margin: 20,
backgroundColor: 20,
textAlign: "center",
fontSize: 20,
paddingTop: 70,
},
});

ListView and FlatList(helps in lazy loading of too many datas)
import { Component } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
export class ListViewDemo extends Component {
renderData = () => {
return (
<View
style={{ height: 1, width: "100%", backgroundColor: "lightpink" }} ></View>
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
// marginTop: "50",
},
item: {
padding: 10,
fontSize: 18,
height: 44,
},  
});

ListView and FlatList from DB
"json-server" is used for backend api call
npm i json-server --force
sudo npm install -g json-server
npx json-server --watch data/db.json --port 5200
json-server --watch data/db.json --port 5200
In FetchData.js
const URI = "http://localhost:5200";
export default {
async fetchUsers() {
try {
let response = await fetch(URI + '/users');
let resp = await response.json();
return resp;
} catch (e) {
console.log(e);
}
},
};
In ListViewDemoDB.js
import { Component, Vi } from "react";
import ajaxdata from "../shared/FetchData";
import { View, Text, StyleSheet, FlatList } from "react-native";
export default class ListViewDemoDB extends Component {
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
keyExtractor={(item) => item.email} // for uniqueness of id
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
marginTop: "50",
},
h2text: {
marginTop: 10,
fontSize: 40,
fontWeight: "bold",
},
flatView: {
justifyContent: "center",
paddingTop: 30,
borderRadius: 2,
},
name: {
fontFamily: "Verdana",
fontSize: 18,
},
email: {
color: "blue",
},
});

SectionListDemo.js
Similar to flatlist with sections.
Like "city" have many sections(Bangalore, Pune, Hyderabad) and each section have many users, so a sectionList is needed.
import { View, SectionList, StyleSheet, Text } from "react-native";
import { Component } from "react";
export default class SectionListDemo extends Component {
getData = (item) => {
alert(item);
};
render() {
return (
<View style={styles.container}>
<SectionList
sections={[
{ title: "pune", data: ["admin", "manager", "qa"] },
{ title: "mumbai", data: ["a", "b", "c"] },
{ title: "hyderabad", data: ["d", "e", "f"] },
]}
renderItem={({ item }) => ( // to iterate data we use "renderItem", it by default search for "data" attributes, it is the default property
<Text style={styles.item} onPress={this.getData.bind(this, item)}>
{item}
</Text>
)}
renderSectionHeader={({ section }) => (// to iterate data and place in header we use "renderSectionHeader"
<Text style={styles.sectionHeader}>{section.title}</Text>
)}
keyExtractor={(item, index) => index} // used to maintain the index
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

Another SetcionListDemoData.js with <Icon name="ios-eye" type="ionicon">
import { View, Text, StyleSheet, SectionList } from "react-native";
import { Icon } from "react-native-elements";
import { Component } from "react";
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
<Icon name="ios-eye" type="ionicon" color="blue" />
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
padding: 2,
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

ModalDemo
The React Native Modal is a type of View component which is used to present the content above an enclosing view. There are three different types of options (slide, fade and none) available in a modal that decides how the modal will show inside the react native app.
In ModalDemo.js
import { View, StyleSheet, Button, Alert } from "react-native";
import { Component } from "react";
import DisplayModal from "./DisplayModal";
import myimage from "../images/Krishna.jpeg";
export default class ModalDemo extends Component {
state = {
display: false,
};
loadModal() {
this.setState((prevState) => {
return {
display: true,
};
});
}
render() {
return (
<View style={styles.container}>
<Button
onPress={() => this.loadModal()}
title="modal demo"
color="red" ></Button>

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
import React from "react";
import { View, Text, StyleSheet, Image, Modal } from "react-native";
export default function DisplayModal(props) {
return (
<Modal
visible={props.display}
animationType="slide"
onResponderEnd={() => Alert.alert("closed")} >
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
image:{
marginTop: 20,
marginLeft:90,
height: 200,
width:200
},
text:{
fontSize:20,
marginLeft: 150
}
});

TouchableDemo.js
Touchable component provide us with the capacity to capture the tapping functionality
Components of Touchable:
TouchableHighlight
TouchableNativeFeedback
TouchableOpacity
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
<TouchableOpacity onLongPress={this.onPressButn} underlayColor="red">
<View style={styles.button}>
<Text>TouchableOpacityLongPress</Text>
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

ActivityIndicator.js
In Terminal type, "npm install @react-native-picker/picker"
React Native ActivityIndicator is a component for displaying loading action. It is the same as the circular loader/Progress Bar. It is used to show the progress of long-running task so that the user can understand something is in progress.
React Native Picker is component which is used to select an item from the multiple choices. This is the same as a Dropdown option. Picker is used when we need to provide an alternative to choose from multiple options. It is used by importing the Picker component from the react-native library.
import { View, StyleSheet, ActivityIndicator} from "react-native";
import { Component } from "react";
import {Picker} from '@react-native-picker/picker';
export default class ActivityDemo extends Component {
state={
animating:true,
choosenIndex:0
}
closeActivity=()=>setTimeout(() => this.setState({
animating:false
}),6000)
componentDidMount=()=> this.closeActivity()
render() {
const animating=this.state.animating
return (
<View style={styles.container}>
<ActivityIndicator animating={animating} size="large" color="red"/>
<ActivityIndicator  size="small" color="blue"/>
<ActivityIndicator  size="large" color="green"/>
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
)
}
}
const styles = StyleSheet.create({
container: {
marginTop: 50,
paddingVertical: 20,
backgroundColor: "white",
},
textStyle:{
margin:24,
fontSize:25,
fontWeight:bold,
textAlign:"center"
},
pickerStyle:{
height:150,
width: "80%",
color:"green"
}
});

MiniProject ToDoApp
In MainApp.js
import { StyleSheet, View, TextInput, Button, FlatList } from "react-native";
import { useState } from "react";
import TaskItem from "./TaskItem";
import TaskInput from "./TaskInput";
export default function MainApp() {
const [showModal, setShowModal] = useState(false);
const [myGoals, setMyGoals] = useState([]);
function showModalValue() {
setShowModal(true);
}
function endModalHandler() {
setShowModal(false);
}
function addTaskHandler(enteredText) {
setMyGoals((currentGoals) => [
...currentGoals,
{ text: enteredText, id: Math.random().toString() },
]);
endModalHandler();
}
function deleteTask(id) {
//console.log('deleted');
setMyGoals((currentGoals) => {
return currentGoals.filter((goal) => goal.id !== id);
});
}
return (
<View style={styles.container}>
<Button title="Add new Task" color="blue" onPress={showModalValue} />

      {showModal && (
        <TaskInput
          visible={showModal}
          onAddTask={addTaskHandler}
          onCancel={endModalHandler}
        />
      )}
      <View style={styles.taskContainer}>
        <FlatList
          data={myGoals}
          renderItem={(itemdata) => {
            return (
              <TaskItem
                text={itemdata.item.text}
                id={itemdata.item.id}
                od={deleteTask}
              />
            );
          }}
          alwaysBounceVertical={false}
        ></FlatList>
      </View>
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

Meals App
Training-Readme.md lowes-native lowes-react
ssaha-5a0c1:react-training ssaha$ cd lowes-native/
ssaha-5a0c1:lowes-native ssaha$ ls
my-pro
ssaha-5a0c1:lowes-native ssaha$ expo init meals-app

after 3 classes
npm install @react-navigation/native
expo install react-native-screens react-native-safe-area-context
expo install @react-navigation/native-stack

Drawer
npm i @react-navigation/drawer@6.3.1
npm i react-native-reanimated@1.13.4 react-native-gesture-handler@2.1.0
npm i @expo/vector-icons

Trip Manager
expo init app-name-directory
cd app-name-directory
npm start
npm install @react-navigation/native
expo install react-native-screens react-native-safe-area-context
expo install @react-navigation/native-stack
npm install react-redux
npm i @reduxjs/toolkit
npx expo install react-native-web@~0.18.7 react-dom@18.0.0 @expo/webpack-config@^0.17.0
install "react-dom": "^18.2.0" as well
npm start and press w

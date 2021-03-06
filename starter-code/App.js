import React from "react";
import './App.css';
import Nav from './src/Nav';
import FormField from './src/FormField';

const App = () => {
    return (
        <div>
            <Nav/>
            <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
            <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
            <CoolButton isSmall isDanger className="is-rounded my-class">Button 1</CoolButton>
            <CoolButton isSmall isSuccess>Button 2</CoolButton>
        </div>
    )
};






export default App
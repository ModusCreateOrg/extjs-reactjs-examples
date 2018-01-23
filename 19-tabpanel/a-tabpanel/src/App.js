import React, { Component } from 'react';
import FontAwesome from '@fortawesome/react-fontawesome'
import './App.css';
import freeSolid from '@fortawesome/fontawesome-free-solid'

const Tab = (props) => {
 const { tabtext, icon, activetab, cardindex, onClick } = props,
       isActive = (activetab === cardindex) ? 'active' : '';
  const { [icon] : iconName } = freeSolid;

 return (
   <div className={`tab ${isActive}`} onClick={onClick}>
     {icon ? <FontAwesome name={iconName} /> : ''}
     {tabtext}
   </div>
 );
};

class TabPanel extends Component {
 static defaultProps = {
   activetab: 0,
   className: '',
   position: 'top'
 }


 constructor (props) {
   super(props);
   
   this.state = {
     activetab: props.activetab
   }
 }

 render () {
   const { children, className, position } = this.props;
   const { activetab } = this.state;

   return (
     <div
       {...this.props}
       className={`${className} tab-panel ${position}`}
     >
       <div className={`tab-strip`}>
         {React.Children.map(children, (child, i) =>
           <Tab
             onClick={this.onTabClick.bind(this, i)}
             {...child.props}
             cardindex={i}
             activetab={activetab}
           />
         )}
       </div>
       <div className="card-ct">
         {React.Children.map(children, (child, i) => {
           const { className } = child.props,
                 isActive = (i === activetab) ? 'active' : '',
                 cardProps = {
                   ...child.props,
                  
                   className: `${className} card ${isActive}`,
                   cardindex: i,
                   activetab
                 };

           return React.cloneElement(child, cardProps);
         })}
       </div>
     </div>
   );
 }

 onTabClick (activetab) {
   this.setState({
     activetab
   });
 }
}

class App extends Component {
 render() {
   return (
     <TabPanel
       style={{height: "400px", width: "600px"}}
     >
       <div tabtext="Home" icon="faHome">
         Content for the first panel
       </div>
       <div tabtext="User" icon="faUser">
         ... and the second panel
       </div>
     </TabPanel>
   );
 }
}

export default App;

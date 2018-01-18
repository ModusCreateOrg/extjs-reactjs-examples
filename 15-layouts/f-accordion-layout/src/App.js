import React, { Component } from 'react';
import '../node_modules/react-accessible-accordion/dist/react-accessible-accordion.css';
import './App.css';

import {
    Accordion,
    AccordionItem,
    AccordionItemTitle,
    AccordionItemBody,
} from 'react-accessible-accordion';
class App extends Component {
  render () {
    return (
      <div style={{width: 600}}>
        <Accordion>
          <AccordionItem>
              <AccordionItemTitle>
                <h3 className="u-position-relative">
                  Accessible Accordion
                  <div className="accordion__arrow" role="presentation" />
                </h3>
              </AccordionItemTitle>
            <AccordionItemBody>
              <p>
                Accessible Accordion component for React. Inspired by <a
                  href="https://github.com/react-component/collapse"
                  target="_blank"
                  rel="noopener noreferrer"
                >rc-collapse</a> and <a
                  href="https://github.com/daviferreira/react-sanfona"
                  target="_blank"
                  rel="noopener noreferrer"
                >react-sanfona</a>.
              </p>
            </AccordionItemBody>
          </AccordionItem>
          <AccordionItem className="accordion__item">
            <AccordionItemTitle>
              <h3 className=" u-position-relative u-margin-bottom-s">
                Components
                <div className="accordion__arrow" role="presentation" />
              </h3>
            </AccordionItemTitle>
            <AccordionItemBody>
              <ul>
                <li>Accordion</li>
                <li>AccordionItem</li>
                <li>AccordionItemTitle</li>
                <li>AccordionItemBody</li>
              </ul>
            </AccordionItemBody>
          </AccordionItem>
        </Accordion>
      </div>
    );
  }
}

export default App;

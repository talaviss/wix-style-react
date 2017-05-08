import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-addons-test-utils';
import textLinkDriverFactory from '../../BaseComponents/TextLink/TextLink.driver';

const viewerTextLinkDriverFactory = ({element, wrapper, component}) => {

  let extendsFunc = {
    hoverLink: () => ReactTestUtils.Simulate.mouseEnter(element.children[0]),
    leaveLink: () => ReactTestUtils.Simulate.mouseLeave(element.children[0]),
    getColor: () => element.children[0].style._values.color,
  };

  return Object.assign(textLinkDriverFactory({element, wrapper, component}), extendsFunc);
};

export default viewerTextLinkDriverFactory;
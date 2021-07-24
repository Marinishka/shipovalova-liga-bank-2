import React, {useState} from 'react';
import {KeyCodes, TabsTitles, ScreenWidth} from '../../const';
import TabContribution from '../tab-contribution/tab-contribution';
import TabCredits from '../tab-credits/tab-credits';
import TabInsurance from '../tab-insurance/tab-insurance';
import TabOnlineService from '../tab-online-services/tab-online-services';
import TabItem from '../tab-item/tab-item';

const getActiveElement = (activeTab) => {
  switch (activeTab) {
    case TabsTitles.CONTRIBUTION:
      return <TabContribution/>;
    case TabsTitles.CREDITS:
      return <TabCredits/>;
    case TabsTitles.INSURANCE:
      return <TabInsurance/>;
    case TabsTitles.ONLINE_SERVICES:
      return <TabOnlineService/>;
    default: return <TabContribution/>;
  }
};

const getTabItems = (activeTab) => {
  let tabs = [];
  for (let tabTitle in TabsTitles) {
    if (Object.prototype.hasOwnProperty.call(TabsTitles, tabTitle)) {
      tabs.push(<TabItem key={TabsTitles[tabTitle]} tabTitle={TabsTitles[tabTitle]} isTabActive={activeTab === TabsTitles[tabTitle] ? true : false}></TabItem>);
    }
  }
  return tabs;
};

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(TabsTitles.CONTRIBUTION);

  const handleActiveTabChange = (newActiveTab) => {
    const windowInnerWidth = window.innerWidth;
    if (windowInnerWidth === ScreenWidth.MOBILE || windowInnerWidth === ScreenWidth.TABLET) {
      return;
    }
    setActiveTab(TabsTitles[newActiveTab.toUpperCase()]);
  };

  const onEnterPress = (evt) => {
    if (evt.keyCode === KeyCodes.ENTER) {
      setActiveTab(evt.target.dataset.tab);
    }
  };

  const keys = Object.keys(TabsTitles);
  let tabLength = keys.length;

  let touchStart = null;
  let touchPosition = null;

  const touchStarting = (e) => {
    touchStart = e.changedTouches[0].clientX;
    touchPosition = touchStart;
  };

  const touchMove = (e) => {
    touchPosition = e.changedTouches[0].clientX;
  };

  const touchEnd = () => {
    checkAction();
    touchStart = null;
    touchPosition = null;
  };

  const getIndex = (current) => {
    return keys.indexOf(keys.find((key) => TabsTitles[key] === current));
  };

  const sensitivity = 20;

  const checkAction = () => {
    let d = touchStart - touchPosition;
    if (Math.abs(d) > sensitivity) {
      if (d > 0) {
        setActiveTab((current) => {
          const index = getIndex(current);
          const res = index === tabLength - 1 ? TabsTitles[keys[0]] : TabsTitles[keys[index + 1]];
          return res;
        });
      } else {
        setActiveTab((current) => {
          const index = getIndex(current);
          const res = index === 0 ? TabsTitles[keys[keys.length - 1]] : TabsTitles[keys[index - 1]];
          return res;
        });
      }
    }
  };

  return <div className="tabs" onTouchStart={touchStarting} onTouchEnd={touchEnd} onTouchMove={touchMove} onTouchCancel={touchEnd}>
    <ul className="tabs__list" onClick={(evt) => handleActiveTabChange(evt.target.dataset.tab)} onKeyDown={(evt) => onEnterPress(evt)} >
      {getTabItems(activeTab)}
    </ul>
    <div className="tabs__container">
      {getActiveElement(activeTab)}
    </div>
  </div>;
};

export default Tabs;

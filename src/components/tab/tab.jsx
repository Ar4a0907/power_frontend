import React, { useState } from 'react';
import PropTypes from 'prop-types';
import tabStyles from './tabStyle.module.scss'

const Tab = ({tabs}) => {

    const [activeTab, setActiveTab] = useState(0);

    const labels = tabs.map((e, idx) => {
     return <element key={idx} className={activeTab === idx ? (tabStyles.label + ' ' + tabStyles.activeTab) : tabStyles.label} 
                     onClick={() => setActiveTab(idx)} >{e.label}</element>
    });

    return (
        <div>
            <span className={tabStyles.tabList}> 
                {labels}
            </span>
            <div className={tabStyles.tabContent}>
                {tabs[activeTab].content}
            </div>
        </div>
    )
}

Tab.propTypes = {
    tabs: PropTypes.arrayOf(PropTypes.shape({
            label: PropTypes.string.isRequired,
            content: PropTypes.element.isRequired
        }
    ))
}

export default Tab;

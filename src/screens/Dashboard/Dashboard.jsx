import React from 'react';
import { i18nActions } from '../../_actions'
import { connect } from 'react-redux';
import config from '../../config';
import { FormattedMessage, useIntl } from 'react-intl';
import { SideNav, Text } from '../../components/';
import { BrowserRouter } from 'react-router-dom';
import { store } from '../../_library/store';
import dashboardPageStyle from './DashboardPageStyle.module.scss';


const Dashboard = props => {
    const renderLangItem = (lang, reverse = false, onClick = false) => (
        <span {...(onClick ? {onClick} : undefined)}>
            {lang === props.lang ? <h4>{lang}</h4> : <>{lang}</>}
        </span>
    );

    const intl = useIntl();
    console.log(store.getState())

    return (
        <BrowserRouter>
            <SideNav menuComponents={[
                {label: intl.formatMessage({id:'pba.loggedIn.overview'}), link: '/overview', iconType: 'overview'},
                {label: 'Transactions', link: '/transactions', iconType: 'transactions'},
                {label: 'Cards', link: '/cards', iconType: 'cards'},
                {label: 'Inovices', link: '/inovices', iconType: 'inovices'},
                {label: 'Goals', link: '/goals', iconType: 'goals'},
                {label: 'Settings', link: '/settings', iconType: 'settings'}
            ]}/>
            <div className={dashboardPageStyle.content}>
                <div className={dashboardPageStyle.languageChoose}>
                    {config.supportedLangs.map((lang, idx) =>
                        <div key={idx}>
                            {renderLangItem(lang, true, () => props.changeLanguage(lang))}
                        </div>
                    )
                    }
                </div>
                <Text h3>
                    <FormattedMessage id="pba.loggedIn.title"/>, {store.getState().user.name}!
                </Text>
            </div>
        </BrowserRouter>
    );
}

function mapStateToProps(state) {

    const { lang } = state.i18n;

    return {
        lang
    };
}

function mapDispatchToProps(dispatch) {
    return({
        changeLanguage: lang => {
            dispatch(i18nActions.changeLanguage(lang))
        }
    })

}
const connectedLogin = connect(mapStateToProps, mapDispatchToProps)(Dashboard);
export { connectedLogin as Dashboard };
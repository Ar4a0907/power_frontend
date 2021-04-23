import React from 'react'
import { connect } from 'react-redux';
import { FormattedMessage, useIntl } from 'react-intl';
import { i18nActions } from '../../_actions'
import config from '../../config';
import {SideNav, Table, Text} from '../../components/';
import { BrowserRouter } from 'react-router-dom';
import { store } from '../../_library/store';
import powerbanksPageStyle from './PowerbanksPageStyle.module.scss';

const Powerbanks = props => {
    const renderLangItem = (lang, reverse = false, onClick = false) => (
        <span {...(onClick ? {onClick} : undefined)}>
            {lang === props.lang ? <h4>{lang}</h4> : <>{lang}</>}
        </span>
    );

    const intl = useIntl();
    return (
        <BrowserRouter>
            <SideNav menuComponents={[
                {label: intl.formatMessage({id: 'pba.loggedIn.overview'}), link: '/overview', iconType: 'overview'},
                {label: 'Devices', link: '/devices', iconType: 'transactions'},
                {label: 'Powerbanks', link: '/powerbanks', iconType: 'transactions'},
                {label: 'Transactions', link: '/transactions', iconType: 'transactions'},
                {label: 'Cards', link: '/cards', iconType: 'cards'},
                {label: 'Inovices', link: '/inovices', iconType: 'inovices'},
                {label: 'Goals', link: '/goals', iconType: 'goals'},
                {label: 'Settings', link: '/settings', iconType: 'settings'},
            ]}/>
            <div className={powerbanksPageStyle.content}>
                <div className={powerbanksPageStyle.languageChoose}>
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
                {<Table url='/powerbanks'
                        fields={[
                            {label: 'Id', name: 'id'},
                            {label: 'Device Number', name: 'powerNo'},
                            {label: 'State', name: 'state'},
                            {label: 'Position uuid', name: 'positionUuid'},
                            {label: 'Machine uuid', name: 'machineUuid'},
                            {label: 'Device Uuid', name: 'deviceUuid'},
                            {label: 'Update Time', name: 'updateTime'},
                            {label: 'Error State', name: 'errorState'},
                        ]}
                        expand={[
                            {label: 'Device Name', name: 'powerName'},
                            {label: 'Device ad', name: 'powerAd'},
                            {label: 'Created Time', name: 'createdTime'},
                            {label: 'Back Time', name: 'backTime'},
                            {label: 'All Position Uuid Row', name: 'allPositionUuidRow'},
                            {label: 'All Position Uuid Col', name: ' allPositionUuidCol'},
                            {label: 'All Position Uuid Ld', name: ' allPositionUuidld'},
                        ]} />
                }
            </div>
        </BrowserRouter>
    );
}
    function mapStateToProps(state) {

        const {lang} = state.i18n;

        return {
            lang
        };
    }

    function mapDispatchToProps(dispatch) {
        return ({
            changeLanguage: lang => {
                dispatch(i18nActions.changeLanguage(lang))
            }
        })

    }

    const connectedLogin = connect(mapStateToProps, mapDispatchToProps)(Powerbanks);

    export { connectedLogin as Powerbanks };
import React from 'react'
import { i18nActions } from '../../_actions'
import { connect } from 'react-redux';
import { FormattedMessage, useIntl } from 'react-intl';
import { SideNav, Text } from '../../components/';
import { Table } from '../../components';
import devicePageStyle from './DevicesPageStyle.module.scss';
import { store } from '../../_library/store';
import config from '../../config';



const Devices = (props) => {

    const renderLangItem = (lang, reverse = false, onClick = false) => (
        <span {...(onClick ? {onClick} : undefined)}>
            {lang === props.lang ? <h4>{lang}</h4> : <>{lang}</>}
        </span>
    );

    const intl = useIntl();


        const langChanger =  <div className={devicePageStyle.content}>
        <div className={devicePageStyle.languageChoose}>
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

        const sideNav = <SideNav menuComponents={[
            {label: intl.formatMessage({id:'pba.loggedIn.overview'}), link: '/overview', iconType: 'overview'},
            {label: 'Devices', link: '/devices', iconType: 'transactions'},
            {label: 'Transactions', link: '/transactions', iconType: 'transactions'},
            {label: 'Cards', link: '/cards', iconType: 'cards'},
            {label: 'Inovices', link: '/inovices', iconType: 'inovices'},
            {label: 'Goals', link: '/goals', iconType: 'goals'},
            {label: 'Settings', link: '/settings', iconType: 'settings'},
        ]}/>

    return (
    <>
        {sideNav}
        <div className={devicePageStyle.content}>
            {langChanger}
            <>
            {<Table url='/devices'
                fields={[
                    {label: 'id', name: 'id'},
                    {label: 'device number', name: 'deviceNo'},
                    {label: 'device name', name: 'deviceName'},
                    {label: 'machine number', name: 'machineNu'},
                    {label: 'device uuid', name: 'deviceUuid'}
                ]}
                expand={[
                    {label: 'created time', name: 'createdTime'},
                    {label: 'sn', name: 'sn'},
                    {label: 'url', name: 'url'},
                    {label: 'cloud id', name: 'cloudId'},
                    {label: 'device key', name: 'deviceKey'},
                    {label: 'ic id', name: 'icId'},
                    {label: 'device State', name: 'deviceState'},
                    {label: 'trace', name: 'trace'},
                    {label: 'space number', name: 'spaceNu'},
                    {label: 'soft version', name: 'softVersion'},
                    {label: 'hard version', name: 'hardVersion'},
                    {label: 'agreement Version', name: 'agreementVersion'},
                    {label: 'device model', name: 'deviceModel'},
                    {label: 'device signal', name: 'deviceSignal'},
                    {label: 'network type', name: 'networkType'},
                    {label: 'network operator', name: 'networkOperator'},
                    {label: 'device ip', name: 'deviceIp'},
                    {label: 'sole uid', name: 'soleUid'},
                    {label: 'place uid', name: 'placeUid'},
                    {label: 'agent uid', name: 'agentUid'}
                ]} />
            }
            </>
        </div>
    </>
    )
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
const connectedLogin = connect(mapStateToProps, mapDispatchToProps)(Devices);

export { connectedLogin as Devices };
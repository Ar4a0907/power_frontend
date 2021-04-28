import React from 'react'
import { connect } from 'react-redux';
import { FormattedMessage, useIntl } from 'react-intl';
import { SideNav, Text } from '../../components/';
import { Table } from '../../components';
import PowerbanksPositionLogPageStyle from './PowerbanksPositionLogPageStyle.module.scss';
import { LanguageChanger } from '../../components/LanguageChanger';



const PowerbanksPositionLog = (props) => {

    const intl = useIntl();

    const langChanger = <div className={PowerbanksPositionLogPageStyle.content}>
        <LanguageChanger />
        <Text h3>
            <FormattedMessage id="pba.loggedIn.title"/>, {props.name}!
        </Text>
    </div>

    const sideNav = <SideNav menuComponents={[
        {label: intl.formatMessage({id:'pba.loggedIn.overview'}), link: '/overview', iconType: 'overview'},
        {label: 'Devices', link: '/devices', iconType: 'transactions'},
        {label: 'Powerbanks', link: '/powerbanks', iconType: 'transactions'},
        {label: 'Transactions', link: '/transactions', iconType: 'transactions'},
        {label: 'Cards', link: '/cards', iconType: 'cards'},
        {label: 'Inovices', link: '/inovices', iconType: 'inovices'},
        {label: 'Goals', link: '/goals', iconType: 'goals'},
        {label: 'Settings', link: '/settings', iconType: 'settings'},
    ]}/>

    return (
    <>
        {sideNav}
        <div className={PowerbanksPositionLogPageStyle.content}>
            {langChanger}
            <>
            {<Table url={window.location.pathname}
                fields={[
                    {label: 'id', name: 'id'},
                    {label: 'create time', name: 'createTime'},
                    {label: 'position Uuid', name: 'positionUuid'},
                    {label: 'power No', name: 'powerNo'},
                    {label: 'state', name: 'state'},
                    {label: 'modify Time', name: 'modifyTime'},
                    {label: 'user Id', name: 'userId'},
                    {label: 'device Uuid', name: 'deviceUuid'},
                    {label: 'back Time', name: 'backTime'},
                ]}
                expand={[]} 
                />
            }
            </>
        </div>
    </>
    )
}

function mapStateToProps(state) {

    const { name } = state.user;

    return {
        name
    };
}

function mapDispatchToProps(dispatch) {
    return({
    })

}

const connectedLogin = connect(mapStateToProps, mapDispatchToProps)(PowerbanksPositionLog);

export { connectedLogin as PowerbanksPositionLog };
import React from 'react'
import { connect } from 'react-redux';
import { FormattedMessage, useIntl } from 'react-intl';
import { history } from '../../_library';
import { SideNav, Text } from '../../components/';
import { Table } from '../../components';
import usersPageStyle from './UsersPageStyle.module.scss';
import { LanguageChanger } from '../../components/LanguageChanger';



const Users = (props) => {

    const intl = useIntl();

    const langChanger = <div className={usersPageStyle.content}>
        <LanguageChanger />
        <Text h3>
            <FormattedMessage id="pba.loggedIn.title"/>, {props.name}!
        </Text>
    </div>

    const optionsItems = [
        {label: 'Edit', onClick: value => history.push(`/users/${value.nativeEvent.path[3].children[1].innerHTML}`)}
    ];

    const sideNav = <SideNav menuComponents={[
        {label: intl.formatMessage({id:'pba.loggedIn.overview'}), link: '/overview', iconType: 'overview'},
        {label: 'Devices', link: '/devices', iconType: 'transactions'},
        {label: 'Users', link: '/users', iconType: 'transactions'},
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
        <div className={usersPageStyle.content}>
            {langChanger}
            <>
            {<Table url='/users'
                fields={[
                    {label: 'id', name: 'id'},
                    {label: 'email', name: 'email'},
                    {label: 'name', name: 'name'},
                    {label: 'surname', name: 'surname'},
                    {label: 'status', name: 'status'},
                    {label: 'created', name: 'created'}
                ]}
                expand={[
                    {label: 'login attempts', name: 'loginAttempts'}
                ]} 
                options={optionsItems} />
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

const connectedLogin = connect(mapStateToProps, mapDispatchToProps)(Users);

export { connectedLogin as Users };
import React, { useState } from 'react';
import { authActions, i18nActions } from '../../_actions'
import { connect } from 'react-redux';
import config from '../../config';
import { FormattedMessage, useIntl } from 'react-intl';
import { Form, Block, Text } from '../../components/';
import * as Yup from 'yup';
import { postRequest } from '../../_library/request';
import { store } from '../../_library/store';
import loginPageStyle from './LoginPageStyle.module.scss';
import { getByDisplayValue } from '@testing-library/dom';


const Login = props => {

    const renderLangItem = (lang, reverse = false, onClick = false) => (
        <span {...(onClick ? {onClick} : undefined)}>
            {lang === props.lang ? <h4>{lang}</h4> : <>{lang}</>}
        </span>
    );

    const [errorMessage,setErrorMessage] = useState('');

    const intl = useIntl();

    const validationSchema = Yup.object().shape({
        password: Yup.string()
          .min(2, intl.formatMessage({id:'pba.login.validation.password_min'}))
          .max(70, intl.formatMessage({id:'pba.login.validation.password_max'}))
          .required(intl.formatMessage({id:'pba.login.validation.required'})),
        email: Yup.string()
          .email(intl.formatMessage({id:'pba.login.validation.email_invalid'}))
          .required(intl.formatMessage({id:'pba.login.validation.required'})),
      });

    const onSubmit = value => postRequest('/login', value).then(response => { 
        localStorage.setItem(config.accessTokenName, response.accessToken);
        store.dispatch(authActions.login(response))}  
     ).catch(error => {
         error.error ? setErrorMessage(<FormattedMessage id={`pba.login.error.${error.error}`}/>)  : setErrorMessage(<FormattedMessage id="pba.login.error.something"/>);
     }) 

    return(
        <div className={loginPageStyle.container}>
            <div className={loginPageStyle.languageChoose}>
                {config.supportedLangs.map((lang, idx) =>
                                  <div key={idx}>
                                      {renderLangItem(lang, true, () => props.changeLanguage(lang))}
                                  </div>
                              )
                }
            </div>
            
            <Block big className={loginPageStyle.loginFormContainer}>
                <Text h3 className={loginPageStyle.title} justify>
                    <FormattedMessage id="pba.login.title"/>
                </Text>
                {errorMessage && <Text bodyBig  justify className={loginPageStyle.errorMessage}>{errorMessage}</Text> }
                <Form initialValues={{email: '', password: ''}}
                      inputFields={[{name:'email', type:'email', label:intl.formatMessage({id:'pba.login.email'})},
                                    {name:'password', type:'password', label:intl.formatMessage({id:'pba.login.password'})}]}
                      onSubmit={value => onSubmit(value)}
                      validationSchema={validationSchema}
                      buttonText={<FormattedMessage id="pba.login.title"/>}
                />
            </Block>
        </div>
    );
};


function mapStateToProps(state) {

    const { lang } = state.i18n;

    return {
        lang
    };
}

function mapDispatchToProps(dispatch) {
    return({
        login: (email) => {
            dispatch(authActions.login(email))
        },
        changeLanguage: lang => {
            dispatch(i18nActions.changeLanguage(lang))
        }
    })
}

const connectedLogin = connect(mapStateToProps, mapDispatchToProps)(Login);
export { connectedLogin as Login };

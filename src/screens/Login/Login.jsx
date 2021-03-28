import React from 'react';
import { authActions, i18nActions } from '../../_actions'
import { connect } from 'react-redux';
import config from '../../config';
import { FormattedMessage } from 'react-intl';


const Login = props => {

    const renderLangItem = (lang, reverse = false, onClick = false) => (
        <span {...(onClick ? {onClick} : undefined)}>
            {lang === props.lang ? <h4>{lang}</h4> : <>{lang}</>}
        </span>
    );

    return(
        <div>
            <div>
                {config.supportedLangs.map(lang =>
                                  <div>
                                      {renderLangItem(lang, true, () => props.changeLanguage(lang))}
                                  </div>
                              )
                }
            </div>
            <FormattedMessage id="pba.login.title" />
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
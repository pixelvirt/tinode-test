// Login form.
import React from "react";
import { FormattedMessage } from "react-intl";

import CheckBox from "../widgets/checkbox.jsx";
import VisiblePassword from "../widgets/visible-password.jsx";

export default class LoginView extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            login: props.login,
            password: "",
            hostName: props.serverAddress,
            saveToken: props.persist,
        };
        this.handleLoginChange = this.handleLoginChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleToggleSaveToken = this.handleToggleSaveToken.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleLoginChange(e) {
        this.setState({ login: e.target.value });
    }

    handlePasswordChange(e) {
        this.setState({ password: e.target.value });
    }

    handleToggleSaveToken() {
        this.props.onPersistenceChange(!this.state.saveToken);
        this.setState({ saveToken: !this.state.saveToken });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.onLogin(this.state.login.trim(), this.state.password.trim());
    }

    render() {
        let submitClasses = "primary";
        if (this.props.disabled) {
            submitClasses += " disabled";
        }

        return (
            <form id="login-form" onSubmit={this.handleSubmit}>
                <h2 style={{ textAlign: "center", marginBottom: "10px" }}>
                    CHAT
                </h2>
                <FormattedMessage
                    id="login_prompt"
                    defaultMessage="Username"
                    description="Placeholer for username/login"
                >
                    {(login_prompt) => (
                        <input
                            type="text"
                            id="inputLogin"
                            placeholder="Username"
                            autoComplete="username"
                            autoCorrect="off"
                            autoCapitalize="none"
                            value={this.state.login}
                            onChange={this.handleLoginChange}
                            required
                            autoFocus
                        />
                    )}
                </FormattedMessage>
                <FormattedMessage
                    id="password_prompt"
                    defaultMessage="Password"
                    description="Placeholder/prompt for entering password"
                >
                    {(password_prompt) => (
                        <VisiblePassword
                            type="password"
                            id="inputPassword"
                            placeholder={password_prompt}
                            autoComplete="current-password"
                            value={this.state.password}
                            onChange={this.handlePasswordChange}
                            required={true}
                        />
                    )}
                </FormattedMessage>
                {/* <div className="panel-form-row">
          <CheckBox id="save-token" name="save-token" checked={this.state.saveToken}
            onChange={this.handleToggleSaveToken} />
          <label htmlFor="save-token">&nbsp;
            <FormattedMessage id="stay_logged_in" defaultMessage="Stay logged in"
              description="Label for a checkbox" />
          </label>
          <a href="#reset">
            <FormattedMessage id="forgot_password_link" defaultMessage="Forgot password?"
              description="Link to Reset password form" />
          </a>
        </div> */}
                <div
                    className="dialog-buttons"
                    style={{ width: "100%", marginTop: "15px", padding: "0" }}
                >
                    <button
                        className={submitClasses}
                        type="submit"
                        style={{
                            width: "100%",
                            backgroundColor: "green",
                            fontWeight: "bold",
                            padding: "0",
                            margin: "0",
                        }}
                    >
                        Log in
                    </button>
                </div>
            </form>
        );
    }
}

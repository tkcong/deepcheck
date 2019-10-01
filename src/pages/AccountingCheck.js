import React, { Component } from 'react';

import account_check from './../assets/images/account-check.png';

class AccountingCheck extends Component {
  render(){
    return (
      <main id="page_account_check">
          <img src={ account_check } alt="acount check image" style={{"width": "100%"}}/>
      </main>
    );
  }
}

export default AccountingCheck;
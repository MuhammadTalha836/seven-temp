import React from 'react'
import "../style/terms.scss";
function Terms() {
  return (
    <div className="terms">
     <div className='inner__term'>
     <h1>Terms and Conditions</h1>
      <p>Your Terms and Conditions section is like a contract between you and your customers. You make information and services available to your customers, and your customers must follow your rules.</p>
      <p>Common items in a terms and conditions agreement allow you to:</p>
      <div className='term__instruction'>
        <p>Withdraw and cancel services, and make financial transactions.</p>
        <p>Manage customer expectations, such as liability for information errors or website downtime.</p>
        <p>Explain your copyright rules, such as attribution, adaptation, commercial or non-commercial use, etc.</p>
        <p>Set rules for user behavior, like forbidding unlawful behavior, hate speech, bullying, promotions, spam, etc.</p>
        <p>Disable user accounts.</p>
        <p>Write down any other terms or conditions that protect you or your audience.</p>
      </div>
     </div>
    </div>
  )
}

export default Terms
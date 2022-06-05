import React from "react"

function SignUp() {
  return (
    <div>
      <h1>Sign up</h1>
      <form>
        <div>
          <input type="text" name="firstName" placeholder="First Name" />
        </div>
        <div>
          <input type="text" name="lastName" placeholder="Last Name" />
        </div>
        <div>
          <input type="password" name="password" placeholder="Enter password!" />
        </div>
        <div>
          <input type="password" name="password" placeholder="Enter password again!" />
        </div>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default SignUp
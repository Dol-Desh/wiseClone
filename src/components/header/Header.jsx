import './Header.css'
import wiseLogo from '../../assets/wiseLogo.svg'
import usFlag from '../../assets/us.svg'
import chevronDown from '../../assets/chevronDown.svg'


function Header() {

  return (
    <div className="header">

      <img className="logo" src={wiseLogo} alt="" />

      <div className="header-combo">

        <div className="left">
          <ul>
            <li>Personal</li>
            <li>Platform</li>
          </ul>
        </div>

        <div className="right">
          <ul>
            <li className="li-special">Features <img className="chevron-down" src={chevronDown} alt="" /></li>
            <li>Pricing</li>
            <li className="li-special"> <img className="us-flag" src={usFlag} alt="" /> EN</li>
            <li>Login</li>
            <li>Register</li>
          </ul>
        </div>

      </div>
    </div>
  );

}

export default Header;
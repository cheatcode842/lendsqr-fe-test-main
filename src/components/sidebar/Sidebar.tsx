import { useLocation } from 'react-router-dom';
// relative imports
import List from '../common/List';
import ListItem from '../common/ListItem';
// icons
import loansIcon from '../../assets/icons/loans.svg';
import systemMessages from '../../assets/icons/systemMessages.svg';
import usersIcon from '../../assets/icons/users-icon.svg';
import karmaIcon from '../../assets/icons/user-times 1.svg';
import savingsIcon from '../../assets/icons/piggy-bank 1.svg';
import guarantorsIcon from '../../assets/icons/guarantors.svg';
import whitelistIcon from '../../assets/icons/user-check 1.svg';
import loanRequestsIcon from '../../assets/icons/loan-requests.svg';
import organisationsIcon from '../../assets/icons/briefcase 1.svg';
import savingsProductsIcon from '../../assets/icons/Group.svg';
import coinsIcon from '../../assets/icons/coins-solid 1.svg';
import servicesIcon from '../../assets/icons/galaxy 1.svg';
import settlementsIcon from '../../assets/icons/scroll 1.svg';
import transactionsIcon from '../../assets/icons/transactions.svg';
import reportsIcon from '../../assets/icons/chart-bar 2.svg';
import preferencesIcon from '../../assets/icons/sliders-h 1.svg';
import pricingIcon from '../../assets/icons/badge-percent 1.svg';
import auditIcon from '../../assets/icons/clipboard-list 1.svg';
import logoutIcon from '../../assets/icons/sign-out 1.svg';
import dashboardIcon from '../../assets/icons/home-icon.svg';
import dropdownIcon from '../../assets/icons/dropdown-arrow.svg';

export const Customers = () => (
  <List title='customers'>
    <ListItem leftIcon={usersIcon} title='Users' />
    <ListItem leftIcon={guarantorsIcon} title='Guarantors' />
    <ListItem leftIcon={loansIcon} title='Loans' />
    <ListItem leftIcon={savingsIcon} title='Savings' />
    <ListItem leftIcon={loanRequestsIcon} title='Loan requests' />
    <ListItem leftIcon={whitelistIcon} title='Whitelist' />
    <ListItem leftIcon={karmaIcon} title='Karma' />
  </List>
);

export const Bussinesses = () => (
  <List title='bussinesses'>
    <ListItem leftIcon={organisationsIcon} title='Organizations' />
    <ListItem leftIcon={loansIcon} title='Loan Products' />
    <ListItem leftIcon={savingsProductsIcon} title='Savings Products' />
    <ListItem leftIcon={coinsIcon} title='Fees and Charges' />
    <ListItem leftIcon={transactionsIcon} title='Transactions' />
    <ListItem leftIcon={servicesIcon} title='Services' />
  </List>
);

export const ServiceAccounts = () => (
  <List title='Services Accounts'>
    <ListItem leftIcon={settlementsIcon} title='Settlements' />
    <ListItem leftIcon={reportsIcon} title='Reports' />
  </List>
);

export const Settings = () => (
  <List title='settings'>
    <ListItem leftIcon={preferencesIcon} title='Preferences' />
    <ListItem leftIcon={pricingIcon} title='Fees and Pricing' />
    <ListItem leftIcon={auditIcon} title='Audit Logs' />
  </List>
);

export const CustomSettings = () => (
  <List title='settings'>
    <ListItem leftIcon={preferencesIcon} title='Preferences' />
    <ListItem leftIcon={pricingIcon} title='Fees and Pricing' />
    <ListItem leftIcon={auditIcon} title='Audit Logs' />
  </List>
);

const SidebarHeader = () => (
  <div className='sidebar__header'>
    <div className='sidebar__header--orgs'>
      <img className='icon' src={organisationsIcon} alt='switch organizations' />
      <h1 className='text text-lg'>Switch Organizations</h1>
      <img className='icon' src={dropdownIcon} alt='Dashboard' />
    </div>
    <div className='sidebar__header--dashboard'>
      <img className='icon' src={dashboardIcon} alt='Dashboard' />
      <h2 className='text'>Dashboard</h2>
    </div>
  </div>
);

const SideBar = () => {
  const { pathname } = useLocation();
  return (
    <aside className='sidebar'>
      <SidebarHeader />
      <Customers />
      <Bussinesses />
      <ServiceAccounts />
      <Settings />

      {pathname != '/' && <ListItem leftIcon={systemMessages} title='System Messages' />}

      <button className='btn btn--logout'>
        <img src={logoutIcon} alt='logout' />
      </button>

      <div className='divider-container'>
        <div className='divider'></div>
      </div>

      <button className='btn logout--icon text-base'>Logout</button>
    </aside>
  );
};

export default SideBar;

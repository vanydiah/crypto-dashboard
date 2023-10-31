import SiteLayout from '../../layouts/SiteLayout';
import Header from '../../components/Header/Header';

import Box from '../../components/Common/Box';
import BankProcess from '../../components/Widgets/BankProcess/BankProcess';
import RecentActivity from '../../components/Widgets/RecentActivity/RecentActivity';

const DashboardScreen = () => (
  <SiteLayout>
    <Header icon='sort' title='Deposit Withdraw' />
    <div className='flex flex-destroy flex-space-between'>
      <div className='flex-1 box-right-padding'>
        <BankProcess />
      </div>
      <div className='flex-1'>
        <Box>
          <div className='box-title box-vertical-padding box-horizontal-padding no-select'>
            <div className='flex flex-center flex-space-between'>
              <p>Important</p>
            </div>
          </div>
          <div className='box-content box-text box-horizontal-padding box-content-height-nobutton'>
            <p>
              &bull; In EFT transfers, Crypto Exchange must be written in the recipient/beneficiary section.
            </p>
            <p>
              &bull; You can make money transfer/EFT transactions from all your individual, current, USD accounts opened in your name to the listed accounts. Submissions made from accounts belonging to different people will not be accepted.

            </p>
            <p>
              &bull; Transfers made using ATMs (with or without a card) will not be accepted as it is not possible to confirm the sender information.

            </p>
            <p>
              &bull; The amount you send will be automatically reflected in your account by the system after the checks, you do not need to make a separate notification.
            </p>
            <p>
              &bull; Since you have completed your identity verification process, you do not need to enter a fixed deposit code in the description section.

            </p>
          </div>
        </Box>
      </div>
    </div>
    <div className='flex flex-destroy flex-space-between'>
      <div className='flex-1 box-right-padding'>
        <RecentActivity />
      </div>
      <div className='flex-1'>
        <Box>
          <div className='box-title box-vertical-padding box-horizontal-padding no-select'>
            <div className='flex flex-center flex-space-between'>
              <p>Important</p>
            </div>
          </div>
          <div className='box-content box-text box-horizontal-padding box-content-height-nobutton'>
            <p>
              &bull; You can make withdrawals to all bank accounts opened in your name (individual, current, TL). Your transfer to a different person will not occur.
            </p>
            <p>&bull; Minimum withdrawal amount is $10.</p>
            <p>&bull; A $3 transaction fee is charged during the withdrawal process..</p>
            <p>
              &bull; When you place a withdrawal order, this amount will be deducted from your available balance.
            </p>
            <p>
              &bull; You can cancel your orders that have not been realized yet. In this case, the order amount is transferred back to your available balance.
            </p>
            <p>
              &bull; Withdrawal orders given outside of banks' working hours are processed as soon as the banks start working.
            </p>
          </div>
        </Box>
      </div>
    </div>
  </SiteLayout>
);

export default DashboardScreen;

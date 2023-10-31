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
              <p>Önemli</p>
            </div>
          </div>
          <div className='box-content box-text box-horizontal-padding box-content-height-nobutton'>
            <p>
              &bull; Adınıza açılmış (bireysel, vadesiz, TL) tüm banka hesaplarınıza çekim
              yapabilirsiniz. Farklı bir kişiye transfer işleminiz gerçekleşmeyecektir.
            </p>
            <p>&bull; Minimum çekim tutarı 10 TL&apos;dir.</p>
            <p>&bull; Çekim işlemi sırasında 3 TL işlem ücreti tahsil edilir.</p>
            <p>
              &bull; Bir çekim talimatı verdiğinizde bu tutar kullanılabilir bakiyenizden
              düşecektir.
            </p>
            <p>
              &bull; Henüz gerçekleşmemiş talimatlarınızı iptal edebilirsiniz. Bu durumda talimat
              tutarı tekrar kullanılabilir bakiyenize aktarılır.
            </p>
            <p>
              &bull; Bankaların mesai saatleri dışında verilen çekim talimatları, bankaların mesaiye
              başlaması ile birlikte işleme alınır.
            </p>
          </div>
        </Box>
      </div>
    </div>
  </SiteLayout>
);

export default DashboardScreen;

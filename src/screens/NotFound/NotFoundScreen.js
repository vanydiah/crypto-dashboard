import { Link } from 'react-router-dom';

const NotFoundScreen = () => (
  <div className='full-height flex flex-column flex-center'>
    <img src='/images/logo.png' alt='Crypto Exchange' draggable='false' className='logo-404' />
    <h1 className='title-404'>404</h1>
    <p className='paragraph-404'>The page you're looking for is not found.</p>
    <Link to='/' className='button button-purple button-medium'>
      Back
    </Link>
  </div>
);

export default NotFoundScreen;

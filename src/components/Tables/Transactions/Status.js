import { memo } from 'react';
import PropTypes from 'prop-types';

const Status = memo(({ status }) => {
  if (status === 1) {
    return <span className='status green'>Finished</span>;
  }

  if (status === 2) {
    return <span className='status red'>Cancel</span>;
  }

  return <span className='status gray'>Waiting</span>;
});

Status.propTypes = {
  status: PropTypes.number.isRequired,
};

export default Status;

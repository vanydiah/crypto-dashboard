import { useState } from 'react';
import { Link } from 'react-router-dom';

import MainLayout from '../../layouts/MainLayout';
import Box from '../../components/Common/Box';
import FormInput from '../../components/Forms/FormInput';
import FormButton from '../../components/Forms/FormButton';
import FormCheckbox from '../../components/Forms/FormCheckbox';

const SignupScreen = () => {
  const [formValues, setFormValues] = useState({
    email: '',
    phone: '',
    password: '',
    password1: '',
    name: '',
    lastname: '',
    citizenship: false,
    identityType: '',
    identityNumber: '',
    day: '',
    month: '',
    year: '',
    country: '',
    operator: '',
    agreeToPolicies1: false,
    agreeToPolicies2: false,
    agreeToPolicies3: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;

    setFormValues({
      ...formValues,
      [name]: checked,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  return (
    <MainLayout>
      <div className='flex flex-center'>
        <div className='login no-select'>
          <Box>
            <div className='box-vertical-padding box-horizontal-padding'>
              <div>
                <div className='form-logo center'>
                  <img src='/images/logo.png' alt='Crypto Exchange' draggable='false' />
                </div>
                <h1 className='form-title center'>Sign Up</h1>
                <p className='form-desc center'>
                  Please enter your (any) information to continue
                </p>
                <form className='form' onSubmit={handleSubmit} noValidate>
                  <div className='form-elements'>
                    <div className='form-line'>
                      <div className='full-width'>
                        <label htmlFor='email'>E-mail</label>
                        <FormInput
                          type='email'
                          name='email'
                          value={formValues.email}
                          placeholder='E-mail'
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className='form-line'>
                      <div className='full-width'>
                        <label htmlFor='password'>Password</label>
                        <FormInput
                          type='password'
                          name='password'
                          value={formValues.password}
                          placeholder='Password'
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className='form-line'>
                      <div className='full-width'>
                        <label htmlFor='password1'>Confirm Password</label>
                        <FormInput
                          type='password'
                          name='password1'
                          value={formValues.password1}
                          placeholder='Confirm Password'
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className='form-line'>
                      <div className='full-width'>
                        <label htmlFor='name'>First Name</label>
                        <FormInput
                          type='text'
                          name='name'
                          value={formValues.name}
                          placeholder='First Name'
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className='form-line'>
                      <div className='full-width'>
                        <label htmlFor='lastname'>Last Name</label>
                        <FormInput
                          type='text'
                          name='lastname'
                          value={formValues.lastname}
                          placeholder='Last Name'
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    <div className='form-line clearfix'>
                      <div className='half-width'>
                        <label htmlFor='identityType'>Identity Type</label>
                        <select name='identityType' id='identityType'>
                          <option value='1'>KTP</option>
                        </select>
                      </div>
                      <div className='half-width'>
                        <label htmlFor='identityNumber'>Identity Number</label>
                        <FormInput
                          type='text'
                          name='identityNumber'
                          value={formValues.identityNumber}
                          placeholder='Identity Number'
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    <div className='form-line clearfix'>
                      <div className='three-width'>
                        <label htmlFor='day'>Day</label>
                        <select name='day' id='day'>
                          <option value='1'>1</option>
                        </select>
                      </div>
                      <div className='three-width'>
                        <label htmlFor='month'>Month</label>
                        <select name='month' id='month'>
                          <option value='1'>Jan</option>
                        </select>
                      </div>
                      <div className='three-width'>
                        <label htmlFor='year'>Year</label>
                        <select name='year' id='year'>
                          <option value='1'>2000</option>
                        </select>
                      </div>
                    </div>

                    <div className='form-line clearfix'>
                      <div className='three-width'>
                        <label htmlFor='operator'>Country Code</label>
                        <select name='operator' id='operator'>
                          <option value='1'>+62</option>
                        </select>
                      </div>
                      <div className='three-width'>
                        <label htmlFor='phone'>Phone Number</label>
                        <FormInput
                          type='text'
                          name='phone'
                          value={formValues.phone}
                          placeholder='Phone Number'
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    <div className='form-line'>
                      <div className='full-width'>
                        <FormCheckbox
                          name='agreeToPolicies1'
                          checked={formValues.agreeToPolicies1}
                          text={`I agree with Terms and Conditions.`}
                          onChange={handleCheckboxChange}
                        />
                      </div>
                    </div>
                    <div className='form-line'>
                      <div className='buttons'>
                        <FormButton type='submit' text='Hesap oluştur' onClick={handleSubmit} />
                      </div>
                    </div>
                    <div className='form-line'>
                      <div className='center'>
                        <p>
                          Already member? Please <Link to='/'>Sign In</Link>.
                        </p>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </Box>
        </div>
      </div>
    </MainLayout>
  );
};

export default SignupScreen;

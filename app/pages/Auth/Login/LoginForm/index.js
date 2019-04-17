import React from 'react';
import PropTypes from 'prop-types';
import * as Yup from 'yup';
import { Formik } from 'formik';
import Input from 'components/Input';
import Button from 'components/Button';
import Icon from 'components/Icon';
import WarningSvg from './WarningSvg';
import 'components/Input/style';
import 'components/Button/style';

import './index.less';

function LoginForm(props) {
  const { submitError, onLoginSubmit } = props;
  /* eslint-disable compat/compat */
  function getError(errors, touched, submitCount) {
    const key = Object.keys(errors)[0];
    if (key && (touched[key] || submitCount)) {
      return errors[key];
    }
    return submitError;
  }
  /* eslint-enable compat/compat */
  return (
    <Formik
      validateOnChange={false}
      validationSchema={Yup.object().shape({
        email: Yup.string()
          .email('请输入正确的Email格式')
          .trim()
          .required('Email不可为空'),
        password: Yup.string().required('密码不可为空'),
      })}
      onSubmit={(values, actions) => {
        onLoginSubmit(values, actions);
      }}
    >
      {({
        errors,
        touched,
        submitCount,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
      }) => (
        <form onSubmit={handleSubmit}>
          {getError(errors, touched, submitCount) && (
            <div className="login-form-error">
              <Icon component={WarningSvg} />
              <span>{getError(errors, touched, submitCount)}</span>
            </div>
          )}
          <div className="login-form-item">
            <label htmlFor="email">邮箱账户：</label>
            <Input
              name="email"
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="demo@demo.com"
              hasError={errors.email && touched.email}
            />
          </div>
          <div className="login-form-item">
            <label htmlFor="password">密码：</label>
            <div>
              <Input.Password
                name="password"
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="password"
                hasError={errors.password && touched.password}
              />
            </div>
          </div>
          <div className="submit">
            <Button
              type="primary"
              htmlType="submit"
              loading={isSubmitting}
              block
            >
              登录
            </Button>
          </div>
        </form>
      )}
    </Formik>
  );
}

LoginForm.propTypes = {
  submitError: PropTypes.string,
  onLoginSubmit: PropTypes.func,
};

LoginForm.defaultProps = {
  submitError: '',
};

export default LoginForm;

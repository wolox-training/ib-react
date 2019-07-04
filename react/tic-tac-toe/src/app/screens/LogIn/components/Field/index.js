import React from 'react';
import cx from 'classnames';

import validation from '../../../../../utils/classNameValidity';


export const customInput = props => {
  const { label, input, type, meta } = props;
  const { dirty, error, active, touched } = meta;
  return (
    <div
      className={cx(
        'custom-input-container',
        { 'flex-row-reverse': type === 'checkbox' },
        { dirty },
        validation.getValidityClassName(meta)
      )}
    >
      <input {...input} type={type} />
      <label>{label}</label>
      {error &&
        touched &&
        !active && (
        <div className="feedback-text error-text">
          {error}
        </div>
      )}
    </div>
  );
};

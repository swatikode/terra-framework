import React from 'react';
import DocTemplate from 'terra-doc-template';

import Documentation from '../../../../docs/ValidationComponents.md';

// Example File
import DefaultFormValidation from '../example/DefaultFormValidation';
import DefaultFormValidationSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/DefaultFormValidation';
import FormSubmitRadioField from '../example/FormSubmitRadioField';
import FormSubmitRadioFieldSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/FormSubmitRadioField';
import FormSubmitCheckboxField from '../example/FormSubmitCheckboxField';
import FormSubmitCheckboxFieldSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/FormSubmitCheckboxField';
import FormSubmitDatePicker from '../example/FormSubmitDatePicker';
import FormSubmitDatePickerSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/FormSubmitDatePicker';
import FormSubmitDateInput from '../example/FormSubmitDateInput';
import FormSubmitDateInputSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/FormSubmitDateInput';

const FormValidationExamples = () => (
  <DocTemplate
    readme={Documentation}
    examples={[
      {
        title: 'Input/TextareaField Validation',
        example: <DefaultFormValidation />,
        source: DefaultFormValidationSrc,
      },
      {
        title: 'RadioField Validation',
        example: <FormSubmitRadioField />,
        source: FormSubmitRadioFieldSrc,
      },
      {
        title: 'CheckboxField Validation',
        example: <FormSubmitCheckboxField />,
        source: FormSubmitCheckboxFieldSrc,
      },
      {
        title: 'DatePicker Validation',
        example: <FormSubmitDatePicker />,
        source: FormSubmitDatePickerSrc,
      },
      {
        title: 'DateInput Validation',
        example: <FormSubmitDateInput />,
        source: FormSubmitDateInputSrc,
      },
    ]}
  />
);

export default FormValidationExamples;

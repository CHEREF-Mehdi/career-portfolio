import * as React from 'react';
import { useSelector } from 'react-redux';
import { IAppState } from '../../store/ducks/rootReducer';
import { Formik, FormikHelpers, Form, Field, FormikErrors } from 'formik';
import { IContactFormData, contactFormSchema, API_CALLS } from '../../utils';
import { Alert, Button, Spinner } from 'react-bootstrap';

const styles: IClassNames = {
  contactContainer: {
    display: 'flex',
  },
  contactHeader: { paddingLeft: '20px', paddingTop: '20px' },
  canvasContainer: { flex: 1, height: '250px' },
} as const;

export const Contact: React.FC = () => {
  const contact = useSelector((state: IAppState) => state.careerData.contact);
  const [showAlert, setShowAlert] = React.useState({
    show: false,
    type: '',
    message: '',
    showSubmitBtn: true,
  });

  const contactInitialValue: IContactFormData = {
    name: '',
    email: '',
    subject: '',
    message: '',
  };

  const validateContactForm = (values: IContactFormData) => {
    let errors: FormikErrors<IContactFormData> = {};
    const result = contactFormSchema.validate(values);

    result.error?.details.forEach((element) => {
      if (element.context?.key === 'name') {
        errors.name = element.message;
      }
      if (element.context?.key === 'email') {
        errors.email = element.message;
      }
      if (element.context?.key === 'subject') {
        errors.subject = element.message;
      }
      if (element.context?.key === 'message') {
        errors.message = element.message;
      }
    });

    return errors;
  };

  const onSubmitContactForm = (
    values: IContactFormData,
    actions: FormikHelpers<IContactFormData>
  ) => {
    actions.setSubmitting(true);
    API_CALLS.contactMe(values)
      .then((response) => {
        if (response.status === 200) {
          setShowAlert({
            show: true,
            type: 'success',
            message: 'Your message has been sent successfully',
            showSubmitBtn: false,
          });
        }
      })
      .catch((error) => {
        if (error.response) {
          setShowAlert({
            show: true,
            type: 'danger',
            message: error.response.data.message,
            showSubmitBtn: true,
          });
        }
      })
      .finally(() => actions.setSubmitting(false));
  };

  return (
    <section id='contact' className='section-padding'>
      <div className='contact-form'>
        <div className='container'>
          <div
            className='row contact-form-area wow fadeInUp'
            data-wow-delay='0.4s'
          >
            <div id='contactDiv' className='col-md-6 col-lg-6 col-sm-12'>
              <div className='contact-block'>
                <h2>Contact Form</h2>

                <Alert
                  variant={showAlert.type}
                  show={showAlert.show}
                  onClose={() => setShowAlert({ ...showAlert, show: false })}
                  dismissible
                >
                  {showAlert.message}
                </Alert>

                <Formik
                  initialValues={contactInitialValue}
                  validate={validateContactForm}
                  onSubmit={onSubmitContactForm}
                >
                  {({ values, errors, handleChange, isSubmitting }) => {
                    return (
                      <Form>
                        <div className='row'>
                          <div className='col-md-6'>
                            <div className='form-group'>
                              <Field
                                className='form-control'
                                placeholder='Name'
                                id='name'
                                data-error='Please enter your name'
                                value={values.name}
                                onChange={handleChange}
                              />
                              {errors.name && (
                                <small className='text-danger'>
                                  {errors.name}
                                </small>
                              )}
                            </div>
                          </div>
                          <div className='col-md-6'>
                            <div className='form-group'>
                              <Field
                                placeholder='Email'
                                id='email'
                                className='form-control'
                                data-error='Please enter your email'
                                value={values.email}
                                onKeyUp={handleChange}
                              />
                              {errors.email && (
                                <small className='text-danger'>
                                  {errors.email}
                                </small>
                              )}
                            </div>
                          </div>
                          <div className='col-md-12'>
                            <div className='form-group'>
                              <Field
                                placeholder='Subject'
                                id='subject'
                                data-error='Please enter your subject'
                                className='form-control'
                                value={values.subject}
                                onKeyUp={handleChange}
                              />
                              {errors.subject && (
                                <small className='text-danger'>
                                  {errors.subject}
                                </small>
                              )}
                            </div>
                          </div>
                          <div className='col-md-12'>
                            <div className='form-group'>
                              <Field
                                as='textarea'
                                className='form-control'
                                placeholder='Your Message'
                                id='message'
                                data-error='Write your message'
                                value={values.message}
                                rows={5}
                                onKeyUp={handleChange}
                              ></Field>
                              {errors.message && (
                                <small className='text-danger'>
                                  {errors.message}
                                </small>
                              )}
                            </div>
                            <div className='submit-button'>
                              {showAlert.showSubmitBtn && (
                                <Button
                                  type='submit'
                                  className='btn btn-common'
                                >
                                  {isSubmitting && (
                                    <Spinner
                                      as='span'
                                      animation='border'
                                      size='sm'
                                      role='status'
                                      aria-hidden='true'
                                      style={{ marginRight: 10 }}
                                    />
                                  )}
                                  Send Message
                                </Button>
                              )}
                            </div>
                          </div>
                        </div>
                      </Form>
                    );
                  }}
                </Formik>
              </div>
            </div>
            <div
              className='col-md-6 col-lg-6 col-sm-12'
              style={styles.contactContainer}
            >
              <div className='col-md-12 col-lg-12 col-sm-12 footer-right-area wow fadeIn'>
                <h2 style={styles.contactHeader}>Contact Address</h2>
                <div className='footer-right-contact'>
                  <div className='single-contact'>
                    <div className='contact-icon'>
                      <i className='fa fa-map-marker'></i>
                    </div>
                    <p>{contact.adress}</p>
                  </div>
                  <div className='single-contact'>
                    <div className='contact-icon'>
                      <i className='fa fa-envelope'></i>
                    </div>

                    <span className='pro-detail'>
                      <a href={`mailto:${contact.email1}`}>{contact.email1}</a>
                    </span>
                    <br />
                    <span className='pro-detail'>
                      <a href={`mailto:${contact.email2}`}>{contact.email2}</a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

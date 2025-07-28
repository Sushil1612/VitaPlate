import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './RegistrationForm.css';

const RegistrationForm = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validationSchema = Yup.object().shape({
    fullName: Yup.string().required('Full name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    phone: Yup.string()
      .matches(/^[0-9]{10}$/, 'Phone must be 10 digits')
      .required('Phone is required'),
    panNumber: Yup.string()
      .matches(/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/, 'Invalid PAN format')
      .required('PAN is required'),
    aadhaarNumber: Yup.string()
      .matches(/^[0-9]{12}$/, 'Aadhaar must be 12 digits')
      .required('Aadhaar is required'),
    aadhaarFile: Yup.mixed().required('Aadhaar photo is required'),
    fssaiFile: Yup.mixed().required('FSSAI license is required'),
    chequeFile: Yup.mixed().required('Cancelled cheque is required'),
    accountHolderName: Yup.string().required('Account holder name is required'),
    bankName: Yup.string().required('Bank name is required'),
    accountNumber: Yup.string().required('Account number is required'),
    ifscCode: Yup.string().required('IFSC code is required')
  });

  const formik = useFormik({
    initialValues: {
      fullName: '',
      email: '',
      phone: '',
      panNumber: '',
      aadhaarNumber: '',
      gstNumber: '',
      fssaiLicenseNumber: '',
      accountHolderName: '',
      bankName: '',
      accountNumber: '',
      ifscCode: '',
      fssaiFile: null,
      chequeFile: null,
      aadhaarFile: null,
    },
    validationSchema,
    onSubmit: async (values) => {
      setIsSubmitting(true);
      try {
        await new Promise(resolve => setTimeout(resolve, 1500));
        alert('Registration successful! Redirecting to login...');
        navigate('/login');
      } catch (error) {
        alert('Registration failed. Please try again.');
        console.error('Registration error:', error);
      } finally {
        setIsSubmitting(false);
      }
    },
  });

  const handleFileChange = (fieldName, file) => {
    formik.setFieldValue(fieldName, file);
    formik.setFieldTouched(fieldName, true, false);
  };

  return (
    <div className="container py-4">
      <div className="registration-header text-center mb-4 pb-2 border-bottom border-warning border-3">
        <h1 className="mb-2">Vita-Plate | Registration</h1>
        <p className="text-muted fst-italic">* Marked fields are mandatory</p>
      </div>

      <div className="card shadow-sm">
        <div className="card-body p-4">
          <form onSubmit={formik.handleSubmit}>
            
            {/* Personal Details Section */}
            <div className="mb-4 pb-3 border-bottom">
              <h3 className="text-warning mb-3">Personal Details</h3>
              <div className="row g-3">
                <div className="col-md-4">
                  <label className="form-label">Full Name <span className="text-danger">*</span></label>
                  <input
                    type="text"
                    name="fullName"
                    className={`form-control ${formik.touched.fullName && formik.errors.fullName ? 'is-invalid' : ''}`}
                    {...formik.getFieldProps('fullName')}
                  />
                  {formik.touched.fullName && formik.errors.fullName && (
                    <div className="invalid-feedback">{formik.errors.fullName}</div>
                  )}
                </div>

                <div className="col-md-4">
                  <label className="form-label">Email <span className="text-danger">*</span></label>
                  <input
                    type="email"
                    name="email"
                    className={`form-control ${formik.touched.email && formik.errors.email ? 'is-invalid' : ''}`}
                    {...formik.getFieldProps('email')}
                  />
                  {formik.touched.email && formik.errors.email && (
                    <div className="invalid-feedback">{formik.errors.email}</div>
                  )}
                </div>

                <div className="col-md-4">
                  <label className="form-label">Phone Number <span className="text-danger">*</span></label>
                  <input
                    type="tel"
                    name="phone"
                    className={`form-control ${formik.touched.phone && formik.errors.phone ? 'is-invalid' : ''}`}
                    {...formik.getFieldProps('phone')}
                  />
                  {formik.touched.phone && formik.errors.phone && (
                    <div className="invalid-feedback">{formik.errors.phone}</div>
                  )}
                </div>
              </div>
            </div>

            {/* Government IDs Section */}
            <div className="mb-4 pb-3 border-bottom">
              <h3 className="text-warning mb-3">Government IDs</h3>
              <div className="row g-3">
                <div className="col-md-4">
                  <label className="form-label">PAN Number <span className="text-danger">*</span></label>
                  <input
                    type="text"
                    name="panNumber"
                    className={`form-control ${formik.touched.panNumber && formik.errors.panNumber ? 'is-invalid' : ''}`}
                    {...formik.getFieldProps('panNumber')}
                  />
                  {formik.touched.panNumber && formik.errors.panNumber && (
                    <div className="invalid-feedback">{formik.errors.panNumber}</div>
                  )}
                </div>

                <div className="col-md-4">
                  <label className="form-label">Aadhaar Number <span className="text-danger">*</span></label>
                  <input
                    type="text"
                    name="aadhaarNumber"
                    className={`form-control ${formik.touched.aadhaarNumber && formik.errors.aadhaarNumber ? 'is-invalid' : ''}`}
                    {...formik.getFieldProps('aadhaarNumber')}
                  />
                  {formik.touched.aadhaarNumber && formik.errors.aadhaarNumber && (
                    <div className="invalid-feedback">{formik.errors.aadhaarNumber}</div>
                  )}
                </div>

                {/* Aadhaar Photo Upload */}
                <div className="col-md-4">
                  <label className="form-label">Aadhaar Photo Upload <span className="text-danger">*</span></label>
                  <div className="d-flex align-items-center">
                    <input
                      type="file"
                      id="aadhaarUpload"
                      onChange={(e) => handleFileChange('aadhaarFile', e.target.files[0])}
                      className="d-none"
                    />
                    <label htmlFor="aadhaarUpload" className="btn btn-warning text-white me-2">
                      Choose File
                    </label>
                    <span className="text-muted small">
                      {formik.values.aadhaarFile ? formik.values.aadhaarFile.name : 'No file chosen'}
                    </span>
                  </div>
                  {formik.touched.aadhaarFile && formik.errors.aadhaarFile && (
                    <div className="text-danger small mt-1">{formik.errors.aadhaarFile}</div>
                  )}
                </div>
              </div>

              {/* FSSAI License Number with adjacent upload */}
              <div className="row mt-3">
                <div className="col-md-8">
                  <label className="form-label">FSSAI License Number</label>
                  <input
                    type="text"
                    name="fssaiLicenseNumber"
                    className="form-control"
                    {...formik.getFieldProps('fssaiLicenseNumber')}
                  />
                </div>
                <div className="col-md-4">
                  <label className="form-label">FSSAI License Upload <span className="text-danger">*</span></label>
                  <div className="d-flex align-items-center">
                    <input
                      type="file"
                      id="fssaiUpload"
                      onChange={(e) => handleFileChange('fssaiFile', e.target.files[0])}
                      className="d-none"
                    />
                    <label htmlFor="fssaiUpload" className="btn btn-warning text-white me-2">
                      Choose File
                    </label>
                    <span className="text-muted small">
                      {formik.values.fssaiFile ? formik.values.fssaiFile.name : 'No file chosen'}
                    </span>
                  </div>
                  {formik.touched.fssaiFile && formik.errors.fssaiFile && (
                    <div className="text-danger small mt-1">{formik.errors.fssaiFile}</div>
                  )}
                </div>
              </div>
            </div>

            {/* Bank Details Section */}
            <div className="mb-4">
              <h3 className="text-warning mb-3">Bank Details</h3>
              <div className="row g-3">
                <div className="col-md-4">
                  <label className="form-label">Account Holder Name <span className="text-danger">*</span></label>
                  <input
                    type="text"
                    name="accountHolderName"
                    className={`form-control ${formik.touched.accountHolderName && formik.errors.accountHolderName ? 'is-invalid' : ''}`}
                    {...formik.getFieldProps('accountHolderName')}
                  />
                  {formik.touched.accountHolderName && formik.errors.accountHolderName && (
                    <div className="invalid-feedback">{formik.errors.accountHolderName}</div>
                  )}
                </div>

                <div className="col-md-4">
                  <label className="form-label">Bank Name <span className="text-danger">*</span></label>
                  <input
                    type="text"
                    name="bankName"
                    className={`form-control ${formik.touched.bankName && formik.errors.bankName ? 'is-invalid' : ''}`}
                    {...formik.getFieldProps('bankName')}
                  />
                  {formik.touched.bankName && formik.errors.bankName && (
                    <div className="invalid-feedback">{formik.errors.bankName}</div>
                  )}
                </div>

                <div className="col-md-4">
                  <label className="form-label">Account Number <span className="text-danger">*</span></label>
                  <input
                    type="text"
                    name="accountNumber"
                    className={`form-control ${formik.touched.accountNumber && formik.errors.accountNumber ? 'is-invalid' : ''}`}
                    {...formik.getFieldProps('accountNumber')}
                  />
                  {formik.touched.accountNumber && formik.errors.accountNumber && (
                    <div className="invalid-feedback">{formik.errors.accountNumber}</div>
                  )}
                </div>
              </div>

              {/* IFSC Code with cheque upload */}
              <div className="row mt-3">
                <div className="col-md-8">
                  <label className="form-label">IFSC Code <span className="text-danger">*</span></label>
                  <input
                    type="text"
                    name="ifscCode"
                    className={`form-control ${formik.touched.ifscCode && formik.errors.ifscCode ? 'is-invalid' : ''}`}
                    {...formik.getFieldProps('ifscCode')}
                  />
                  {formik.touched.ifscCode && formik.errors.ifscCode && (
                    <div className="invalid-feedback">{formik.errors.ifscCode}</div>
                  )}
                </div>
                <div className="col-md-4">
                  <label className="form-label">Cancelled Cheque Upload <span className="text-danger">*</span></label>
                  <div className="d-flex align-items-center">
                    <input
                      type="file"
                      id="chequeUpload"
                      onChange={(e) => handleFileChange('chequeFile', e.target.files[0])}
                      className="d-none"
                    />
                    <label htmlFor="chequeUpload" className="btn btn-warning text-white me-2">
                      Choose File
                    </label>
                    <span className="text-muted small">
                      {formik.values.chequeFile ? formik.values.chequeFile.name : 'No file chosen'}
                    </span>
                  </div>
                  {formik.touched.chequeFile && formik.errors.chequeFile && (
                    <div className="text-danger small mt-1">{formik.errors.chequeFile}</div>
                  )}
                </div>
              </div>
            </div>

            <div className="text-center mt-4">
              <button 
                type="submit" 
                className="btn btn-warning px-4 py-2 text-white fw-bold"
                disabled={!formik.isValid || isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                    Processing...
                  </>
                ) : 'Submit Registration'}
              </button>
              
              <div className="mt-3">
                <p>Already have an account? <Link to="/login" className="text-warning text-decoration-none">Login here</Link></p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;
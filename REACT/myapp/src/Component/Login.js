
import ValidationForm from './Validation';
import { useFormik } from 'formik'
function Login() {


    const formik = useFormik({
        initialValues: {
            email: "",
            password: ""
        },
        validationSchema: ValidationForm,
        onSubmit: (values, action) => {
            console.log(values)

            action.resetForm();
        }
    })

    return (
        <>
            <form className="login" onSubmit={formik.handleSubmit}>
                <h1>Login</h1>
                <div>
                    <label>Email</label>
                    <input type="text" name="email" value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                    {formik.errors && formik.touched.email ? <p>{formik.errors.email}</p> : null}
                    <label>Password</label>
                    <input type="password" name="password" value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                    {formik.errors && formik.touched.password ? <p>{formik.errors.password}</p> : null}
                    <button type='submit'>Login</button>
                </div>
            </form>


        </>
    );
}

export default Login;
import React from 'react';
import { useFormik, ErrorMessage } from 'formik';
import { Button,InputDesktop} from '../';

export const Form = (props) => {

    const formik = useFormik({ initialValues: props.initialValues,
    onSubmit: props.onSubmit, validationSchema: props.validationSchema
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            {props.inputFields.map((key,idx) => (<> <InputDesktop 
            key={idx} 
            label={key.label} 
            onChange={(value) => {formik.setFieldValue(key.name,value)}} 
            value={formik.values.email} 
            name={key.name} 
            type={key.type} /> 
           { formik.touched[key.name] && formik.errors[key.name] && <div >{formik.errors[key.name]}</div>}
            </>))
    }

            <Button small blue type='submit' ><div>Submit</div></Button>
        </form>
    );
}
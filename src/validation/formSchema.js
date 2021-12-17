import * as yup from 'yup';


const schema = yup.object().shape({
    name: yup.string().trim().required('Name is required').min(2,"name must be at least 2 characters"),
    size: yup.string().required('sauce is required'),
    pepperoni: yup.boolean(),
    sausage: yup.boolean(),
    onion: yup.boolean(),
    mushroom: yup.boolean(),
    instructions: yup.string()
})

export default schema;
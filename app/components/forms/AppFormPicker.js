import { useFormikContext } from "formik";

import AppPicker from '../AppPicker';
import ErrorMessage from './ErrorMessage';

function AppFormPicker({
  items,
  name,
  numberofColumns,
  PickerItemComponent,
  placeholder,
  width })
{
  const { errors, setFieldValue, touched, values } = useFormikContext();
  
  return (
    <>
      <AppPicker
        items={items}  
        onSelectItem={(item) => setFieldValue(name, item)}
        PickerItemComponent={PickerItemComponent}
        placeholder={placeholder}
        numberofColumns={numberofColumns}
        selectedItem={values[name]}
        width={width}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]}/>
    </>
  );
}

export default AppFormPicker;
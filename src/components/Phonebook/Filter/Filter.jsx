import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/Slicers/filterSlice';
import { selectContactsFilter } from 'redux/selectors';

import { Form, Input, Label } from './Filter.styled';

const Filter = () => {
  const value = useSelector(selectContactsFilter);

  const onChangeHandle = e => dispatch(setFilter(e.currentTarget.value));
  const dispatch = useDispatch();

  return (
    <Form>
      <Label htmlFor="contactsFilter">Find contacts by name </Label>

      <Input
        id="contactsFilter"
        type="text"
        name="filter"
        value={value}
        onChange={onChangeHandle}
        autoComplete="off"
      />
    </Form>
  );
};

export default Filter;

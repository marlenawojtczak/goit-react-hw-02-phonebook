import PropTypes from 'prop-types';
import { Form, Label, Input } from './Filter.styled';

const Filter = ({ value, onChangeFilter }) => {
  return (
    <Form>
      <Label>
        Find contacts by name
        <Input type="text" value={value} onChange={onChangeFilter} />
      </Label>
    </Form>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func.isRequired,
};

export default Filter;

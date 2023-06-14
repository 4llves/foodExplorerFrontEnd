import { FiPlus, FiX } from 'react-icons/fi';

import { Container, Content } from './styles';

export function Ingredient({ isNew = false, value, onClick, ...rest }) {
  return (
    <Container>
      <Content isNew={isNew}>
        <input
          type="text"
          value={value}
          readOnly={!isNew}
          {...rest}
        />

        <button
          type="button"
          onClick={onClick}
        >
          {isNew ? <FiPlus /> : <FiX />}
        </button>

      </Content>
    </Container>
  )
}
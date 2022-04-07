
import { ButtonContainer } from './button.elements';

const Button = ({ label, variant, primary, onClick }) => {
  return (
    <ButtonContainer onClick={onClick} primary={primary} variant={variant}>
      {label}
    </ButtonContainer>
  )
}

export default Button
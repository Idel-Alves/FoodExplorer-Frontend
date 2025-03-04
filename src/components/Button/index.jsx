import { Container } from "./styles";

export function Button({ title, icon: Icon, loading = false, ...rest }) {
  return (
    <Container disabled={loading} {...rest}>
      {Icon && <Icon size={30} />}
      {title}
    </Container>
  )
}
import { Container } from './styles'

// eslint-disable-next-line react/prop-types
export function Button({ title, loading = false, ...rest }) {
  return (
    // eslint-disable-next-line react/prop-types
    <Container 
        type='button'
        disabled={loading}
        {...rest}
    >
        {loading ? 'Carregando...' : title}
    </Container>
  )
}

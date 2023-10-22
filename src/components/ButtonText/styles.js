import styled from 'styled-components';

export const Container = styled.button`
    border: none;
    color: ${({ theme, $isactive }) => $isactive === true ? theme.COLORS.ORANGE : theme.COLORS.GRAY_100};
    background: none;
    font-size: 16px;
`
import styled from "styled-components";

export const Container = styled.header`
    background: var(--blue);
`;

export const Content = styled.div`
    width: 1152px;
    margin: 0 auto;

    padding: 2rem 1rem 10rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    button {
        font-size: 1rem;
        font-weight: 600;
        padding: 0 2rem;
        height: 3rem;
        border-radius: 0.25rem;
        border: none;

        background: var(--blue-light);
        color: var(--shape);
        transition: 0.2s;
    }

    button:hover {
        filter: brightness(0.9);
    }
`;
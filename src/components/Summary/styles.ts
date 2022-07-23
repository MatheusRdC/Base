import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    margin-top: -4.25rem;

    div {
        background: var(--shape);
        color: var(--text-title);
        height: 8.5rem;
        padding: 1.5rem 1.25rem 1rem 2rem;
        border-radius: 0.25rem;

        header {
            display: flex;
            align-items: center;
            justify-content: space-between;

            font-size: 1rem;
        }

    strong {
        display: block;
        font-size: 2rem;
        font-weight: 400;
        margin-top: 1rem;
    }

    &:last-child {
        background: var(--green);
        color: var(--shape);
    }
    }
`;
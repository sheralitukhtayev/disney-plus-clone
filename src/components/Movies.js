import React from 'react'
import styled from 'styled-components'

function Movies() {
  return (
    <Container>
        <h4>Recommended for You</h4>
        <Content>
            <Wrap>
                <img src="/images/rec-coco.jpg" />
            </Wrap>
            <Wrap>
                <img src="/images/rec-walle.jpg" />
            </Wrap>
            <Wrap>
                <img src="/images/rec-inside.png" />
            </Wrap>
            <Wrap>
                <img src="/images/rec-luca.jpg" />
            </Wrap>
            <Wrap>
                <img src="/images/rec-ralph.jpg" />
            </Wrap>
            <Wrap>
                <img src="/images/rec-rapunsel.jpg" />
            </Wrap>
            <Wrap>
                <img src="/images/rec-red.jpg" />
            </Wrap>
            <Wrap>
                <img src="/images/rec-soul.jpg" />
            </Wrap>
        </Content>
    </Container>
  )
}

export default Movies

const Container = styled.div `
    overflow-x: hidden;

`

const Content = styled.div `
    display: grid;
    grid-gap: 50px;
    grid-template-columns: repeat(4, minmax(0, 1fr))

`

const Wrap = styled.div `
    border-radius: 10px;
    cursor: pointer;
    overflow: hidden;
    border: 3px solid rgba(249, 249, 249, 0.1);
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
    

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    &:hover {
        transform: scale(1.0005);
        border-color: rgba(249, 249, 249, 0.8);
        box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
        rgb(0 0 0 / 72%) 0px 30px 22px -10px;
    }

`
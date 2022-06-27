import React from 'react'
import styled from 'styled-components'

function Login() {
  return (
    <Container>
        <Content>
            <CTA>
                <CTALogoOne src="/images/cta-logo-one.svg" />
                <SignUp>
                    GET ALL THERE
                </SignUp>
                <Description>
                    Get Premier Access to Raya and the Last Dragon for you with a Disney+ subscription. As of 27/06/22, the price of subscription and The Disney Bundle  will increase by $1.
                </Description>
                <CTALogoTwo src="/images/cta-logo-two.png" />
            </ CTA>
        </Content>
    </Container>
  )
}

export default Login

const Container = styled.div `  
    position: relative;
    height: calc(100vh - 70px);
    width: calc(100vw - 40px);
    display: flex;
    align-items: top;
    justify-content: center;


    &:before {
        background-position: top;
        background-size: cover;
        background-repeat: no-repeat;
        background: url("/images/login-background.jpg") center center / cover no-repeat fixed;
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;  
        opacity: 0.7; 
        z-index: -1;
        width: 100vw;
    
      }
`

const Content = styled.div `
    width: calc(100vw - 20px);
    margin-top: 100px;

`

const CTA = styled.div `
    width: 80%;
    padding: 80px 40px; 
    max-width: 850px;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    align-items: center;

`

const CTALogoOne = styled.img `


`

const SignUp = styled.a`
    width: 100%;
    background-color: #0063e5;
    font-weight: bold;
    padding: 17px 0;
    color: #f9f9f9;
    border-radius: 4px;
    text-align: center;
    font-size: 18px;
    cursor: pointer;
    transition: all 250ms;
    letter-spacing: 1.5px;
    margin-top: 8px;
    margin-bottom: 12px;

    &:hover {
        background: #0483ee;
    }

`

const Description = styled.p `
    font-size: 11px;
    letter-spacing: 1.5px;
    text-align: center;
    line-height: 1.5;
`

const CTALogoTwo = styled.img `
    width: 90%;

`
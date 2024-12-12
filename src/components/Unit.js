import { styled } from 'styled-components'

export function Unitslide () {
    return (
        <Div>
            <SliderWrapper>
                <LinkWrapper href="/">
                    <SliderLabel>
                        디자인
                        <AllowWrapper>
                            <path d="M8.97 4.47a.75.75 0 0 1 1.06 0L17.56 12l-7.53 7.53a.75.75 0 1 1-1.06-1.06L15.44 12 8.97 5.53a.75.75 0 0 1 0-1.06" clip-rule="evenodd" fill-rule="evenodd"></path>
                        </AllowWrapper>
                    </SliderLabel>
                </LinkWrapper>
                <SliderButtonWrapper>
                    <ButtonWrapper>
                        <SliderButton>
                            <PreButtonSpan>
                                <svg xmlns="http://www.w3.org/2000/svg" class="svg css-uwwqev" viewBox="0 0 5 9"><path stroke="currentColor" d="M1 1l3 3.5L1 8" fill="none" fill-rule="evenodd"></path></svg>
                            </PreButtonSpan>
                        </SliderButton>
                    </ButtonWrapper>
                    <ButtonWrapper>
                        <SliderButton>
                            <NextButtonSpan>
                                <svg xmlns="http://www.w3.org/2000/svg" class="svg css-uwwqev" viewBox="0 0 5 9"><path stroke="currentColor" d="M1 1l3 3.5L1 8" fill="none" fill-rule="evenodd"></path></svg>
                            </NextButtonSpan>
                        </SliderButton>
                    </ButtonWrapper>
                </SliderButtonWrapper>
            </SliderWrapper>
            <UnitlistWrapper>
                <UnitWrapper>
                </UnitWrapper>
            </UnitlistWrapper>
        </Div>
    )
}
const Div = styled.div`
display: block;
align-items: center;
justify-content: center;
`

const SliderWrapper = styled.div`
display: flex;
height: 60px;
justify-content: space-between;
margin: 18px 10px 18px 10px;
color: #fff;
`

const LinkWrapper = styled.div`
text-decoration: none;
`

const SliderLabel = styled.div`
display: flex;
align-items: center;
color: #fff;
font-weight: 700;
line-height: 125%;
letter-spacing: 0.02em;
font-size: 1.25rem;
margin: 0;
padding: 0;
`

const AllowWrapper = styled.svg`
margin-left: 5px;
vertical-align: middle;
height: 24px;
width: 24px;
fill: currentColor;
user-select: none;
pointer-events: none;
`
const SliderButtonWrapper = styled.div`
display: flex;
`

const ButtonWrapper = styled.div`
margin-left: 10px;
`

const SliderButton = styled.button`
cursor: pointer;
pointer-events: none;
padding: 0;
border: none;
border-radius: 50%;
font: inherit;
background-color: rgb(50, 50, 54);
position: relative;
width: 30px;
height: 30px;
display: flex;
align-items: center;
justify-content: center;
margin: 0;
vertical-align: middle;
white-space: normal;
outline: none;
user-select: none;
appearance: none;
`

const PreButtonSpan = styled.span`
color: #fff;
fill: #fff;
transform: scaleX(-1);
padding-left: 10px;
opacity: 0.5;
z-index: 1;
display: flex;
line-height: 0;
width: 18px;
height: 18px;
cursor: default;
pointer-events: none;
`

const NextButtonSpan = styled.span`
color: #fff;
fill: #fff;
opacity: 1;
z-index: 1;
display: flex;
padding-left: 10px;
line-height: 0;
width: 18px;
height: 18px;
cursor: default;
pointer-events: none;
`

const UnitlistWrapper = styled.div`
display: flex;
box-sizing: content-box;
height: 100%;
position: relative;
transform: translateZ(0);
transition-property: transform;
transition-timing-function: initial;
width: 100%;
z-index: 1;
`

const UnitWrapper = styled.div`
width: 163px;
margin-right: 20px;
backface-visibility: hidden;
transform: translateZ(0);
height: auto;
display: block;
flex-shrink: 0;
position: relative;
transition-property: transform;
`
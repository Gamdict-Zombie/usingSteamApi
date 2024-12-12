import { styled } from 'styled-components'

export function LectureUnit () {
    return (
        <div>
            <UnitLink href='/'>
                <UnitLayout>
                    <UnitImgWrapper>
                        <UnitImag />
                    </UnitImgWrapper>
                    <UnitDetailWrapper>
                        <UnitCategoryLabel>디자인</UnitCategoryLabel>
                        <UnitTitle>강의 타이틀</UnitTitle>
                        <UnitInstructor>강사 이름</UnitInstructor>
                    </UnitDetailWrapper>
                </UnitLayout>
            </UnitLink>
            <UnitWishlistWrapper>
                <WishlistButton>추가</WishlistButton>
            </UnitWishlistWrapper>
        </div>
    )
}

const UnitLink = styled.a`
position: relative;
display: block;
`

const UnitLayout = styled.div`
display: flex;
flex-direction: column;
height: 100%;
margin-bottom: 10px;
`

const UnitImgWrapper = styled.div`
width: 100%;
overflow: hidden;
margin-bottom: 10px;
border-radius: 8px;
height: 100%;
position: relative;
`
const UnitImag = styled.img`
width: 100%;
height: 100%;
position: absolute;
padding-bottom: calc(133.333%);
background: linear-gradient(rgb(32. 32. 36), rgb(24, 24, 28));
overflow: hidden;
border-radius: 8px;
`

const UnitDetailWrapper = styled.div`
display: flex;
flex-grow: 1;
flex-shrink: 0;
`

const UnitCategoryLabel = styled.span`
color: rgba(255, 255, 255, 0.65);
font-size: 0.75rem;
line-height: 150%;
font-weight: 400;
letter-spacing: 0.02em;
margin: 0;
padding: 0;
`

const UnitTitle = styled.span`
margin: 5px 0 5px 0;
color: #fff;
font-size: 1rem;
font-weight: 700;
letter-spacing: 0.02em;
line-height: 125%;
padding: 0;
`

const UnitInstructor = styled.span`
margin-top: 10px 0 0 0;
padding: 0;
display: flex;
flex-direction: row;
align-items: center;
flex-wrap: wrap;
color: #fff;
font-weight: 400;
letter-spacing: 0.02em;
font-size: 0.875rem;
line-height: 140%;
`

const UnitWishlistWrapper = styled.div`
position: absolute;
top: 0px;
right: 0px;
transition: opacity 125ms ease-in-out;
opacity: 0;
z-index: 1;
`

const WishlistButton = styled.button`
position: relative;
color: #fff;
width: 44px;
height: 44px;
display: flex;
align-items: center;
justify-content: center;
margin: 0;
border: 0;
padding: 0;
vertical-align: middle;
white-space: normal;
background: none;
`
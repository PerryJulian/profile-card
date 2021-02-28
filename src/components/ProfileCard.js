import React from 'react'
import styled from 'styled-components'
import bgImage from '../assets/bg-pattern-card.svg'
import profileImage from '../assets/image-victor.jpg'

const Card = styled.div`
    background-color: #ffffff;
    border-radius: 15px;
    box-shadow: 0px 50px 100px -20px rgba(8, 70, 94, 0.504835);
    font-family: Kumbh Sans;
    position: relative;
    margin: auto;
    max-height: 374px;
    max-width: 350px;
    min-width: 326px;
    z-index: 10;
`

const HeaderImage = styled.img`
    border-radius: 15px 15px 0 0;
    height: 140px;
    width: 100%;
`

const ProfileImageContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-top: -60px;
`

const ProfileImage = styled.img`
    border-radius: 50%;
    border: 5px solid white;
`

const Bio = styled.div`
    text-align: center;
`

const BioTop = styled.div`
    font-size: 18px;
    line-height: 18px;
    margin-top: 25px;
`

const Name = styled.span`
    font-weight: 700;
`

const Age = styled.span`
`

const Hometown = styled.div`
    font-size: 14px;
    margin-top: 10px;
    padding-bottom: 30px;
    border-bottom: 1px solid #E8E9EC;
`

const SocialBar = styled.div`

    display: flex;
    justify-content: space-evenly;
    padding: 25px 0;
`

const SocialBarItem = styled.div`
    text-align: center;
`

const SocialCount = styled.div`
    font-size: 18px;
    line-height: 18px;
    font-weight: 700;
`

const SocialTitle = styled.div`
    font-size: 10px;
    line-height: 10px;
    margin-top: 10px;
`

function ProfileCard(props) {
    return (
        <>
            <Card>

                <HeaderImage src={bgImage} alt=""/>
                <ProfileImageContainer>
                    <ProfileImage src={profileImage} alt="profile image"/>
                </ProfileImageContainer>
                <Bio>
                    <BioTop>
                        <Name>{props.data.firstName} {props.data.lastName}</Name>
                        <Age> {props.data.age}</Age>
                    </BioTop>
                    <Hometown>
                        {props.data.hometown}
                    </Hometown>
                </Bio>
                <SocialBar>
                    <SocialBarItem>
                        <SocialCount>
                            {props.data.followersCount}
                        </SocialCount>
                        <SocialTitle>
                            Followers
                        </SocialTitle>
                    </SocialBarItem>
                    <SocialBarItem>
                        <SocialCount>
                            {props.data.likesCount}
                        </SocialCount>
                        <SocialTitle>
                            Likes
                        </SocialTitle>
                    </SocialBarItem>
                    <SocialBarItem>
                        <SocialCount>
                            {props.data.photosCount}
                        </SocialCount>
                        <SocialTitle>
                            Photos
                        </SocialTitle>
                    </SocialBarItem>
                </SocialBar>
            </Card>
        </>
    )
}

export default ProfileCard
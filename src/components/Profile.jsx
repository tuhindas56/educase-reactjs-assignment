import styled from "styled-components"

const Heading = styled.h1`
  padding: 1.4rem 1.2rem;
  width: 100%;
  font-size: 1.2rem;
  background-color: white;
`
const Wrapper = styled.div`
  padding-bottom: 1.2rem;
  border-bottom: 2px dashed #cbcbcb;
`

const ProfileCard = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.2rem;

  h2 {
    font-weight: 500;
  }

  h2,
  p {
    font-size: 1rem;
  }

  a {
    position: relative;
    border-radius: 50%;
  }

  .avatar {
    height: 60px;
    aspect-ratio: 1;
    object-fit: cover;
    border-radius: 50%;
  }

  .cameraIcon {
    position: absolute;
    bottom: 0;
    right: -8px;
    height: 24px;
    width: 24px;
  }
`

function Profile() {
  return (
    <Wrapper>
      <Heading>Account Settings</Heading>

      <ProfileCard>
        <a href="#">
          <img src="/pfp.webp" alt="Profile photo" className="avatar" />
          <img src="/cam.svg" alt="" className="cameraIcon" />
        </a>
        <div>
          <h2>Marry Doe</h2>
          <p>marry@gmail.com</p>
        </div>
      </ProfileCard>

      <p style={{ paddingInline: "1.2rem" }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur,
        quis ex quasi ipsa neque molestiae necessitatibus, blanditiis aliquid
        esse, excepturi maiores alias soluta!
      </p>
    </Wrapper>
  )
}
export default Profile

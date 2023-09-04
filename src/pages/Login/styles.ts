import styled from 'styled-components';
import wallpaper from '../../assets/imgs/wallpaper1.jpg';

export const Container = styled('main')`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  font-family: 'Raleway', sans-serif;
  background-image: linear-gradient(
      0deg,
      rgba(200, 200, 200, 0.7),
      rgba(200, 200, 200, 0.7)
    ),
    url(${wallpaper});
`;

export const Content = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 3rem;
  width: 30vw;
  background: rgba(255, 255, 255, 0.5);
  box-shadow: 0 8px 32px 0 rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(8.5px);
  -webkit-backdrop-filter: blur(8.5px);
  border-radius: 10px;
  color: #ffffff;
  text-transform: uppercase;
  letter-spacing: 0.4rem;
  row-gap: 1.5rem;
`;

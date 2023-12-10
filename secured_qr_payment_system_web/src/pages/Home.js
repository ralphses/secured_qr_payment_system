import styled, { keyframes } from 'styled-components';
import { useEffect } from 'react';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const PageWrapper = styled.div`
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const ContentWrapper = styled.div`
  text-align: center;
`;

const AppName = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  font-family: 'Arial', sans-serif;
  margin-bottom: 1rem;
  animation: ${fadeIn} 2s ease-in;
`;

const Subtitle = styled.p`
  font-size: 1.25rem;
  color: #333;
  margin-bottom: 2rem;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
`;

const CreateQRButton = styled.a`
  padding: 1rem 2rem;
  border-radius: 0.25rem;
  background-color: #4a90e2;
  color: #ffffff;
  font-size: 1rem;
  text-decoration: none;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #336699;
  }
`;

const LearnMoreLink = styled.a`
  font-size: 1rem;
  color: #333;
  text-decoration: none;
  display: flex;
  align-items: center;
  transition: color 0.3s ease;

  &:hover {
    color: #4a90e2;
  }

  span {
    margin-left: 0.25rem;
  }
`;

export default function Example() {
  useEffect(() => {
    localStorage.clear();
  }, []);

  return (
      <PageWrapper>
        <ContentWrapper>
          {/*<LogoImage src="src/cbn.png" alt="Logo" />*/}
          <AppName>CBN Secured QR Code Platform</AppName>
          <Subtitle>Welcome to the platform for secured QR code generation.</Subtitle>
          <ButtonContainer>
            <CreateQRButton href="/qr/create">Create QR Code</CreateQRButton>
            <LearnMoreLink href="/services">
              Learn more <span aria-hidden="true">→</span>
            </LearnMoreLink>
          </ButtonContainer>
        </ContentWrapper>
      </PageWrapper>
  );
}

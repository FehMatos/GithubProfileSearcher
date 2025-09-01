import styled from "styled-components";

const FooterWrapper = styled.footer`
  color: #333533;
  padding: 20px;
  font-size: 14px;
  background: linear-gradient(to right, #ff7b00, #ffa200);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30%;
  position: fixed;
  bottom: 0;
  left: 35%; /* centralizado: (100% - 30%) / 2 */
  transition: all 0.5s ease;
  border-radius: 8px;
  margin-bottom: 40px;

  a {
    color: #fff7d1;
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 8px; /* espaço entre SVG e texto */
  }

  svg {
    width: 20px;
    height: 20px;
    stroke: currentColor;
    transition: transform 0.3s ease, stroke 0.3s ease;
  }

  a:hover {
    color: #d0d0d0;
  }

  &:hover {
    width: 100%;
    left: 0;
  }
`;

export default function FehFooter() {
  return (
    <FooterWrapper>
      <a href="https://fehmatos.com/" target="_blank" rel="noopener noreferrer">
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M14 15.6672C13.475 15.8812 12.8952 16 12.2857 16C9.91878 16 8 14.2091 8 12C8 9.79086 9.91878 8 12.2857 8C12.8952 8 13.475 8.11876 14 8.33283"
            stroke="#fff"
            strokeWidth="1.5"
            strokeLinecap="round"
          ></path>
          <path
            d="M7 3.33782C8.47087 2.48697 10.1786 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 10.1786 2.48697 8.47087 3.33782 7"
            stroke="#fff"
            strokeWidth="1.5"
            strokeLinecap="round"
          ></path>
        </svg>
        2025 Felipe Matos
      </a>
    </FooterWrapper>
  );
}

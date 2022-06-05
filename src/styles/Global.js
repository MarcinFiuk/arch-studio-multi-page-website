import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
:root{
--fontWeight-500:500;
--fontWeight-700:700;

--veryDarkBlue:hsl(225,13%,12%);
--darkGrey:hsl(226,6%,40%);
--mediumGrey: hsl(223,7%,53%);
--lightGrey:hsl(225,17%,82%);
--veryLightGrey:hsl(230,21%,95%);
--red:hsl(0,68%,61%);
--white:hsl(0,0%,100%);

--mainPaddingMobile:32px
}

body{
    font-family: 'League Spartan', sans-serif;
    max-width:1440px;
    margin-inline:auto;
}
`;

/*
@media (min-width: 48rem)
@media(min-width: 64rem)

*/

import styled from 'styled-components'

export const MenuItemDescription = styled.div`
    font-size: 18px;
    max-height: 200px;
    overflow: hidden;
    color: #777;
    font-style: italic;
`;

export const MenuItemSpan = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin: 10px 0px;
`;

export const MenuItemPrice = styled.div`
    font-size: 32px;
    color: green;
    ${'' /* background-color: #f4f4f4;
    border-radius: 8px;
    border: green 2px dashed; */}
    padding: 3px;
    margin-left: 5px;
`;

export const MenuItemLocation = styled.div`
font-size: 24px;
`;

export const MenuItemPhoto = styled.img`
width: 300px;
height: 300px;
object-fit: cover;
border-radius: 8px;


@media only screen and (max-width: 750px) {
    width: 100%;
}
`;

export const MenuItemDetails = styled.div`
width: 100%;
max-width: 600px;
margin-left: 20px;
display: flex;
flex-direction: column;
justify-content: space-between;

@media only screen and (max-width: 750px) {
    margin: 0px;

}
`;

export const MenuItemTitle = styled.div`
font-size: 32px;
`;





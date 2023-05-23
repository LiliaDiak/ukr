const element = document.querySelector('.technology__top');
element.style.cssText=`
background-image:url(images/Fanatic_RayAirPocket_DJI_0638_Sigmund.jpg);
`;
const getcompstyle=getComputedStyle(element);
console.log(getcompstyle.backgroundImage);
console.log(element.style.cssText);
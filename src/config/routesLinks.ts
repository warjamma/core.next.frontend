const landingRoot = "/";
const findYourHome = "find-your-home";
const roomType = "room-type";
const blogs = "blogs";
const faq = "faq";
const contact = "contact";
const arrival = "arrival";
const minimumStay = "minimum-stay";
const roomsForRent = "rooms-for-rent";
const roomTypeAppointment = "room-type-appointment";

const routeLinks = {
    landingRoot: landingRoot,
    findYourHome: `${landingRoot}${findYourHome}`,
    arrival: `${landingRoot}${findYourHome}/${arrival}`,
    minimumStay: `${landingRoot}${findYourHome}/${minimumStay}`,
    roomsForRent: `${landingRoot}${findYourHome}/${roomsForRent}`,
    roomsAppointmentSummary: `${landingRoot}${findYourHome}/${roomTypeAppointment}/:id`,
    roomTypeDetail: `${landingRoot}${roomType}/:id`,
    faq: `${landingRoot}${faq}`,
    contact: `${landingRoot}${contact}`,
    blogs: `${landingRoot}${blogs}`,
    blogsId: `${landingRoot}${blogs}/:id`,
};

export default routeLinks;

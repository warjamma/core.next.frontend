export interface ICreateAppointmentRequest {
    fullName: string;
    phoneNumber: string;
    email: string;
    roomTypeId: string;
    dateExpectedIn: string;
    dateArrival: string;
    minimumStay: string;
}

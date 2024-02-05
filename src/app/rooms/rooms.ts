export interface Room {
    totalRoom?: number;
    avaliableRoom?: number;
    bookedRoom?: number;
}

export interface RoomList {
    roomType : string;
    amenities : string;
    price: number;
    photo: string;
    checInDate: Date;
    checkOutDate: Date;
}
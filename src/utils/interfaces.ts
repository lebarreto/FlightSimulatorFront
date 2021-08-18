interface IPosition {
    latitude: number;
    longitude: number;
    altitude: number;
}

export interface IPort {
    id: string;
    name: string;
    position: IPosition;
    country: string;
    state: string;
    municipality: string;
}

export interface Position {
    longitude: number;
    latitude: number;
}

interface IPlansLocation {
    id: string;
    coordinate: IPosition;
}

interface ITakeOffTime {
    sec: number;
    min: number;
    month: number;
    hour: number;
    year: number;
    day: number;
}

export interface IPlans {
    // id: string;
    aircraftCode: string;
    aircraftType: string;
    departureLocation: IPlansLocation;
    arrivalLocation: IPlansLocation;
    takeoffTime: ITakeOffTime;
}

export type Room = {
  Building: string;
  Name: string;
  RoomId: string;
  Ds1: string[];
  Ds2: string[];
  Ds3: string[];
  Ds4: string[];
  Ds5: string[];
  Ds6: string[];
  Ds7: string[];
  Ds8: string[];
  Ds9: string[];
  Ds10: string[];
};

type DS = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;

export function getLecturesForPeriod(room: Room, ds: number) {
    switch (ds) {
        case 1:
            return room.Ds1;
            break;
        case 2:
            return room.Ds2;
            break;
        case 3:
            return room.Ds3;
            break;
        case 4:
            return room.Ds4;
            break;
        case 5:
            return room.Ds5;
            break;
        case 6:
            return room.Ds6;
            break;
        case 7:
            return room.Ds7;
            break;
        case 8:
            return room.Ds8;
            break;
        case 9:
            return room.Ds9;
            break;
        case 10:
            return room.Ds10;
            break;
            
        default:
        return []
            break;
    }
}

function isDuringDs(ds: DS, date: Date) {
  const dsBegin = new Date(date.getTime());
  dsBegin.setHours(7, 10);
  dsBegin.setMinutes(dsBegin.getMinutes() + 110 * (ds - 1));
  const dsEnd = new Date(date.getTime());
  dsEnd.setHours(9, 0);
  dsEnd.setMinutes(dsEnd.getMinutes() + 110 * (ds - 1));

  if (date >= dsBegin && date <= dsEnd) {
    return true;
  } else {
    return false;
  }
}
export function getCurrentDs(date: Date) {
  let getCurrentDs = "";
  // find current DS
  if (isDuringDs(1, date)) {
    getCurrentDs = 1;
  } else if (isDuringDs(2, date)) {
    getCurrentDs = 2;
  } else if (isDuringDs(3, date)) {
    getCurrentDs = 3;
  } else if (isDuringDs(4, date)) {
    getCurrentDs = 4;
  } else if (isDuringDs(5, date)) {
    getCurrentDs = 5;
  } else if (isDuringDs(6, date)) {
    getCurrentDs = 6;
  } else if (isDuringDs(7, date)) {
    getCurrentDs = 7;
  } else if (isDuringDs(8, date)) {
    getCurrentDs = 8;
  } else if (isDuringDs(9, date)) {
    getCurrentDs = 9;
  } else if (isDuringDs(10, date)) {
    getCurrentDs = 10;
  } else {
    getCurrentDs = 0;
  }
  return getCurrentDs;
}

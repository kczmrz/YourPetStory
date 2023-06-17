import EventType from "./EventType";

type EventTypes = {
  eventType: EventType;
  price: number;
  additionalNotes?: object;
};

export default EventTypes;

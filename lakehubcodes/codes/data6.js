let restaurant = {
  name: "livens",
  guestCapacity: 75,
  guestCount: 0,
  checkAvailability(partySize) {
    let seatsLeft = this.guestCapacity - this.guestCount;
    return partySize <= seatsLeft;
  },
  seatParty: function (partySize) {
    this.guestCount = this.guestCount + partySize;
  },
  removeParty: function (partySize) {
    this.guestCount = this.guestCount - partySize;
  },
};

restaurant.seatParty(50);

console.log(restaurant.guestCount);
restaurant.removeParty(2);
console.log(restaurant.checkAvailability(26));

var denis = restaurant.checkAvailability(26);

console.log(denis); // true

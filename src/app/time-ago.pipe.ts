import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeAgo'
})
export class TimeAgoPipe implements PipeTransform {

  transform(value: Date) {
    var lastSeen: string = "";
    let now: any = new Date().valueOf(); //current time

    let secondsPassed = (now - value.getTime()) / 1000; //time passed in second

    if (secondsPassed < 60) {
      lastSeen = `${Math.floor(secondsPassed)} seconds ago `; // last seen in seconds
    } else if (secondsPassed < 3600) {
      lastSeen = `${Math.floor(secondsPassed / 60)} minutes ago`; //last seen in minutes
    } else if (secondsPassed < 86400) {
      lastSeen = `${Math.floor(secondsPassed / 3600)} hours ago`; //last seen in hours
    } else if (secondsPassed < 2592000) {
      lastSeen = `${Math.floor(secondsPassed / 86400)} days ago`; //last seen in days
    } else {
      lastSeen = `${Math.floor(secondsPassed / 2592000)} months ago`;
    }
    return lastSeen;
  }

}

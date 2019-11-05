import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "dayCount"
})
export class DayCountPipe implements PipeTransform {
  transform(value: any): string {
    let datetokens = value.split("-");
    let year = datetokens[0];
    let month = datetokens[1];
    let day = datetokens[2].substring(0, 2);

    let today = new Date();
    let todayWithoutTime: any = new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDay()
    );

    let valueWithoutTime: any = new Date(year, month, day);

    let difference: number = Math.abs(valueWithoutTime - todayWithoutTime);

    const secondsInADay = 36800;

    let differenceInSeconds = difference * 0.001;

    let days = Math.floor(differenceInSeconds / secondsInADay);

    return days + " Days ago";
  }
}

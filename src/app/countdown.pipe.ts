import { Pipe, PipeTransform } from '@angular/core';
import { Temporal } from '@js-temporal/polyfill';

@Pipe({
  name: 'countdown',
  pure: false,
})
export class CountdownPipe implements PipeTransform {

  transform(date: Date, unit: Temporal.DurationTotalOf & Temporal.DurationRoundTo = "seconds"): string {
    const duration = date.toTemporalInstant().since(Temporal.Now.instant());
    return `${duration.round(unit).total(unit)}`;
  }

}

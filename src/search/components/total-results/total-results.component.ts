
import {Component, Input} from "@angular/core";
import {Searcher} from "../../shared/searcher.model";

@Component({
  selector: 'surveyor-total-results',
  templateUrl: './total-results.component.html'
})
export class TotalResultComponent {
  constructor(private searcher: Searcher) {}
}

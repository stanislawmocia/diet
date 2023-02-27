import { Component, OnInit } from '@angular/core';
import { DietService } from 'src/service/diet.service';

@Component({
  selector: 'app-import-export-panel',
  templateUrl: './import-export-panel.component.html',
  styleUrls: ['./import-export-panel.component.scss']
})
export class ImportExportPanelComponent implements OnInit {
  public json: string = '';

  constructor(private dietService: DietService) {
  }

  ngOnInit(): void {
    this.json = this.exportDiet();
  }

  public exportDiet(): string {
    return this.dietService.exportPersonToJson().trim();
  }

  public importDiet(): void {
    this.dietService.importPersonFromJson(this.json);
  }
}

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzTableModule } from 'ng-zorro-antd/table';

import { Component, OnInit } from '@angular/core';
import { AtividadesModule } from './atividades.module';
import { DatePipe } from '@angular/common';
import { Observable, Subscription } from 'rxjs';

interface Atividade {
  id: number;
  name: string;
  description: string;
  start_date: Date;
  end_date: Date;
}

@Component({
  selector: 'AtividadesComponent',
  standalone: true,
  templateUrl: './atividades.component.html',
  styleUrls: ['./atividades.component.scss'],
  imports: [NzTableModule, NzButtonModule, NzIconModule, DatePipe],
})
export class AtividadesComponent implements OnInit {
  $atividades!: Observable<Atividade[]>;
  listOfSelection = [
    {
      text: 'Select All Row',
      onSelect: () => {
        this.onAllChecked(true);
      },
    },
    {
      text: 'Select Odd Row',
      onSelect: () => {
        this.listOfCurrentPageData.forEach((data, index) =>
          this.updateCheckedSet(data.id, index % 2 !== 0),
        );
        this.refreshCheckedStatus();
      },
    },
    {
      text: 'Select Even Row',
      onSelect: () => {
        this.listOfCurrentPageData.forEach((data, index) =>
          this.updateCheckedSet(data.id, index % 2 === 0),
        );
        this.refreshCheckedStatus();
      },
    },
  ];
  checked = false;
  indeterminate = false;
  listOfCurrentPageData: readonly Atividade[] = [];
  listOfData: Atividade[] = [];
  setOfCheckedId = new Set<number>();

  constructor() {}

  ngOnInit(): void {
    this.$atividades.subscribe((data) => {
      this.listOfData = data;
      this.listOfCurrentPageData = this.listOfData;
    });
  }

  updateCheckedSet(id: number, checked: boolean): void {
    if (checked) {
      this.setOfCheckedId.add(id);
    } else {
      this.setOfCheckedId.delete(id);
    }
  }

  onItemChecked(id: number, checked: boolean): void {
    this.updateCheckedSet(id, checked);
    this.refreshCheckedStatus();
  }

  onAllChecked(value: boolean): void {
    this.listOfCurrentPageData.forEach((item) =>
      this.updateCheckedSet(item.id, value),
    );
    this.refreshCheckedStatus();
  }

  onCurrentPageDataChange($event: readonly Atividade[]): void {
    this.listOfCurrentPageData = $event;
    this.refreshCheckedStatus();
  }

  refreshCheckedStatus(): void {
    this.checked = this.listOfCurrentPageData.every((item) =>
      this.setOfCheckedId.has(item.id),
    );
    this.indeterminate =
      this.listOfCurrentPageData.some((item) =>
        this.setOfCheckedId.has(item.id),
      ) && !this.checked;
  }

}

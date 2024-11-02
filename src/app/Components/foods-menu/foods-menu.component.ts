import { Component, ViewChild } from '@angular/core';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { FoodsCardsViewComponent } from './foods-cards-view/foods-cards-view.component';
import { FoodsTableViewComponent } from './foods-table-view/foods-table-view.component';
import { RadioButtonModule } from 'primeng/radiobutton';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { CommonModule, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { DividerModule } from 'primeng/divider';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { ItemsService } from '../../Core/Services/items.service';
import { DialogModule } from 'primeng/dialog';
import { FileUploadModule } from 'primeng/fileupload';
import { DropdownModule } from 'primeng/dropdown';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputTextareaModule } from 'primeng/inputtextarea';
@Component({
  selector: 'app-foods-menu',
  standalone: true,
  imports: [
    IconFieldModule,
    InputIconModule,
    InputTextModule,
    FoodsCardsViewComponent,
    FoodsTableViewComponent,
    RadioButtonModule,
    FormsModule,
    CommonModule,
    DividerModule,
    TableModule,
    ButtonModule,
    TitleCasePipe,
    DialogModule,
    FileUploadModule,
    ReactiveFormsModule,
    FormsModule,
    DropdownModule,
    InputGroupModule,
    InputGroupAddonModule,
    InputTextareaModule,
  ],
  templateUrl: './foods-menu.component.html',
  styleUrl: './foods-menu.component.scss',
})
export class FoodsMenuComponent {
  public itemsView: string = 'grid';
  items!: any[];
  reduceData!: any[];
  uploadedFiles: any[] = [];
  itemStatus: any[] = ['Available', 'Unavailable'];
  addCatalogdialogVisible: boolean = false;
  addItemedialogVisible: boolean = false;
  first = 0;
  rows = 10;
  @ViewChild('itemsTable') itemsTable!: any;
  constructor(
    private readonly itemService: ItemsService,
    private readonly fb: FormBuilder
  ) {}
  ngOnInit() {
    this.itemService.getItems().subscribe({
      next: (value) => {
        this.items = [...value];
      },
      error: (err) => {},
    });
  }
  public createCategoryForm: FormGroup = this.fb.group({
    categoryName: new FormControl(null, []),
    categoryIcon: new FormControl(null, []),
  });
  public createItemForm: FormGroup = this.fb.group({
    itemName: new FormControl(null, []),
    itemIcon: new FormControl(null, []),
    status: new FormControl(null, []),
    price: new FormControl(null, []),
    description: new FormControl(null, []),
    category: new FormControl(null, []),
    hasOffer: new FormControl(null, []),
    offerPercentage: new FormControl(null, []),
    offerDescription: new FormControl(null, []),
    offerStartDate: new FormControl(null, []),
    offerEndDate: new FormControl(null, []),
  });
  next() {
    this.first = this.first + this.rows;
  }

  prev() {
    this.first = this.first - this.rows;
  }

  reset() {
    this.first = 0;
  }

  pageChange(event: any) {
    this.first = event.first;
    this.rows = event.rows;
  }

  isLastPage(): boolean {
    return this.items ? this.first === this.items.length - this.rows : true;
  }

  isFirstPage(): boolean {
    return this.items ? this.first === 0 : true;
  }
  filterTable(event: any) {
    this.itemsTable?.filterGlobal(event.target.value, 'contains');
    this.reduceData = this.items.filter(
      (item) =>
        item.name === event.target.value ||
        item.category === event.target.value ||
        item.price == event.target.value ||
        item.status === event.target.value ||
        item.quantity == event.target.value
    );
    this.itemService.searchItems.next(this.reduceData);
  }
  onFileChange(event: any) {
    const files = event.currentFiles; // PrimeNG returns files as an array
    // this.requestNoteForm.patchValue({
    //   noteAttachement: [...files],
    // });
    this.createCategoryForm.get('categoryIcon')?.setValue(files);
  }
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//Angular Material
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatSortModule } from "@angular/material/sort";
import { MatTableModule } from "@angular/material/table";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatListModule } from '@angular/material/list';


//Components
// import { ToolbarComponent } from './material/toolbar/toolbar.component';
// import { ButtonComponent } from './material/button/button.component';
// import { SidebarComponent } from './material/sidebar/sidebar.component';
// import { PageTitleComponent } from './material/page-title/page-title.component';
// import { InputComponent } from './material/input/input.component';
// import { TableComponent } from './material/table/table.component';
// import { QuartoCardComponent } from './material/quarto-card/quarto-card.component';
// import { DialogComponent } from './material/dialog/dialog.component';
import { ButtonComponent } from './material/button/button.component';
import { PageTitleComponent } from './material/page-title/page-title.component';
import { InputComponent } from './material/input/input.component';
import { TableComponent } from './material/table/table.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        // MatAutocompleteModule,
        MatButtonModule,
        MatCardModule,
        // MatCheckboxModule,
        // MatChipsModule,
        MatDividerModule,
        // MatExpansionModule,
        MatIconModule,
        MatInputModule,
        MatListModule,
        // MatMenuModule,
        MatProgressSpinnerModule,
        MatPaginatorModule,
        // MatRippleModule,
        // MatSelectModule,
        MatSidenavModule,
        MatSnackBarModule,
        MatSortModule,
        MatTableModule,
        // MatTabsModule,
        MatToolbarModule,
        MatFormFieldModule,
        // MatButtonToggleModule,
        // MatTreeModule,
        // OverlayModule,
        // PortalModule,
        // MatBadgeModule,
        // MatGridListModule,
        // MatRadioModule,
        // MatDatepickerModule,
        // MatTooltipModule
     ],
    declarations: [
        // ToolbarComponent,
        ButtonComponent,
        // SidebarComponent,
        // PageTitleComponent,
        // TableComponent,
        // QuartoCardComponent,
        // DialogComponent

        ButtonComponent,
        PageTitleComponent,
        InputComponent,
        TableComponent,
  ],
    exports: [
        // SidebarComponent,
        MatCardModule,
        InputComponent,
        ButtonComponent,
        PageTitleComponent,
        TableComponent,
        // QuartoCardComponent,
        // DialogComponent
    ]
})
export class SharedModule {}
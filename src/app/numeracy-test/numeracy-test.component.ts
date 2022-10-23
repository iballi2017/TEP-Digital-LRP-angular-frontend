import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MobileNavigationDialogComponent } from '../shared/components/mobile-navigation-dialog/mobile-navigation-dialog.component';

@Component({
  selector: 'app-numeracy-test',
  templateUrl: './numeracy-test.component.html',
  styleUrls: ['./numeracy-test.component.scss']
})
export class NumeracyTestComponent implements OnInit {
  title = 'NUMERACY';
  literacyTestSideNavTitle = 'Level';
  menuList = [
    {
      title: 'NUMERACY',
    },
  ];
  navItemList: navItem[] = [
    // {
    //   name: 'Number recognition',
    //   url: 'levels/number-recognition',
    // },
    {
      name: 'Number recognition 1',
      url: 'levels/number-recognition-one',
    },
    {
      name: 'Number recognition 2',
      url: 'levels/number-recognition-two',
    },
    {
      name: 'Place value',
      url: 'levels/place-value',
    },
    {
      name: 'Number recognition 3',
      url: 'levels/number-recognition-three',
    },
    {
      name: 'Basic operations: Addition',
      url: 'levels/basic-operation-addition',
    },
    {
      name: 'Basic operations: Subtraction',
      url: 'levels/basic-operation-subtraction',
    },
    {
      name: 'Basic operations: Division',
      url: 'levels/basic-operation-division',
    },
    {
      name: 'Basic operations: Multiplication',
      url: 'levels/basic-operation-multiplication',
    }
  ];
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  
  onOpenMenu() {
    const dialogRef = this.dialog.open(MobileNavigationDialogComponent, {
      width: '100%',
      data: {
        navData: {
          title: this.literacyTestSideNavTitle,
          navItemList: this.navItemList,
        },
      },
    });
    // const dialogRef = this.dialog.open(LiteracyTestSideNavigationComponent, {
    //   width: '100%',
    // });

    dialogRef.afterClosed().subscribe((result) => {
      
    });
  }
}
export interface navItem {
  name: string;
  url: string;
}
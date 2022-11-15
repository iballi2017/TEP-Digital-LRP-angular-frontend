import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { GameType } from '../models/types/game-type';
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
      url: '/numeracy/levels/number-recognition-one',
    },
    {
      name: 'Number recognition 2',
      url: '/numeracy/levels/number-recognition-two',
    },
    {
      name: 'Place value',
      url: '/numeracy/levels/place-value',
    },
    {
      name: 'Number recognition 3',
      url: '/numeracy/levels/number-recognition-three',
    },
    {
      name: 'Basic operations: Addition',
      url: '/numeracy/levels/basic-operations-addition',
    },
    {
      name: 'Basic operations: Subtraction',
      url: '/numeracy/levels/basic-operations-subtraction',
    },
    {
      name: 'Basic operations: Division',
      url: '/numeracy/levels/basic-operations-division',
    },
    {
      name: 'Basic operations: Multiplication',
      url: '/numeracy/levels/basic-operations-multiplication',
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
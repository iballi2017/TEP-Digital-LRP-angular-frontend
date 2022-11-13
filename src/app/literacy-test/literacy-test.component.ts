import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { GameType } from '../models/types/game-type';
import { MobileNavigationDialogComponent } from '../shared/components/mobile-navigation-dialog/mobile-navigation-dialog.component';

@Component({
  selector: 'app-literacy-test',
  templateUrl: './literacy-test.component.html',
  styleUrls: ['./literacy-test.component.scss'],
})
export class LiteracyTestComponent implements OnInit {
  title = 'LITERACY';
  literacyTestSideNavTitle = 'Level';
  menuList = [
    {
      title: 'LITERACY',
    },
  ];
  navItemList: navItem[] = [
    {
      name: 'Letter',
      url: '/literacy/levels/lettering',
    },
    {
      name: 'Word',
      url: '/literacy/levels/word',
    },
    {
      name: 'Paragraph',
      url: '/literacy/levels/paragraph',
    },
    {
      name: 'Story',
      url: '/literacy/levels/story',
    }
  ];
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  
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

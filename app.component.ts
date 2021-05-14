import { Component } from '@angular/core';
import {CdkDragDrop, moveItemInArray, CdkDrag} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dragDrop';
  index=0;
  Components = ['Header','Table','Footer','Time','Dropdown','Spinner','Textbox','Button','Divider','Mask'];

  drop(event: CdkDragDrop<unknown>) {
    console.log(this.Components, event.previousIndex, event.currentIndex)
    moveItemInArray(this.Components, event.previousIndex, event.currentIndex);
    this.index=event.currentIndex;
  }

  // getComponentName(index){
  //     const name=this.Components.filter((item,index1)=> index1==index)
  //     console.log(name)
  //     return name;
  // }

  /**
   * Predicate function that only allows even numbers to be
   * sorted into even indices and odd numbers at odd indices.
   */
  sortPredicate(index: number, item: CdkDrag<number>) {
    return (index + 1) % 2 === item.data % 2;
  }
}

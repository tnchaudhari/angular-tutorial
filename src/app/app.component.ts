import { Component, computed, effect, Signal, signal, WritableSignal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LoginComponent, ProfileComponent],
  templateUrl: './app.component.html',
  // template: '<h1>Hello World!</h1>',
  styleUrl: './app.component.css',
  // styles: ['h1{background-color: white}'] //Style in component.ts file
  // styleUrls: ['./app.component.css', './profile.component.css'] //Load multiple css file in component
})
// export class AppComponent {
//   //Class properties and declaring its datatype
//   title: string = 'angular-tutorial';
//   //It mainly take two input type that is String and Number.
//   name: string | number = 'Tanmay Chaudhari';
//   //Here it will take any datatype even assigning boolean value to it.
//   nickName: any = true;

//   handleClickMe() {
//     this.otherFunction();
//     this.name = 30;
//     alert("Function Called!!");
//   }

//   otherFunction() {
//     console.log("Other Function called...");
//   }

//   sum(a: number, b: number) {
//     console.log(a + b);
//   }

//   count = 0;

//   decrement() {
//     this.count--;
//   }

//   reset() {
//     this.count = 0;
//   }

//   increment() {
//     this.count++;
//   }

//   handleAll(val?: string) {
//     if (val == 'minus') {
//       if (this.count == 0) {
//         alert("Value can't be negative.");
//       } else {
//         this.count--;
//       }
//     }
//     else if (val == 'plus') {
//       this.count++;
//     } else {
//       this.count = 0;
//     }
//   }
// }

//Events
// export class AppComponent {
//   handleEvent() {
//     console.log("Function called...")
//   }

//   handleMouseOver() {
//     console.log("Mouse got overed over the box...")
//   }

//   handleMouseLeave() {
//     console.log("Mouse got leaved the box...")
//   }

//   handleInputText(event: Event) {
//     console.log("Text entered...", (event.target as HTMLInputElement).value)
//   }

//   handleInputFocus() {
//     console.log("Mouse focused on Input box...")
//   }

//   handleInputBlur() {
//     console.log("Mouse moved...")
//   }
// }

// export class AppComponent {
//   name = ""
//   display = ""
//   email = ""
//   show = true;
//   getName(event: Event) {
//     this.name = (event.target as HTMLInputElement).value;
//   }

//   displayName() {
//     this.display = this.name
//   }

//   displayEmail(val: string) {
//     this.email = val
//   }
// }

// export class AppComponent {
//   show = true;
//   number = 10;
//   hide() {
//     this.show = !this.show;
//     // if (this.show == true) {
//     //   this.show = false;
//     // } else {
//     //   this.show = true
//     // }
//   }
//   color = 'orange'
//   handleColor(val: string) {
//     this.color = val;
//   }
// }

// export class AppComponent {
//   Users = ['Tanmay', 'Nikhil', 'Ravindra'];

//   Students = [{ Id: '1', Name: 'Tanmay', Job: 'IT' }, { Id: '2', Name: 'Nikhil', Job: 'SAP' }, { Id: '3', Name: 'Ravindra', Job: 'Mech Designer' },]
// }

//Signals
export class AppComponent {
  count = signal(10);
  x = 20;

  //This is used to read the value of signal when it get changed in Application.
  constructor() {
    effect(() => {
      console.log(this.count())
    })
  }
  updateValue() {
    this.count.set(this.count() + 1);
  }

  //Two types of Signals:
  //This type used to set the value for signal where we are mentioned here that the datatype for data variable and value stored in this variable can be number or string
  data: WritableSignal<string | number> = signal(10);
  inc: WritableSignal<number> = signal(10);
  //2nd type is Computed it is readonly and can be defined only once
  num: Signal<number> = computed(() => 100);
  updateEvent(event: Event) {
    this.data.set("hello");
    this.inc.update((v) => v + 1);
  }
}
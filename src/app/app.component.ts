import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { bootstrapApplication } from '@angular/platform-browser';
import { NgFor, NgStyle } from '@angular/common'; //
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NgFor, NgStyle],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'BackgroundColor';
  selectedColor = 'white';

  colors: string[] = [
    'red', 'blue', 'green', 'yellow', 'orange', 'purple', 'pink', 'brown', 'cyan', 'magenta',
    'lime', 'maroon', 'navy', 'olive', 'teal', 'aqua', 'coral', 'crimson', 'gold', 'indigo',
    'khaki', 'lavender', 'lightblue', 'lightgreen', 'lightpink', 'lightsalmon', 'lightseagreen',
    'lightskyblue', 'lightsteelblue', 'limegreen', 'mediumaquamarine', 'mediumblue',
    'mediumorchid', 'mediumpurple', 'mediumseagreen', 'mediumslateblue', 'mediumspringgreen',
    'mediumturquoise', 'mediumvioletred', 'midnightblue', 'mintcream', 'mistyrose', 'moccasin',
    'navajowhite', 'oldlace', 'orangered', 'orchid', 'palegoldenrod', 'palegreen'
  ];

  changeBackground(color: string) {
    this.selectedColor = color;
  }

  isDarkColor(color: string): boolean {
    const darkColors = ['black', 'blue', 'navy', 'purple', 'indigo', 'midnightblue', 'maroon'];
    return darkColors.includes(color.toLowerCase());
  }
}

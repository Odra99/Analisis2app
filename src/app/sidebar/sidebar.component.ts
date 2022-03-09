import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {CargarScriptsService} from './../cargar-scripts.service';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SidebarComponent implements OnInit {

  constructor(private _CargarScripts:CargarScriptsService) {
    _CargarScripts.Carga(['sidebar'])
   }

  ngOnInit(): void {

  }

}

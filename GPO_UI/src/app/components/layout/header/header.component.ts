import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {
  currentTab;
  constructor(private router: Router) { }

  ngOnInit() {
    this.currentTab = "home"
  }

  selectTab(currentTab) {
    this.currentTab = currentTab;
    switch (currentTab) {
      case "home": {
        this.router.navigate(['/home']);
        break;
      }
      case "create": {
        this.router.navigate(['/create']);
        break;
      }
      case "logout": {
        sessionStorage.removeItem("user");
        this.router.navigate(['/login']);
        break;
      }
      case "orders": {
        this.router.navigate(['/order-summary']);
        break;
      }
      default: {
        //statements; 
        break;
      }
    }

  }

}

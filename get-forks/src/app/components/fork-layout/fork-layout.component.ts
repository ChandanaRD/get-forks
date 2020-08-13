import { Component, OnInit, OnDestroy } from '@angular/core';
import { ApiService } from 'src/app/services/API/api.service';

@Component({
  selector: 'app-fork-layout',
  templateUrl: './fork-layout.component.html',
  styleUrls: ['./fork-layout.component.scss']
})
export class ForkLayoutComponent implements OnInit, OnDestroy {

  forkList$;
  forkList;
  isValidForkList;
  currentPageIndex = 0;
  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.subscriptions();
    this.apiService.getForkList();
  }

  subscriptions(){
    this.forkList$ = this.apiService.forkList$.subscribe(list=>{
      this.forkList = list;
      this.isValidForkList = Array.isArray(this.forkList);
    })
  }

  setForkList(index?) {
    this.currentPageIndex = index || index === 0 ? index: this.currentPageIndex;
    this.apiService.getForkList(index);
  }

  followUser(user, index){
    this.apiService.followUser(user).then((response)=>{
      this.forkList[index]['followed']= response.status === 204;
    })
  }

  ngOnDestroy(){
    if(this.forkList$){
      this.forkList$.unsubscribe();
    }
  }

}

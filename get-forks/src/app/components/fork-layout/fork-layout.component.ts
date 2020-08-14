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
  showPrevious = false;
  showNext  = false;
  constructor(private apiService: ApiService) { }

  /**
   * Initialize Component with Data
   */
  ngOnInit() {
    this.subscriptions();
    this.apiService.getForkList();
  }

  /**
   * Subcribe to Subjects
   */
  subscriptions(){
    this.forkList$ = this.apiService.forkList$.subscribe(list=>{
      this.forkList = list;
      this.isValidForkList = Array.isArray(this.forkList);
    })
  }

  /**
   * Get fork data based on Page Index
   * 
   * @description Pagination
   * @param index: Number
   */
  setForkList(index?) {
    this.currentPageIndex = index || index === 0 ? index: this.currentPageIndex;
    this.apiService.getForkList(index);
  }

  /**
   * Follow a Github User
   * If API fails, Display error
   * 
   * @param user: string - User to be followed
   * @param index: number - index in fork List
   */
  followUser(user, index){
    this.apiService.followUser(user).then((response)=>{
      this.forkList[index]['followed']= response.status === 204;
    },(reject) =>{
      this.forkList[index].errorText = reject.status === 401 ? `Please check your Github Personal Access Token` : reject.message
    }
    )
  }

  /**
   * Unsubscribe subjects
   */
  ngOnDestroy(){
    if(this.forkList$){
      this.forkList$.unsubscribe();
    }
  }

}

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RoutingComponent } from './routing.component';
import { Observable, Subject } from 'rxjs';
import { ActivatedRoute, Params, Router } from '@angular/router';

class RouterStub {
  navigate(path: string[]) {}
}
class ActivatedRouteStub {
  private subject = new Subject<Params>();
  push(params: Params) {
    this.subject.next(params);
  }
  get params() {
    return this.subject.asObservable();
  }
  // params: Observable<Params>;
}

describe('RoutingComponent', () => {
  let component: RoutingComponent;
  let fixture: ComponentFixture<RoutingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RoutingComponent],
      providers: [
        { provide: Router, useClass: RouterStub },
        { provide: ActivatedRoute, useClass: ActivatedRouteStub },
      ],
    });
    fixture = TestBed.createComponent(RoutingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be defined', () => {
    expect(component).toBeDefined();
  });
  it('should navigate to post if go back', () => {
    let router = fixture.debugElement.injector.get(Router);
    let spy = spyOn(router, 'navigate');
    component.goBack();
    expect(spy).toHaveBeenCalledWith(['/posts']);
  });
  it('Should navigate to 404 if id =0', () => {
    let router = fixture.debugElement.injector.get(Router);
    let spy = spyOn(router, 'navigate');
    let route: ActivatedRouteStub = TestBed.get(ActivatedRoute);
    route.push({ id: '0' });
    expect(spy).toHaveBeenCalledWith(['/404']);
  });
});

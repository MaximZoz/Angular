import { EMPTY, of } from 'rxjs';
import { PostsComponent } from './posts.component';
import { PostsService } from './posts.service';

describe('PostsComponent', () => {
  let component: PostsComponent;
  let service: PostsService;

  beforeEach(() => {
    service = new PostsService(null);
    component = new PostsComponent(service);
  });

  it('should call fetch when ngOnInit ', () => {
    const spy = spyOn(service, 'fetch').and.callFake(() => {
      return EMPTY;
    });
    component.ngOnInit();
    expect(spy).toHaveBeenCalled();
  });

  it('should update posts length after ngOnInit ', () => {
    const post = [1, 2, 3, 4];
    spyOn(service, 'fetch').and.returnValue(of(post));
    component.ngOnInit();
    expect(component.posts.length).toBe(post.length);
  });
});

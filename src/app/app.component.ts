import {
  ChangeDetectionStrategy,
  Component,
  HostListener,
  NgZone,
} from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public message: string = 'Msg init';
  public pdf: HTMLIFrameElement;

  constructor(private zone: NgZone) {}

  ngAfterContentInit() {
    this.pdf = document.getElementById('pdf') as HTMLIFrameElement;
    console.log('this.pdf', this.pdf)

    var a = this.pdf
    //this.pdf.addEventListener('load', () => {alert('load-1')} )
    
    var doc = this.pdf.contentWindow.document
    var x = doc.getElementById('pdf')
    console.log('doc', doc)
    doc.addEventListener('load', () => { alert('doc') })
      this?.pdf?.contentWindow.addEventListener    
  }

  public printMe(): void {
    //frames[1].focus();
    this.pdf.focus()
    this.pdf.contentWindow.print()
    frames.print();
  }

  @HostListener('window:beforeprint', ['$event'])
  onBeforePrint() {
    console.log('onBeforePrint');
    this.message = 'before print triggered ';
  }
}

import { Directive } from '@angular/core';

@Directive({
  selector: '[column]',
  host: {
    'style': `
    display: flex;
    flex-direction: column;
    `},
  standalone: true
})
export class ColumnDirective {
}

@Directive({
  selector: '[row]',
  host: {
    'style': `
    display: flex;
    flex-direction: row;
    `},
  standalone: true
})
export class RowDirective {
}

@Directive({
  selector: '[rowgap]',
  host: {
    'style': `
      display: flex;
      flex-direction: row;
      gap: var(--gap-medium);
    `},
  standalone: true
})
export class GapDirective {
}

@Directive({
  selector: '[centered]',
  host: {
    'style': `
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    `},
  standalone: true
})
export class CenteredDirective {
}

@Directive({
  selector: '[border]',
  host: {
    'style': `
    border:1px solid 10px;
    padding: 10px
    ` },
  standalone: true
})
export class BorderDirective {
}

@Directive({
  selector: '[bold]',
  host: { 'style': `font-weight:bold;` },
  standalone: true
})
export class FontBoldDirective {
}

@Directive({
  selector: '[height-medium]',
  host: { 'style': `height:100px;` },
  standalone: true,
})
export class HeightDirective {
}

@Directive({
  selector: '[full-width]',
  host: { style: `width:100%;` },
  standalone: true,
})
export class WidthDirective {
}

@Directive({
  selector: '[boxed]',
  standalone: true,
  host: {
    'style': `
      background-color:blue;
      color: white;
    ` },
  hostDirectives: [
    FontBoldDirective,
    WidthDirective,
    BorderDirective
  ],
})
export class BoxedDirective {
}

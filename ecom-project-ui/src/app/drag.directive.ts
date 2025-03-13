import { Directive, HostListener, ElementRef, HostBinding, Output, EventEmitter } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { FileHandle } from './_model/file-handle.model'; // Import FileHandle class

@Directive({
  selector: '[appDrag]'
})
export class DragDirective {

  @Output() files: EventEmitter<FileHandle> = new EventEmitter(); // Corrected the type

  @HostBinding("style.background") private background = "#eee";

  constructor(private sanitizer: DomSanitizer, private el: ElementRef) { }

  // Prevent the default behavior of dragging over the element
  @HostListener('dragover', ['$event'])
  onDragOver(event: DragEvent): void {
    event.preventDefault();  // Essential to allow drop
    event.stopPropagation(); // Prevents event from propagating
    this.background = '#999'; // Change background on drag over
  }

  // Handle the drag leaving the target element
  @HostListener('dragleave', ['$event'])
  onDragLeave(event: DragEvent): void {
    event.preventDefault();
    event.stopPropagation();
    this.background = "#eee"; // Reset background when leaving the area
  }

  // Handle the actual drop event
  @HostListener('drop', ['$event'])
  onDrop(event: DragEvent): void {
    event.preventDefault();
    event.stopPropagation();
    this.setBackground('#eee'); // Reset background on drop

    const files = event.dataTransfer?.files;
      const file = files[0];
      const fileUrl = this.sanitizer.bypassSecurityTrustUrl(window.URL.createObjectURL(file));

      const fileHandle: FileHandle = { file, url: fileUrl }; // Create FileHandle object

      this.files.emit(fileHandle); // Emit the fileHandle object to the parent component
  
  }

  // Helper method to set background color
  private setBackground(color: string): void {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
